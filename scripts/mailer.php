<?php



$headers  ='"MIME-Version: 1.0' . PHP_EOL;
$headers .= 'Content-Type: text/html; charset=ISO-8859-1' . PHP_EOL;
$headers .= 'From: Marek Sivak <hi@mareksivak.me>' . PHP_EOL;

//mail("mmareq@gmail.com", "Set a 200 (okay) response code.", "bbb", $headers);




echo "mailer";
    // Only process POST reqeusts.
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Get the form fields and remove whitespace.
        $name = strip_tags(trim($_POST["name"]));
        $name = str_replace(array("\r","\n"),array(" "," "),$name);
        $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
        $message = trim($_POST["message"]);
        $honey = trim($_POST["honey"]);

        // Check that data was sent to the mailer.
        if ( !empty($honey)) {
            // Set a 400 (bad request) response code and exit.
            //http_response_code(400);
            echo "Oops! Message was not sent.";
            exit;
        }

        // Set the recipient email address.
        // FIXME: Update this to your desired email address.
        $recipient = "mmareq@gmail.com";

        // Set the email subject.
        $subject = "[mareksivak.me] $name sent me a message";

        // Build the email content.
        $email_content = "Name: $name<br>";
        $email_content .= "Email: $email<br><br>";
        $email_content .= "Message:<br>$message";

        // Build the email headers.
        $email_headers = "From: $name <$email>";

        // Send the email.
        if (mail($recipient, $subject, $email_content, $headers)) {
            // Set a 200 (okay) response code.
            //http_response_code(200);
            echo "Thank You! Your message has been sent.";
        } else {
            // Set a 500 (internal server error) response code.
            //http_response_code(500);
            echo "Oops! Something went wrong. Your message wasn't sent.";
        }

    } else {
        // Not a POST request, set a 403 (forbidden) response code.
        //http_response_code(403);
        echo "There was a problem with your message, please try again.";
    }

?>