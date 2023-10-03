<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('rentals', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            
            $table->string('street_address');
            $table->string('city');
            $table->string('state');
            $table->string('country');

            $table->unsignedInteger('total_bedrooms');
            $table->unsignedInteger('total_bathrooms');
            $table->unsignedInteger('total_beds');
            $table->unsignedInteger('square_feet');
            $table->unsignedInteger('max_capacity');
            $table->unsignedInteger('usd_price_per_night');
            $table->string('view')->nullable();

            $table->boolean('has_full_kitchen')->default(false);
            $table->boolean('has_air_conditioning')->default(false);
            $table->boolean('has_free_WiFi')->default(false);
            $table->boolean('has_tv')->default(false);
            $table->boolean('has_baby_bed')->default(false);
            $table->boolean('has_room_service')->default(false);
            $table->boolean('has_free_breakfast')->default(false);
            $table->boolean('has_fridge')->default(false);
            $table->boolean('has_balcony')->default(false);
            $table->boolean('has_private_pool')->default(false);
            $table->boolean('has_hot_tub')->default(false);
            $table->boolean('has_microwave')->default(false);
            $table->boolean('has_fireplace')->default(false);

            $table->string('description')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('rooms');
    }
};
