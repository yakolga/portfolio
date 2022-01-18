<?php 

$name = $_POST['name'];
$email = $_POST['email'];
$text = $_POST['text'];
$privacypolicy = $_POST['privacypolicy'];

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

// $mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'serwer2194445.home.pl';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'portfolio@olgakulczycka.com.pl';                 // Наш логин
$mail->Password = 'KM3RiFKo';                           // Наш пароль от ящика
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to
 
$mail->setFrom('portfolio@olgakulczycka.com.pl', 'Portfolio');   // От кого письмо 
$mail->addAddress('ok.supergirl@ukr.net');     // Add a recipient
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Данные';
$mail->Body    = '
		User leave details <br> 
	Name: ' . $name . ' <br>
	Email: ' . $email . '<br>
	Text: ' . $text . '';

if(!$mail->send()) {
    return false;
} else {
    return true;
}

?>