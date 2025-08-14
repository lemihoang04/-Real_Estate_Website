<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PropertyRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
    'title'         => 'required|string|max:255',
    'description'   => 'nullable|string|max:2000',

    'property_type' => 'required|string|in:apartment,house,land,villa,office',
    'status'        => 'required|string|in:available,sold,rented',

    'price'         => 'required|numeric|min:0',
    'area'          => 'required|numeric|min:0',
    'bedrooms'      => 'nullable|integer|min:0|max:50',
    'bathrooms'     => 'nullable|integer|min:0|max:50',
    'floors'        => 'nullable|integer|min:0|max:100',

    'address'       => 'required|string|max:500',
    'city'          => 'required|string|max:100',
    'district'      => 'nullable|string|max:100',
    'postal_code'   => 'nullable|string|max:20',

    'latitude'      => 'nullable|numeric|between:-90,90',
    'longitude'     => 'nullable|numeric|between:-180,180',
    'year_built'    => 'nullable|integer|min:1800|max:' . date('Y'),

    'features'      => 'nullable|string',

    'images.*'      => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',

    'contact_name'  => 'required|string|max:100',
    'contact_phone' => 'required|regex:/^[0-9\+\-\(\)\s]+$/|min:8|max:15',
    'contact_email' => 'nullable|email|max:255',

    'created_by'    => 'nullable|integer|exists:users,id',
    'updated_by'    => 'nullable|integer|exists:users,id',
];
    }
}
