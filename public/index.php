<?php

date_default_timezone_set("Asia/Seoul");

session_start();

define('__DS', DIRECTORY_SEPARATOR);
define('__ROOT', dirname(__DIR__));
define('__SRC', __ROOT . __DS . 'src');
define('__VIEWS', __ROOT . __DS . 'views');

require __ROOT . __DS . 'autoload.php';
require __ROOT . __DS . 'web.php';

PHP\App\Route::init();