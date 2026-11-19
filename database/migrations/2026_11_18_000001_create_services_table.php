<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('services', function (Blueprint $table): void {
            $table->engine = 'InnoDB';
            $table->id();
            $table->string('installation_id');
            $table->string('name', 120);
            $table->timestamps();
            $table->index('installation_id');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('services');
    }
};
