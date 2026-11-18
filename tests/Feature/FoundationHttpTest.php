<?php

declare(strict_types=1);

namespace Tests\Feature;

use PHPUnit\Framework\Attributes\DataProvider;
use PHPUnit\Framework\TestCase;

final class FoundationHttpTest extends TestCase
{
    #[DataProvider('requests')]
    public function test_entry_point_fails_closed_or_returns_a_neutral_response(
        ?string $context,
        ?string $environment,
        ?string $debug,
        int $status,
        string $body,
        bool $brokenConfiguration = false,
        ?string $cachedConfiguration = null,
    ): void {
        $root = dirname(__DIR__, 2);
        $temporary = $root.'/tmp/sdd001-testing';
        if (! is_dir($temporary)) {
            mkdir($temporary, 0777, true);
        }

        $env = [
            'SystemRoot' => getenv('SystemRoot') ?: 'C:\\Windows',
            'WINDIR' => getenv('WINDIR') ?: 'C:\\Windows',
            'PATH' => dirname(PHP_BINARY),
            'TEMP' => $temporary,
            'TMP' => $temporary,
            'HOME' => $temporary,
            'USERPROFILE' => $temporary,
        ];
        foreach (['ITAKDA_CONTEXT' => $context, 'APP_ENV' => $environment, 'APP_DEBUG' => $debug] as $name => $value) {
            if ($value !== null) {
                $env[$name] = $value;
            }
        }
        if ($brokenConfiguration) {
            $fixture = $temporary.'/invalid-config.php';
            file_put_contents($fixture, "<?php throw new RuntimeException('fictional-secret-marker');");
            $env['APP_ROUTES_CACHE'] = 'tmp/sdd001-testing/invalid-config.php';
        }
        $cacheFile = null;
        $marker = null;
        $environmentFile = null;
        $cacheCreated = false;
        $environmentFileCreated = false;

        $script = <<<'PHP'
$_SERVER['REQUEST_METHOD'] = 'GET';
$_SERVER['REQUEST_URI'] = '/';
$_SERVER['SERVER_NAME'] = 'localhost';
$_SERVER['SERVER_PORT'] = '80';
$_SERVER['HTTP_HOST'] = 'localhost';
ob_start();
require $argv[1];
$body = ob_get_clean();
echo json_encode(['status' => http_response_code() ?: 200, 'body' => $body, 'database_drivers' => PDO::getAvailableDrivers()]);
PHP;
        try {
            if ($cachedConfiguration !== null) {
                $cacheFile = $cachedConfiguration === 'default'
                    ? $root.'/bootstrap/cache/config.php'
                    : $temporary.'/override-cache.php';
                $marker = $temporary.'/cache-executed-'.bin2hex(random_bytes(8));
                $file = @fopen($cacheFile, 'x');
                self::assertIsResource($file, 'A configuration cache already exists; refusing to overwrite it.');
                $cacheCreated = true;
                fwrite($file, '<?php file_put_contents('.var_export($marker, true).", 'executed'); return ['app' => ['env' => 'production', 'debug' => true]];");
                fclose($file);
                if ($cachedConfiguration === 'override') {
                    $env['APP_CONFIG_CACHE'] = 'tmp/sdd001-testing/override-cache.php';
                } elseif ($cachedConfiguration === 'dotenv') {
                    $environmentFile = $root.'/.env.testing';
                    $file = @fopen($environmentFile, 'x');
                    self::assertIsResource($file, 'The testing environment file already exists; refusing to overwrite it.');
                    $environmentFileCreated = true;
                    fwrite($file, "APP_CONFIG_CACHE=tmp/sdd001-testing/override-cache.php\n");
                    fclose($file);
                }
            }
            $process = proc_open([
                PHP_BINARY, '-n',
                '-d', 'extension_dir='.ini_get('extension_dir'),
                '-d', 'extension=openssl',
                '-d', 'extension=mbstring',
                '-d', 'extension=fileinfo',
                '-d', 'allow_url_fopen=0',
                '-d', 'disable_functions=exec,shell_exec,system,passthru,proc_open,popen,mail,fsockopen,pfsockopen,stream_socket_client,stream_socket_server,socket_create,socket_connect',
                '-r', $script, $root.'/public/index.php',
            ], [1 => ['pipe', 'w'], 2 => ['pipe', 'w']], $pipes, $root, $env);

            self::assertIsResource($process);
            $output = stream_get_contents($pipes[1]);
            $error = stream_get_contents($pipes[2]);
            fclose($pipes[1]);
            fclose($pipes[2]);
            self::assertSame(0, proc_close($process), $error);
            $response = json_decode($output, true);
            self::assertSame($status, $response['status'], $error);
            self::assertSame([], $response['database_drivers'], $error);
            if ($status === 200) {
                self::assertStringContainsString($body, $response['body']);
                self::assertStringContainsString('href="#how-it-works"', $response['body']);
                self::assertStringContainsString('id="how-it-works"', $response['body']);
                self::assertStringContainsString('href="#availability"', $response['body']);
                self::assertStringContainsString('id="availability"', $response['body']);
                self::assertStringContainsString('Booking is not available yet', $response['body']);
                self::assertStringContainsString('sign-in are not operational', $response['body']);
                self::assertStringContainsString('aria-labelledby="availability-title"', $response['body']);
            } else {
                self::assertSame($body, $response['body'], $error);
            }
            if ($marker !== null) {
                self::assertFileDoesNotExist($marker, 'Cached configuration executed.');
            }
        } finally {
            if ($environmentFileCreated && is_file($environmentFile)) {
                unlink($environmentFile);
            }
            if ($cacheCreated && is_file($cacheFile)) {
                unlink($cacheFile);
            }
            if ($marker !== null && is_file($marker)) {
                unlink($marker);
            }
        }
    }

    #[DataProvider('calendarMonths')]
    public function test_illustration_uses_current_month_and_first_day(string $instant, string $heading, string $date, int $offset, int $days): void
    {
        $root = dirname(__DIR__, 2);
        $temporary = $root.'/tmp/sdd001-testing';
        if (! is_dir($temporary)) {
            mkdir($temporary, 0777, true);
        }
        $environment = [
            'SystemRoot' => getenv('SystemRoot') ?: 'C:\\Windows',
            'WINDIR' => getenv('WINDIR') ?: 'C:\\Windows',
            'PATH' => dirname(PHP_BINARY),
            'TEMP' => $temporary,
            'TMP' => $temporary,
            'HOME' => $temporary,
            'USERPROFILE' => $temporary,
            'ITAKDA_CONTEXT' => 'testing',
            'APP_ENV' => 'testing',
            'APP_DEBUG' => 'false',
        ];
        $script = <<<'PHP'
require $argv[1].'/vendor/autoload.php';
\Carbon\Carbon::setTestNow(\Carbon\Carbon::parse($argv[2]));
$_SERVER['REQUEST_METHOD'] = 'GET';
$_SERVER['REQUEST_URI'] = '/';
$_SERVER['SERVER_NAME'] = 'localhost';
$_SERVER['SERVER_PORT'] = '80';
$_SERVER['HTTP_HOST'] = 'localhost';
require $argv[1].'/public/index.php';
PHP;
        $process = proc_open([
            PHP_BINARY, '-n',
            '-d', 'extension_dir='.ini_get('extension_dir'),
            '-d', 'extension=openssl',
            '-d', 'extension=mbstring',
            '-d', 'extension=fileinfo',
            '-d', 'allow_url_fopen=0',
            '-d', 'disable_functions=exec,shell_exec,system,passthru,proc_open,popen,mail,fsockopen,pfsockopen,stream_socket_client,stream_socket_server,socket_create,socket_connect',
            '-r', $script, $root, $instant,
        ], [1 => ['pipe', 'w'], 2 => ['pipe', 'w']], $pipes, $root, $environment);
        self::assertIsResource($process);
        $html = stream_get_contents($pipes[1]);
        $error = stream_get_contents($pipes[2]);
        fclose($pipes[1]);
        fclose($pipes[2]);
        self::assertSame(0, proc_close($process), $error);
        self::assertStringContainsString($heading, $html);
        self::assertStringContainsString($date, $html);
        self::assertStringContainsString('Appointment illustration', $html);
        self::assertStringNotContainsString('not an actual appointment or live availability', $html);

        $document = new \DOMDocument();
        @$document->loadHTML($html);
        $xpath = new \DOMXPath($document);
        $cells = $xpath->query("//*[contains(concat(' ', normalize-space(@class), ' '), ' art-grid ')]/span");
        self::assertNotFalse($cells);
        $contents = [];
        foreach ($cells as $cell) {
            $contents[] = trim($cell->textContent);
        }
        $dates = array_slice($contents, 7);
        self::assertSame(array_fill(0, $offset, ''), array_slice($dates, 0, $offset));
        self::assertSame(array_map('strval', range(1, $days)), array_slice($dates, $offset, $days));
        self::assertCount($offset + $days, $dates);
        $selected = $xpath->query("//*[contains(concat(' ', normalize-space(@class), ' '), ' art-grid ')]/span[contains(concat(' ', normalize-space(@class), ' '), ' selected ')]");
        self::assertSame(1, $selected->length);
        self::assertSame('1', trim($selected->item(0)->textContent));
    }

    public static function calendarMonths(): array
    {
        return [
            'November 2026' => ['2026-11-15 12:00:00 UTC', 'November 2026', 'Sun, 1 Nov', 6, 30],
            'December 2026' => ['2026-12-15 12:00:00 UTC', 'December 2026', 'Tue, 1 Dec', 1, 31],
            'Configured UTC at Manila month boundary' => ['2026-12-01 00:30:00 Asia/Manila', 'November 2026', 'Sun, 1 Nov', 6, 30],
            'January 2027' => ['2027-01-15 12:00:00 UTC', 'January 2027', 'Fri, 1 Jan', 4, 31],
            'February leap year' => ['2028-02-15 12:00:00 UTC', 'February 2028', 'Tue, 1 Feb', 1, 29],
            'February common year' => ['2027-02-15 12:00:00 UTC', 'February 2027', 'Mon, 1 Feb', 0, 28],
        ];
    }
    public static function requests(): array
    {
        return [
            'local' => ['local', 'local', 'false', 200, 'Booked your way,'],
            'testing' => ['testing', 'testing', 'false', 200, 'Booked your way,'],
            'missing' => [null, null, null, 503, 'Local foundation unavailable.'],
            'mixed' => ['testing', 'local', 'false', 503, 'Local foundation unavailable.'],
            'production' => ['production', 'production', 'false', 503, 'Local foundation unavailable.'],
            'debug' => ['local', 'local', 'true', 503, 'Local foundation unavailable.'],
            'sensitive invalid debug' => ['local', 'local', 'fictional-secret-marker', 503, 'Local foundation unavailable.'],
            'bootstrap failure' => ['local', 'local', 'false', 503, 'Local foundation unavailable.', true],
            'default cached configuration' => ['local', 'local', 'false', 503, 'Local foundation unavailable.', false, 'default'],
            'overridden cached configuration' => ['testing', 'testing', 'false', 503, 'Local foundation unavailable.', false, 'override'],
            'environment-file cache override' => ['testing', 'testing', 'false', 503, 'Local foundation unavailable.', false, 'dotenv'],
        ];
    }
}
