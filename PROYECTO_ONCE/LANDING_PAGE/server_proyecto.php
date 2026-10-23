
<?php
// 1. Recibir datos
$cliente = $_POST["cliente"];
$producto = $_POST["producto"];
$cantidad = $_POST["cantidad"];

// 2. Dar formato a los datos
$venta = [
    date("Y-m-d H:i:s"),
    $cliente,
    $producto,
    $cantidad
];

// 3. Escribir en el archivo CSV
$archivo = fopen("ventas.csv", "a");

fputcsv($archivo, $venta);

fclose($archivo);

// 4. Responder
echo "Venta guardada correctamente";
?>
