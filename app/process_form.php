<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $fname = htmlspecialchars($_POST['fname']);
    $lname = htmlspecialchars($_POST['lname']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $yourBusiness = htmlspecialchars($_POST['yourBusiness']);
    $yourJob = htmlspecialchars($_POST['yourJob']);
    $message = htmlspecialchars($_POST['message']);

    // Your email address where the form data will be sent
    $to = 'pranitha@madarth.com';
    $subject = 'New Form Submission';
    $headers = "From: webmaster@madarth.com\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    $body = "
    <html>
    <head>
      <title>New Form Submission $fname</title>
    </head>
    <body>
      <h2>New Form Submission</h2>
      <p><strong>First Name:</strong> $fname</p>
      <p><strong>Last Name:</strong> $lname</p>
      <p><strong>Email:</strong> $email</p>
      <p><strong>Mobile:</strong> $phone</p>
      <p><strong>Your Business:</strong> $yourBusiness</p>
      <p><strong>Your Job:</strong> $yourJob</p>
      <p><strong>Message:</strong> $message</p>
    </body>
    </html>
    ";

    if (mail($to, $subject, $body, $headers)) {
        echo '<div class="form__response-success"><h3 class="success__message--header">Thank You!</h3><p>Your message has been sent. We’ll be in touch shortly to answer all your questions.</p></div>';
    } else {
        echo 'There was an error sending your form. Please try again.';
    }
} else {
    echo 'Invalid request method.';
}
?>
