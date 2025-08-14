<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Property;
use App\Http\Requests\PropertyRequest;

class PropertyController extends Controller
{
    public function index(Request $request)
{
    $query = Property::with('images');

    if ($request->has('city')) {
        $query->where('city', $request->city);
    }

    if ($request->has('status')) {
        $query->where('status', $request->status);
    }

    if ($request->has('min_price')) {
        $query->where('price', '>=', $request->min_price);
    }

    if ($request->has('max_price')) {
        $query->where('price', '<=', $request->max_price);
    }

    $sort = $request->get('sort', 'id');
    $order = $request->get('order', 'asc'); 
    $query->orderBy($sort, $order);

    $perPage = $request->get('per_page', 10);
    $properties = $query->paginate($perPage);

    $data = $properties->getCollection()->transform(function ($property) {
        return [
            'id'     => $property->id,
            'title'  => $property->title,
            'price'  => $property->price,
            'property_type' => $property->property_type,
            'city'   => $property->city,
            'status' => $property->status,
            'area'   => $property->area,
            'bedrooms' => $property->bedrooms,
            'bathrooms' => $property->bathrooms,
            'images' => $property->images()->get()->map(function ($img) {
            return [
                'id'         => $img->id,
                'image_path' => $img->image_path,
                'is_primary' => $img->is_primary
            ];
})
        ];
    });

    return response()->json([
        'data' => $data,
        'meta' => [
            'current_page' => $properties->currentPage(),
            'last_page'    => $properties->lastPage(),
            'total'        => $properties->total()
        ]
    ]);
}

    public function store(PropertyRequest $request)
{
    $property = Property::create($request->validated());

    if ($request->hasFile('images')) {
        $imageArray = [];
        foreach ($request->file('images') as $index => $file) {
            $path = $file->store('properties', 'public');
            $isPrimary = ($index === 0); 
            $property->images()->create([
                'image_path' => "/storage/$path",
                'image_name' => $file->getClientOriginalName(),
                'is_primary' => $isPrimary
            ]);
            $imageArray[] = [
                'image_path' => "/storage/$path",
                'is_primary' => $isPrimary
            ];
        }

        $property->update(['images' => json_encode($imageArray)]);
    }

    return response()->json([
        'message' => 'Property created successfully',
        'data' => $property->load('images') 
    ]);
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
