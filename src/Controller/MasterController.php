<?php

namespace PHP\Controller;

use PHP\App\View;

class MasterController
{
    public function render($page, $datas = [])
    {
        $view = new View($page, $datas);
    }
}