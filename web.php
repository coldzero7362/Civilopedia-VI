<?php

use PHP\App\Route;
use PHP\App\DB;

Route::get('/', 'MainController@index');
Route::get('/rule' , "MainController@rule");
Route::get('/ground' , "MainController@ground");
Route::get('/unit' , "MainController@unit");
Route::get('/tech' , "MainController@tech");
Route::get('/civ' , "MainController@civ");
Route::get('/civ_result' , "MainController@civ_result");
Route::get('/City' , "MainController@City");


Route::get("/getRule" , "MainController@getRule");
Route::get("/getRule_list" , "MainController@getRule_list");
Route::get("/getRule_text" , "MainController@getRule_text");
Route::get("/getUnit" , "MainController@getUnit");
Route::get("/getCiv" , "MainController@getCiv");
Route::get("/getleader" , "MainController@getleader");
Route::get("/getleader_idx" , "MainController@getleader_idx");

// localhost/getuser -> JSON { name : '안진우' }
