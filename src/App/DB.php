<?php

namespace PHP\App;

class DB
{
    private static $db = null;

    public static function getDB()
    {
        if(is_null(self::$db)) {
            self::$db = new \PDO("mysql:host=localhost; dbname=civilopediavi; charset=utf8mb4", "root", "");
        }
        return self::$db;
    }

    public static function execute($sql, $data = [])
    {
        $q = self::getDB()->prepare($sql);
        return $q->execute($data);
    }

    public static function fetch($sql, $data=[], $mode = \PDO::FETCH_OBJ) 
    {
        $q = self::getDB()->prepare($sql);
        $q->execute($data);
        return $q->fetch($mode);
    }

    public static function fetchAll($sql, $data=[], $mode = \PDO::FETCH_OBJ)
    {
        $q = self::getDB()->prepare($sql);
        $q->execute($data);
        return $q->fetchAll($mode);
    }

    public static function lastId()
    {
        return self::getDB()->lastInsertId();
    }

    public static function msg($msg, $link)
    {
        echo "<script>";
        echo "alert('$msg');";
        echo "location.href='$link';";
        echo "</script>";
    }

    public static function msgBack($msg)
    {
        echo "<script>";
        echo "alert('$msg');";
        echo "history.back();";
        echo "</script>";
    }
}