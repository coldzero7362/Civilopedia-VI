<?php

namespace PHP\App;

class Lib
{

    public static function sendJson($data)
    {
        echo json_encode($data , JSON_UNESCAPED_UNICODE);
    }
    
}