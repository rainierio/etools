<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
	$title = 'home';
    return view('panel.dashboard', compact('title'));
});

	//Page Routing
	Route::get('page','pageController@index');
	Route::get('pageSearch','pageController@pageSearch');
	Route::get('pageDetails/{id}', ['as' => 'pageDetails', 'uses' =>'pageController@pageDetails']); 

	//View Routing
	Route::get('/view', 'viewController@index'); 
	Route::get('viewSearch', 'viewController@viewSearch');
	Route::get('viewDetails/{id}', ['as' => 'viewDetails', 'uses' =>'viewController@viewDetails']); 

	//client script Routing
	Route::get('/clientScript', 'clientScriptController@index'); 
	Route::get('clientScriptSearch', 'clientScriptController@clientScriptSearch');

	//server script Routing
	Route::get('/serverScript', 'serverScriptController@index'); 
	Route::get('serverScriptSearch', 'serverScriptController@serverScriptSearch');

	//Dependency checking
	Route::get('/dependency', 'dependencyController@index'); 
	Route::get('dependencySearch', 'dependencyController@dependencySearch');
	 
