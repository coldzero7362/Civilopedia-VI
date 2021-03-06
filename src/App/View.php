<?php

namespace PHP\App;

class View 
{
    public function __construct($page, $data)
    {
        extract($data);

        require_once(__VIEWS . __DS . "layout" . __DS . "header.php");
        require_once(__VIEWS . __DS . "{$page}.php");
        require_once(__VIEWS . __DS . "layout" . __DS . "footer.php");
    }
}