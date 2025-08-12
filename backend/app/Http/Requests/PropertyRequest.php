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
            'title' => 'required|string|max:255',
            'price' => 'required|numeric|min:0',
            'area' => 'required|numeric|min:0',
            'city' => 'required|string|max:100',
            'district' => 'required|string|max:100',
            'status' => 'required|in:available,sold,rented,pending',
            'images.*' => 'nullable|image|mimes:jpeg,png,jpg|max:2048'
        ];
    }
}
