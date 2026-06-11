<?php

include "dbconfig.php";

$data = json_decode(file_get_contents("php://input"), true);

$name     = $data['fullname'];
$gender   = $data['gender'];
$district = $data['district'];
$address  = $data['address2'];



$db->query("INSERT INTO users(name, gender, address, district) VALUES('$name', '$gender', '$address', '$district')");

if ($db->affected_rows>0){
    echo json_encode(["message" => "User Created Successfully"]);
}else{
    echo json_encode(["message" => "something went wrong"]);
}