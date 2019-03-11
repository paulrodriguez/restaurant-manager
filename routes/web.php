<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

// all public controllers
Route::resource('restaurants', 'RestaurantController')->only([
    'index'
]);
Route::resource('restaurant','RestaurantController')->only(['show']);

// admin login
Route::get('/admin/login', 'Admin\LoginController@showLoginForm')->name('admin.login');
Route::get('/admin/logout','Admin\LoginController@logout');
Route::post('/admin/login','Admin\LoginController@login');

// all controllers in Admin, except admin controller
Route::namespace('Admin')->prefix('admin')->middleware('admin_auth:admin')->group(function() {
  Route::resource('restaurants','RestaurantController',['as'=>'admin']);
});
//->where(array('id'=>'\d+'));

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
