<?php
/**
 * Created by PhpStorm.
 * User: vasil
 * Date: 14.07.2016
 * Time: 0:10
 */

$name = isset($_REQUEST['name']) ? $_REQUEST['name'] : '';
$phone = isset($_REQUEST['phone']) ? $_REQUEST['phone'] : '';
$email = isset($_REQUEST['email']) ? $_REQUEST['email'] : '';
$text = isset($_REQUEST['text']) ? $_REQUEST['text'] : '';

$to  = "<vasiliys492@gmail.com>, " ;
$to .= "vasiliys492@gmail.com>";

$subject = "Заголовок письма";

$message = " 
    <p>Имя: $name</p> </br> 
    <b>Телефон:$phone </b>
    <b>E-mail:$email  </b>
    <b>Сообщение:$text </b>
    </br>
";

$headers  = "Content-type: text/html; charset=windows-1251 \r\n";
$headers .= "From: От кого письмо <from@example.com>\r\n";
$headers .= "Reply-To: reply-to@example.com\r\n";

mail($to, $subject, $message, $headers);