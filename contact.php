<?php

if($_POST["message"]) {
  $name = $_POST["username"];
  $email = $_POST["email"];
  $to = "sadiqasg@gmail.com";
  $subject = "Contacting From Abeh Signature";
  $headers = "From: $email\n";
  $message = $_POST["message"];
  
  mail($to,$subject,$message,$headers);
  header('Location: success.html');

}

?>