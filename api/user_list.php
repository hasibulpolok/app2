<?php
include_once("dbconfig.php");

$sql = $db->query("SELECT * FROM users");

$records = [];

while ($raw = $sql->fetch_assoc()) {
    $records[] = $raw;
}

echo json_encode([$records]);
?>