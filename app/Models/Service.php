<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use RuntimeException;

final class Service extends Model
{
    protected $fillable = ['installation_id', 'name'];

    public static function installationId(): string
    {
        $id = config('itakda.installation_id');

        if (! is_string($id) || trim($id) === '') {
            throw new RuntimeException('Installation context unavailable.');
        }

        return $id;
    }

    public function scopeForInstallation(Builder $query): Builder
    {
        return $query->where('installation_id', self::installationId());
    }

    public static function findForInstallation(string $id): self
    {
        return self::query()->forInstallation()->whereKey($id)->firstOrFail();
    }
}
