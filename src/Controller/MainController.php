<?php

namespace PHP\Controller;

use PHP\App\DB;
use PHP\App\Lib;

class MainController extends MasterController
{
    public function index()
    {
        $this->render("index");
    }

    public function rule()
    {
        $this->render("rule");
    }
    public function ground()
    {
        $this->render("ground");
    }
    public function unit()
    {
        $this->render("unit");
    }
    public function tech()
    {
        $this->render("tech");
    }
    public function civ()
    {
        $this->render("civ");
    }
    public function civ_result()
    {
        $this->render("civ_result");
    }
    public function City()
    {
        $this->render("City");
    }
    public function governor()
    {
        $this->render("governor");
    }
   

    public function getRule()
    {
        $idx = $_GET['idx'];
        $result = DB::fetchAll("SELECT * FROM rulemenu WHERE item_id = ?" , [ $idx ]);
        Lib::sendJson($result);
    }
    public function getRule_list()
    {
        $num = $_GET['num'];
        $result = DB::fetchAll("SELECT * FROM rule_list WHERE item_id = ?" , [ $num ]);
        Lib::sendJson($result);
    }
    public function getRule_text()
    {
        $num = $_GET['num'];
        $result = DB::fetchAll("SELECT * FROM rule_text WHERE item_id = ?" , [ $num ]);
        Lib::sendJson($result);
    }
    public function getUnit()
    {
        $idx = $_GET['idx'];
        $result = DB::fetchAll("SELECT * FROM unit_department WHERE data_idx = ?" , [ $idx ]);
        Lib::sendJson($result);
    }
    public function getUnit_form()
    {
        $idx = $_GET['idx'];
        $result = DB::fetchAll("SELECT * FROM unit_form WHERE data_idx = ?" , [ $idx ]);
        Lib::sendJson($result);
    }
    public function getleader()
    {
        $idx = $_GET['index'];
        $result = DB::fetchAll("SELECT * FROM leaders WHERE leader_idx = ?" , [ $idx ]);
        Lib::sendJson($result);
    }
    public function getCiv()
    {
        $idx = $_GET['idx'];
        $result = DB::fetchAll("SELECT * FROM civ WHERE idx = ?" , [ $idx ]);
        Lib::sendJson($result);
    }
    public function getleader_idx()
    {
        $idx = $_GET['index'];
        $result = DB::fetchAll("SELECT * FROM leaders WHERE idx = ?" , [ $idx ]);
        Lib::sendJson($result);
    }
    public function getCity_kind()
    {
        $idx = $_GET['idx'];
        $result = DB::fetchAll("SELECT * FROM city_kind WHERE idx = ?" , [ $idx ]);
        Lib::sendJson($result);
    }
    public function getCity_list()
    {
        $idx = $_GET['idx'];
        $result = DB::fetchAll("SELECT * FROM city_list WHERE kind = ?" , [ $idx ]);
        Lib::sendJson($result);
    }

}