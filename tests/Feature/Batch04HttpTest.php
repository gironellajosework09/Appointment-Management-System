<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Support\Facades\DB;
use PDO;
use RuntimeException;
use Tests\TestCase;

/**
 * Synthetic-only HTTP checks against the isolated test database.
 *
 * Opt-in via ITAKDA_RUN_SYNTHETIC_DB_TESTS=1. Evidence rows are read with the
 * migration account because the application account intentionally cannot SELECT them.
 */
final class Batch04HttpTest extends TestCase
{
    private const ADMIN_ID = 900001;
    private const INSTALLATION = 'synthetic-http-test';

    private ?PDO $reader = null;

    protected function setUp(): void
    {
        if (getenv('ITAKDA_RUN_SYNTHETIC_DB_TESTS') !== '1') {
            self::markTestSkipped('Synthetic database tests require explicit opt-in.');
        }
        parent::setUp();
    }

    public function test_unauthenticated_catalog_request_is_refused(): void
    {
        $this->get('/internal/services')
            ->assertStatus(503)
            ->assertSee('Internal access is not available.');
    }

    public function test_authenticated_user_without_mfa_session_is_refused(): void
    {
        $this->actingAs($this->admin())
            ->get('/internal/services')
            ->assertStatus(503)
            ->assertSee('Internal access is not available.');
    }

    public function test_mfa_session_for_a_different_identity_is_refused(): void
    {
        $this->actingAs($this->admin())
            ->withSession(['internal.mfa_verified' => self::ADMIN_ID + 1])
            ->get('/internal/services')
            ->assertStatus(503)
            ->assertSee('Internal access is not available.');
    }

    public function test_administrator_without_a_confirmed_factor_is_refused(): void
    {
        $this->actingAs($this->admin(['two_factor_confirmed_at' => null]))
            ->withSession(['internal.mfa_verified' => self::ADMIN_ID])
            ->get('/internal/services')
            ->assertStatus(503)
            ->assertSee('Internal access is not available.');
    }

    public function test_authorized_administrator_can_view_the_installation_catalog(): void
    {
        $name = 'synthetic-http-'.bin2hex(random_bytes(6));
        $id = $this->service($name);

        $this->verified()
            ->get('/internal/services')
            ->assertOk()
            ->assertSee($name)
            ->assertSee('aria-label="View '.$name.'"', false)
            ->assertSee('aria-label="Edit '.$name.'"', false);

        $this->verified()
            ->get('/internal/services/'.$id)
            ->assertOk()
            ->assertSee($name)
            ->assertSee('Edit service');

        $this->verified()
            ->get('/internal/services/'.$id.'/edit')
            ->assertOk()
            ->assertSee('value="'.$name.'"', false);
    }

    public function test_service_from_another_installation_is_not_found(): void
    {
        $id = $this->service('synthetic-foreign-'.bin2hex(random_bytes(6)), 'synthetic-other-installation');

        $this->verified()->get('/internal/services/'.$id)->assertNotFound();
        $this->verified()->get('/internal/services/'.$id.'/edit')->assertNotFound();
        $this->verified()
            ->put('/internal/services/'.$id, ['name' => 'cross-installation-rewrite'])
            ->assertNotFound();

        self::assertNotSame('cross-installation-rewrite', DB::table('services')->where('id', $id)->value('name'));
    }

    public function test_missing_service_returns_not_found(): void
    {
        $this->verified()->get('/internal/services/999999999')->assertNotFound();
        $this->verified()->get('/internal/services/999999999/edit')->assertNotFound();
    }

    public function test_unsupported_update_fields_are_rejected_without_a_change(): void
    {
        $original = 'synthetic-keep-'.bin2hex(random_bytes(6));
        $id = $this->service($original);

        $this->verified()
            ->from('/internal/services/'.$id.'/edit')
            ->put('/internal/services/'.$id, ['name' => 'synthetic-renamed', 'description' => 'unapproved'])
            ->assertRedirect('/internal/services/'.$id.'/edit')
            ->assertSessionHasErrors('description');

        self::assertSame($original, DB::table('services')->where('id', $id)->value('name'));
        self::assertSame(0, $this->auditCount($id));
    }

    public function test_successful_update_is_persisted_with_attributable_evidence(): void
    {
        $id = $this->service('synthetic-before-'.bin2hex(random_bytes(6)));
        $renamed = 'synthetic-after-'.bin2hex(random_bytes(6));

        $this->verified()
            ->put('/internal/services/'.$id, ['name' => '  '.$renamed.'  '])
            ->assertRedirect('/internal/services/'.$id)
            ->assertSessionHas('service_status', 'Service updated.');

        self::assertSame($renamed, DB::table('services')->where('id', $id)->value('name'));
        $events = $this->auditRows($id);
        self::assertCount(1, $events);
        self::assertSame((string) self::ADMIN_ID, $events[0]['actor_id']);
        self::assertSame(self::INSTALLATION, $events[0]['installation_id']);
        self::assertSame('success', $events[0]['outcome']);
    }

    public function test_unexpected_update_failure_shows_the_uncertain_outcome_without_a_change(): void
    {
        $original = 'synthetic-still-'.bin2hex(random_bytes(6));
        $id = $this->service($original);

        DB::connection()->beforeExecuting(static function (string $query): void {
            if (str_contains(strtolower($query), 'audit_events')) {
                throw new RuntimeException('Forced evidence failure.');
            }
        });

        $this->verified()
            ->put('/internal/services/'.$id, ['name' => 'synthetic-must-not-persist'])
            ->assertStatus(503)
            ->assertSee('Service outcome unavailable')
            ->assertSee('The result could not be confirmed.');

        self::assertSame($original, DB::table('services')->where('id', $id)->value('name'));
        self::assertSame(0, $this->auditCount($id));
    }

    private function verified(): self
    {
        return $this->actingAs($this->admin())->withSession(['internal.mfa_verified' => self::ADMIN_ID]);
    }

    /** @param array<string, mixed> $overrides */
    private function admin(array $overrides = []): User
    {
        $user = new User();
        $user->setRawAttributes(array_merge([
            'id' => self::ADMIN_ID,
            'installation_id' => self::INSTALLATION,
            'login' => 'synthetic-admin',
            'password' => 'unused',
            'active' => 1,
            'two_factor_confirmed_at' => '2026-11-19 00:00:00',
            'two_factor_secret' => 'synthetic-secret',
        ], $overrides), true);

        return $user;
    }

    private function auditCount(int $id): int
    {
        return count($this->auditRows($id));
    }

    /** @return list<array<string, mixed>> */
    private function auditRows(int $id): array
    {
        $statement = $this->reader()->prepare('SELECT * FROM audit_events WHERE subject_id = ? AND action = ?');
        $statement->execute([$id, 'service.updated']);

        return $statement->fetchAll(PDO::FETCH_ASSOC);
    }

    private function reader(): PDO
    {
        if ($this->reader === null) {
            $directory = dirname((string) getenv('ITAKDA_DB_CREDENTIAL_FILE'));
            $values = parse_ini_file($directory.'/migration.cnf', true, INI_SCANNER_RAW)['client'] ?? [];
            if (! isset($values['user'], $values['password'])) {
                self::fail('The synthetic reader credentials are unavailable.');
            }
            $host = getenv('ITAKDA_SYNTHETIC_DB_HOST') ?: '127.0.0.1';
            $port = getenv('ITAKDA_SYNTHETIC_DB_PORT') ?: '23372';
            $database = getenv('ITAKDA_SYNTHETIC_DB_DATABASE') ?: 'itakda_test_synthetic';
            $this->reader = new PDO(
                'mysql:host='.$host.';port='.$port.';dbname='.$database.';charset=utf8mb4',
                $values['user'], $values['password'], [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION],
            );
        }

        return $this->reader;
    }

    private function service(string $name, string $installation = self::INSTALLATION): int
    {
        return (int) DB::table('services')->insertGetId([
            'installation_id' => $installation,
            'name' => $name,
        ]);
    }
}
