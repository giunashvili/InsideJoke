<?php

use Illuminate\Support\Facades\Route;

use App\Member;
use App\SocialLink;

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

Route::get('register', 'AuthController@register') 
    -> name ('register');
Route::get('login', 'AuthController@login') 
    -> name ('login');
    
Route::group(['prefix' => 'admin'], function(){    
    Route::get('dashboard', 'DashboardController@index') 
        -> name ('dashboard');    
    Route::get('members', 'MembersController@index')  
        -> name ('members');
    Route::get('social_links', 'SocialLinksController@index') 
        -> name ('soclinks');
});

?>