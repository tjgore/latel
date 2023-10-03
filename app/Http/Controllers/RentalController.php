<?php

namespace App\Http\Controllers;

use App\Models\Rental;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class RentalController extends Controller
{
    public function index(Request $request): JsonResponse
    {
        return response()->json([
            'rentals' => Rental::select([
                'id', 'name', 'total_beds', 'max_capacity', 'total_bathrooms', 'total_bedrooms', 'street_address', 'city', 'state', 'country'
            ])->paginate()
        ]);
    }

    public function show(Rental $rental): JsonResponse
    {
        return response()->json($rental);
    }

    public function create(Request $request): JsonResponse
    {

        $request->validate([
            'name' => 'required|string|max:255',
            'street_address' => 'required|string|max:255',
            'city' => 'required|string|max:255',
            'state' => 'required|string|max:255',
            'country' => 'required|string|max:255',
            'total_bedrooms' => 'required|integer|min:1',
            'total_bathrooms' => 'required|integer|min:1',
            'total_beds' => 'required|integer|min:1',
            'square_feet' => 'required|integer|min:150',
            'max_capacity' => 'required|integer|min:1',
            'usd_price_per_night' => 'required|integer',
            'view' => 'nullable|string|max:255',
            'has_full_kitchen' => 'required|boolean',
            'has_air_conditioning' => 'required|boolean',
            'has_free_WiFi' => 'required|boolean',
            'has_tv' => 'required|boolean',
            'has_baby_bed' => 'required|boolean',
            'has_room_service' => 'required|boolean',
            'has_free_breakfast' => 'required|boolean',
            'has_fridge' => 'required|boolean',
            'has_balcony' => 'required|boolean',
            'has_private_pool' => 'required|boolean',
            'has_hot_tub' => 'required|boolean',
            'has_microwave' => 'required|boolean',
            'has_fireplace' => 'required|boolean',
            'description' => 'nullable|string',
        ]);

        $rental = new Rental();
        $rental->name = $request->input('name');
        $rental->street_address = $request->input('street_address');

        $rental->save();

        return response()->json([
            'message' => 'Room created successfully'
        ], 201);
    }
}
