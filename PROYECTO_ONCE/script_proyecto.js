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