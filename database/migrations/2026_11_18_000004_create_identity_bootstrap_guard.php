<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('identity_bootstrap_guard', static function (Blueprint $table): void {
            $table->engine = 'InnoDB';
            $table->string('installation_id', 120)->primary();
            $table->timestamp('created_at');
        });
    }

    public function down(): void
    {
        throw new RuntimeException('Bootstrap guard rollback is disabled; separate authorization is required.');
    }
};
