<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('audit_events', function (Blueprint $table): void {
            $table->engine = 'InnoDB';
            $table->id();
            $table->string('installation_id');
            $table->string('actor_id');
            $table->string('action');
            $table->unsignedBigInteger('subject_id');
            $table->timestamp('occurred_at');
            $table->string('outcome');
            $table->index(['installation_id', 'subject_id']);
        });
    }

    public function down(): void
    {
        throw new LogicException('Audit evidence requires an explicitly authorized retention and recovery procedure.');
    }
};
