<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");

$host = "localhost";
$dbname = "user_info";
$username = "root";
$password = "";

$db = new mysqli($host, $username, $password, $dbname);

if ($db->connect_error) {
    die("Connection Failed: " . $db->connect_error);
}

?>