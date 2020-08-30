<?php

use Illuminate\Support\Facades\Route;

/* -------------------------- Web Routes ---------------------------------- */

Route::get('/', 'FrontController');

Route::group(['prefix' => 'admin'], function(){    
    Route::get('dashboard', 'DashboardController@index') -> name ('dashboard');    
    Route::get('members', 'MembersController@index') -> name ('members');
    Route::get('social_links', 'SocialLinksController@index') -> name ('soclinks');
});

Route::get('register', 'AuthController@register') -> name ('register');
Route::get('login', 'AuthController@login') -> name ('login');

Route::group(['prefix' => 'test'], function(){
    Route::get('/', 'TestController') -> name('test.main');
    Route::get('upload', 'TestController@uploadImageView') -> name('test.uploadView');
    Route::post('upload', 'TestController@upload') -> name('test.upload');
});