<?php

// if ($_POST && isset($_POST['submit']) && isset($_POST['name']) && isset($_POST['email']) && !empty($_POST['name']) && !empty($_POST['email'])) {
if($_POST["message"]) {
  $name = $_POST["username"];
  $email = $_POST["email"];
  $to = "sadiqasg@gmail.com";
  $subject = "Contacting From Abeh Signature";
  $headers = "From: $email\n";
  $message = $_POST["message"];
  
  if(!mail($to,$subject,$message,$headers)) {
    print_r(error_get_last());
  } else {
    header('Location: success.php');
  }

}

?>