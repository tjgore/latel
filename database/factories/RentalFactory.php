<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Room>
 */
class RentalFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->company(),
            'street_address' => fake()->streetAddress(),
            'city' => fake()->city(),
            'state' => fake()->state(),
            'country' => fake()->country(),

            'total_bedrooms' => fake()->numberBetween(1, 4),
            'total_bathrooms' => fake()->numberBetween(1, 4),
            'total_beds' => fake()->randomElement([1, 2, 4]),

            'square_feet' => fake()->numberBetween(150, 2000),
            'max_capacity' => fake()->numberBetween(1, 4),
            'usd_price_per_night' => fake()->numberBetween(100, 500),
            'view' => fake()->randomElement(['Ocean', 'City', 'Garden', 'Pool', 'No View']),

            'has_full_kitchen' => fake()->boolean(),
            'has_air_conditioning' => true,
            'has_free_WiFi' => true,
            'has_tv' => true,
            'has_baby_bed' => fake()->boolean(),
            'has_room_service' => fake()->boolean(),
            'has_free_breakfast' => fake()->boolean(),
            'has_fridge' => true,
            'has_balcony' => fake()->boolean(),
            'has_private_pool' => fake()->boolean(),
            'has_hot_tub' => fake()->boolean(),
            'has_microwave' => fake()->boolean(),
            'has_fireplace' => fake()->boolean(),

            'description' => fake()->paragraph(),
        ];
    }
}
