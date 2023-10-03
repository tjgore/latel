<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Rental extends Model
{
    use HasFactory;

    protected $appends = ['full_address'];

    protected function fullAddress(): Attribute
    {
        return Attribute::make(
            get: fn (mixed $value, array $attributes) => sprintf('%s, %s, %s, %s', $attributes['street_address'], $attributes['city'], $attributes['state'], $attributes['country'])
        );
    }
}
