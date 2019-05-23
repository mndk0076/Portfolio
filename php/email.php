<?php
if(isset ($_POST['email'])){
    $email = $_POST['email'];
    $name = $_POST['name'];
    $message = $_POST['message'];
    $to = 'kenneth.b.mendoza@gmail.com';
    $subject = 'Portfolio Contact';
    $body = '<html>
                <body>
                    <p>Hello Kenneth,</p>
                    <p>' .$message. '</p>
                    <p> Best Regards,<br/>'
                    .$name. '</p>
                </body>
             </html>';
    $header = "From: ".$name. "<" .$email. ">" . "\r\n";
    $header .= "Reply-To: " .$email. "\r\n";
    $header .= "MIME-Version: 1.0" . "\r\n";
    $header .= "Content-type:text/html;charset=UTF-8" . "\r\n";

    $send = mail($to, $subject, $body, $header);
}