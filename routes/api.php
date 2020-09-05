<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route :: group(['prefix' => 'social_link', 'namespace' => 'Back'], function() {
    Route :: get('all','SocialLinksController@all');
    Route :: get('{id}','SocialLinksController@find');
    Route :: post('{id}/delete','SocialLinksController@delete' );
    Route :: post('{id}/upload-image','SocialLinksController@uploadImage' );
});

Route :: group(['prefix' => 'members', 'namespace' => 'Back'], function() {
    Route :: get('all','MembersController@all');
    Route :: get('{id}','MembersController@find');
    Route :: post('{id}/delete','MembersController@delete' );
    Route :: post('{id}/upload-image','MembersController@uploadImage' );
});