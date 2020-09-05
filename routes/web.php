<?php

use Illuminate\Support\Facades\Route;

/* -------------------------- Web Routes ---------------------------------- */

Route::group(['namespace' => 'Front'], function() {
    Route::get('/', 'MainController');
});

Route::group(['namespace' => 'Back', 'middleware' => 'auth'], function(){   
    Route::group(['prefix' => 'admin'], function(){    
        Route::get('dashboard', 'DashboardController@index') -> name('dashboard');    
        Route::get('members', 'MembersController@index') -> name('members');
        Route::get('social_links', 'SocialLinksController@index') -> name('soclinks');
    }); 
});

Route::group(['namespace' => 'Auth'], function() {
    Route::get('register', 'AuthController@getRegister') -> name('register');
    
    Route::get('login' , 'AuthController@getLogin') -> name('login.view');
    Route::post('login', 'AuthController@login')    -> name('login');
    Route::get('logout', 'AuthController@logout')   -> name('logout');
});

Route::group(['prefix' => 'test'], function(){
    Route::get('/', 'TestController') -> name('test.main');
});