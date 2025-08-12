<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\PropertyController;
use App\Http\Controllers\PropertyImageController;

Route::post('/login', [AuthController::class, 'login']);
Route::get('/unauthenticated', [AuthController::class, 'unauthenticated'])->name('login');

Route::middleware('auth:sanctum')->group(function () {

    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    Route::post('/logout', [AuthController::class, 'logout']);

    Route::get('/properties', [PropertyController::class, 'index']);      
    Route::post('/properties', [PropertyController::class, 'store']);     
    Route::get('/properties/{id}', [PropertyController::class, 'show']);  
    Route::put('/properties/{id}', [PropertyController::class, 'update']); 
    Route::delete('/properties/{id}', [PropertyController::class, 'destroy']); 
    Route::post('/properties/{id}/restore', [PropertyController::class, 'restore']); 

    Route::post('/properties/{id}/images', [PropertyImageController::class, 'store']); 
    Route::delete('/properties/{id}/images/{image_id}', [PropertyImageController::class, 'destroy']);
});