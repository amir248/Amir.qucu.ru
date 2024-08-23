<?php
$to = "chikchicly@gmail.com";
$subject = "My subject";
$txt = "Hello world!";
$headers = "From: chikchicly@gmail.com" . "\r\n" .
"CC: chikchicly@gmail.com.com";

mail($to,$subject,$txt,$headers);
?>
