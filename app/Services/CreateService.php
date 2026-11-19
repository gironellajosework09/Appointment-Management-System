<?php

declare(strict_types=1);

namespace App\Services;

use App\Models\Service;
use App\Models\User;
use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Support\Facades\DB;
use RuntimeException;

final class CreateService
{
    public function execute(Authenticatable $actor, string $name): Service
    {
        $installationId = Service::installationId();
        $actorId = $actor->getAuthIdentifier();
        if ($actorId === null || $actorId === '') {
            throw new RuntimeException('Actor context unavailable.');
        }

        if (! $actor instanceof User || ! is_string($actor->installation_id) || $actor->installation_id !== $installationId) {
            throw new RuntimeException('Actor installation context unavailable.');
        }

        return DB::transaction(function () use ($installationId, $actorId, $name): Service {
            $service = Service::query()->create([
                'installation_id' => $installationId,
                'name' => $name,
            ]);

            $inserted = DB::table('audit_events')->insert([
                'installation_id' => $installationId,
                'actor_id' => $actorId,
                'action' => 'service.created',
                'subject_id' => $service->getKey(),
                'occurred_at' => now(),
                'outcome' => 'success',
            ]);

            if (! $inserted) {
                throw new RuntimeException('Required evidence unavailable.');
            }

            return $service;
        });
    }
}
