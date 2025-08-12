<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\PropertyImage;


class PropertyImageController extends Controller
{
    public function store(Request $request, $id)
    {
        $request->validate([
            'images.*' => 'required|image|mimes:jpeg,png,jpg|max:2048'
        ]);

        $property = Property::findOrFail($id);

        foreach ($request->file('images') as $file) {
            $path = $file->store('properties', 'public');
            $property->images()->create([
                'image_path' => "/storage/$path",
                'image_name' => $file->getClientOriginalName()
            ]);
        }

        return response()->json(['message' => 'Images uploaded successfully']);
    }

    public function destroy($propertyId, $imageId)
    {
        $image = PropertyImage::where('property_id', $propertyId)->findOrFail($imageId);
        $image->delete();
        return response()->json(['message' => 'Image deleted successfully']);
    }
}
