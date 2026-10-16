<?php

// Recibir los datos enviados por JavaScript
$nombre = $_POST["nombre"] ?? "";
$correo = $_POST["correo"] ?? "";
$edad = $_POST["edad"] ?? "";


// Verificar que los datos no estén vacíos
if ($nombre === "" || $correo === "" || $edad === "") {

    http_response_code(400);
    echo "Faltan datos del formulario.";
    exit;

}


// Preparar el registro
$registro = "Nombre: " . $nombre . PHP_EOL;
$registro .= "Correo: " . $correo . PHP_EOL;
$registro .= "Edad: " . $edad . PHP_EOL;
$registro .= "------------------------------" . PHP_EOL;


// Guardar el registro en el archivo TXT
$archivo = "registros.txt";

$resultado = file_put_contents(
    $archivo,
    $registro,
    FILE_APPEND | LOCK_EX
);


// Comprobar si se guardó correctamente
if ($resultado === false) {

    http_response_code(500);
    echo "Error: no se pudo guardar el registro.";
    exit;

}


echo "Registro guardado correctamente.";

?>
