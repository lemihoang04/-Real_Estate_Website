<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Property;

class PropertyController extends Controller
{
    public function index(Request $request)
    {
        $query = Property::query();

        // Filter
        if ($request->city) $query->where('city', $request->city);
        if ($request->status) $query->where('status', $request->status);
        if ($request->min_price) $query->where('price', '>=', $request->min_price);
        if ($request->max_price) $query->where('price', '<=', $request->max_price);

        // Sort
        if ($request->sort && $request->order) {
            $query->orderBy($request->sort, $request->order);
        }

        return $query->paginate(10);
    }

    public function store(PropertyRequest $request)
    {
        $property = Property::create($request->validated());

        // Upload ảnh nếu có
        if ($request->hasFile('images')) {
            foreach ($request->file('images') as $file) {
                $path = $file->store('properties', 'public');
                $property->images()->create([
                    'image_path' => "/storage/$path",
                    'image_name' => $file->getClientOriginalName()
                ]);
            }
        }

        return response()->json(['message' => 'Property created successfully', 'data' => $property]);
    }

    public function show($id)
    {
        $property = Property::with('images')->findOrFail($id);
        return $property;
    }

    public function update(PropertyRequest $request, $id)
    {
        $property = Property::findOrFail($id);
        $property->update($request->validated());
        return response()->json(['message' => 'Property updated successfully']);
    }

    public function destroy($id)
    {
        $property = Property::findOrFail($id);
        $property->delete();
        return response()->json(['message' => 'Property deleted successfully']);
    }

    public function restore($id)
    {
        $property = Property::withTrashed()->findOrFail($id);
        $property->restore();
        return response()->json(['message' => 'Property restored successfully']);
    }
}
