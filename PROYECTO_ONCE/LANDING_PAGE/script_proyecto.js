// 1. Selección de elementos del DOM
let indexImagenActual = 0;
const imagenes = document.querySelectorAll('.banner-container img');
const puntos = document.querySelectorAll('.controles-puntos span');
const totalImagenes = imagenes.length;

// 2. Definición del tiempo (5000ms = 5 segundos)
const TIEMPO_CAMBIO = 2000;
let intervalo; // Variable para almacenar el temporizador

// 3. Función principal para cambiar la interfaz
function irAImagen(indexNuevo) {
    // Desactivar lo actual
    imagenes[indexImagenActual].classList.remove('active');
    puntos[indexImagenActual].classList.remove('active');

    // Actualizar el índice
    indexImagenActual = indexNuevo;

    // Activar lo nuevo
    imagenes[indexImagenActual].classList.add('active');
    puntos[indexImagenActual].classList.add('active');

    // IMPORTANTE: Al hacer un cambio (por clic o auto), reiniciamos el reloj
    reiniciarTemporizador();
}

// 4. Lógica del Temporizador
function iniciarTemporizador() {
    intervalo = setInterval(() => {
        let siguiente = (indexImagenActual + 1) % totalImagenes;
        irAImagen(siguiente);
    }, TIEMPO_CAMBIO);
}

function reiniciarTemporizador() {
    // Borramos el reloj actual y creamos uno nuevo desde cero
    clearInterval(intervalo);
    iniciarTemporizador();
}

// 5. Inicialización
iniciarTemporizador();

// Opcional: Si quieres que los puntos escuchen el clic desde JS (más limpio)
puntos.forEach((punto, i) => {
    punto.addEventListener('click', () => {
        irAImagen(i);
    });
});



/**Sección de compras del sitio web, registro de 
 * compras recientes
 */

// Obtener elementos
const formulario = document.getElementById("formVenta");
const lista = document.getElementById("listaVentas");

// Evento del formulario
formulario.addEventListener("submit", function(event){
    // Evita recargar la página
    event.preventDefault();

    // Leer datos
    const cliente = document.getElementById("cliente").value;
    const producto = document.getElementById("producto").value;
    const cantidad = document.getElementById("cantidad").value;

    // Validación sencilla
    if(cliente === "" || producto === "" || cantidad === ""){
        alert("Debe completar todos los campos.");
        return;
    }

   // Enviar la venta a PHP
fetch("server_proyecto.php", {
    method: "POST",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    }, body: new URLSearchParams({
        cliente: cliente,
        producto: producto,
        cantidad: cantidad
    })
}).then(respuesta => respuesta.text()).then(mensaje => console.log(mensaje)).catch(error => console.log("Error:", error));

    // Crear el nuevo elemento <li>
    const nuevoRegistro = document.createElement("li");

    // Crear el texto
    const texto = document.createTextNode(
        `${cliente} compró ${cantidad} unidad(es) de ${producto}.`
    );

    // Agregar el texto al <li>
    nuevoRegistro.appendChild(texto);

    // Agregar el <li> al final de la lista
    lista.appendChild(nuevoRegistro);

    // Limpiar formulario
    formulario.reset();

});


