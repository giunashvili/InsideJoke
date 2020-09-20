<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['prefix' => 'social_link', 'namespace' => 'Back'], function() {
    Route::post('create','SocialLinksController@create');
    Route::post('update','SocialLinksController@update');
    Route::get('all','SocialLinksController@all');
    Route::get('{id}','SocialLinksController@find');
    Route::post('{id}/delete','SocialLinksController@delete');
    Route::post('upload-image','SocialLinksController@uploadImage');
}); 

Route::group(['prefix' => 'members', 'namespace' => 'Back'], function() {
    Route::post('create','MembersController@create');
    Route::post('update','MembersController@update');
    Route::get('all','MembersController@all');
    Route::get('{id}','MembersController@find');
    Route::post('{id}/delete','MembersController@delete' );
    Route::post('upload-image','MembersController@uploadImage' );
});


Route::group(['prefix' => 'about', 'namespace' => 'Back'], function() {
    Route::get('info','AboutController@info');
    Route::post('update','AboutController@update');
    Route::post('upload-image','AboutController@uploadImage' );
});