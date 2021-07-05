<?php

namespace PHP\App;

use PHP\App\DB;

class Route
{
    private static $actions = [];
    
    public static function __callStatic($method, $args)
    {
        $req = strtolower($_SERVER['REQUEST_METHOD']);

        if($req == $method) {
            self::$actions[] = $args;
        }
    }

    public static function init()
    {
        $path = explode("?", $_SERVER['REQUEST_URI']);
        $path = $path[0];

        foreach(self::$actions as $req) {
            if($req[0] === $path) {
                $action = explode("@", $req[1]);
                $controller = 'PHP\\Controller\\' . $action[0];
                $controllerInstance = new $controller();
                $controllerInstance->{$action[1]}();
                return;
            }
        }
    }
}