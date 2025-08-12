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

    // Đăng xuất
    Route::post('/logout', [AuthController::class, 'logout']);

    // CRUD Bất động sản
    Route::get('/properties', [PropertyController::class, 'index']);      // Danh sách + search/filter/sort/pagination
    Route::post('/properties', [PropertyController::class, 'store']);     // Thêm mới
    Route::get('/properties/{id}', [PropertyController::class, 'show']);  // Xem chi tiết
    Route::put('/properties/{id}', [PropertyController::class, 'update']); // Sửa
    Route::delete('/properties/{id}', [PropertyController::class, 'destroy']); // Xóa mềm
    Route::post('/properties/{id}/restore', [PropertyController::class, 'restore']); // Khôi phục

    // CRUD ảnh bất động sản
    Route::post('/properties/{id}/images', [PropertyImageController::class, 'store']); // Thêm ảnh
    Route::delete('/properties/{id}/images/{image_id}', [PropertyImageController::class, 'destroy']); // Xóa ảnh
});