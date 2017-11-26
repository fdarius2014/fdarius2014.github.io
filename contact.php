<?php
    $input_name = $_POST['name'];
    $input_address = $_POST['address'];
    $phone_number = $_POST['phoneNumber'];
    $from = $_POST['email'];
    $message = "Name: " . $input_name . "\n\n" . "Address: " . $input_address . "\n\n" . "Phone number: " . $phone_number . "\n\n" . " Message: " . "\n\n" . $_POST['message'];
    $to = "francisd625@gmail.com";
    $subject = $_POST['subject'];
    $headers = "From:" . $from;
    mail($to, $subject, $message, $headers);
?>