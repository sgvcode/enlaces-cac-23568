<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recopilar los datos del formulario y sanitizarlos
    $nombre = sanitizeInput($_POST["nombre"]);
    $email = sanitizeInput($_POST["email"]);
    $mensaje = sanitizeInput($_POST["mensaje"]);

    // Validar los datos del formulario
    if (empty($nombre) || empty($email) || empty($mensaje)) {
        echo "Por favor, completa todos los campos del formulario.";
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Por favor, introduce una dirección de correo electrónico válida.";
        exit;
    }

    // Configurar los detalles del correo electrónico
    $destinatario = "sgvero@mscode.net.ar"; // Reemplaza con tu dirección de correo electrónico
    $asunto = "Nuevo mensaje del formulario de contacto";
    $cuerpoMensaje = "Nombre: " . $nombre . "\n";
    $cuerpoMensaje .= "Email: " . $email . "\n";
    $cuerpoMensaje .= "Mensaje: " . $mensaje;

    // Enviar el correo electrónico
    if (enviarCorreo($destinatario, $asunto, $cuerpoMensaje)) {
        echo "¡El mensaje se envió correctamente!";
        // Redirigir a index.html después de 3 segundos
        header("refresh:3; url=index.html");
    } else {
        echo "Hubo un problema al enviar el mensaje. Por favor, inténtalo de nuevo.";
    }
    exit;
}

// Función para sanitizar la entrada de datos
function sanitizeInput($data)
{
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

// Función para enviar el correo electrónico
function enviarCorreo($destinatario, $asunto, $cuerpoMensaje)
{
    $cabeceras = "From: sgvero.box@gmail.com" . "\r\n" .
        "Reply-To: sgvero.box@gmail.com" . "\r\n" .
        "X-Mailer: PHP/" . phpversion();
    return mail($destinatario, $asunto, $cuerpoMensaje, $cabeceras);
}
?>