<?php

if($_POST["message"]) {
  $name = $_POST["username"];
  $email = $_POST["email"];
  $to = "sadiqasg@gmail.com";
  $subject = "$name via Abeh Signature";

  // $headers = "From: $email\r\nReply-To: $email\r\nReturn-Path: $email\r\n";
  $headers .= "Reply-To: $name <$email>\r\n"; 
  $headers .= "Return-Path: $name <$email>\r\n"; 
  $headers .= "From: $name <$email>\r\n";  
  $headers .= "Organization: Abeh Signature\r\n";
  $headers .= "MIME-Version: 1.0\r\n";
  $headers .= "Content-type: text/plain; charset=iso-8859-1\r\n";
  $headers .= "X-Priority: 3\r\n";
  $headers .= "X-Mailer: PHP/". phpversion() ."\r\n" ;

  $message = $_POST["message"];
  
  if(!mail($to,$subject,$message,$headers)) {
    print_r(error_get_last());
  } else {
    header('Location: success.php');
  }

}

?>