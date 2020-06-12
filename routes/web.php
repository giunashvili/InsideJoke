<?php

use Illuminate\Support\Facades\Route;

/* -------------------------- Web Routes ---------------------------------- */

Route::get('register', 'AuthController@register') -> name ('register');
Route::get('login', 'AuthController@login') -> name ('login');

Route::group(['prefix' => 'admin'], function(){    
    Route::get('dashboard', 'DashboardController@index') -> name ('dashboard');    
    Route::get('members', 'MembersController@index') -> name ('members');
    Route::get('social_links', 'SocialLinksController@index') -> name ('soclinks');
});

?>