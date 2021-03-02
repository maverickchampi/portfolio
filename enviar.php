<?php

$name = $_POST["Name"];
$email = $_POST["Email"];
$subject = $_POST["Subject"];
$message = $_POST["Message"];

if ($name == "" || $email == "" || $subject == "" || $message == "") {

    echo "<script>alert('Complete todos los campos')</script>";

} else {

    try {
        $base = new PDO('mysql:host=localhost;dbname=messages', 'root', '');
        $base->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $base->exec("SET CHARACTER SET UTF8");

        $sql = "insert into messages values(null,:name,:email,:subject,:message)";
        $result = $base->prepare($sql);
        $result->execute(array(":name" => $name, ":email" => $email, ":subject" => $subject, ":message" => $message));

        echo "<script>alert('Mensaje enviado')</script>";
    } catch (Exception $e) {
        die("<script>alert('Error: " . $e->getMessage() . "');
                     location.href='contact.html'</script>");
        // echo "Línea del error : " . $e->getLine();
    } finally {
        $base = null;
    }
}

?>
<html>
<head>
    <META HTTP-EQUIV="Refresh" CONTENT="0; URL=contact.html">
</head>
</html>