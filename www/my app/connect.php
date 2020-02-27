<?php

 $host = 'localhost';
 $user = 'root';
 $pass = '';
 $dbms = 'jdr';

$conn = mysqli_connect($host,$user,$pass,$dbms);

if(!$conn)
{
	die("connection error: " . mysqli_connect_error());
}

?>