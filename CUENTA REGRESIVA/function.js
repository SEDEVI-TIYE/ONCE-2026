// ==========================================
// ELEMENTOS DEL DOM
// ==========================================

const fechaObjetivo = document.getElementById("fechaObjetivo");
const btnIniciar = document.getElementById("btnIniciar");
const mensaje = document.getElementById("mensaje");

const elementoDias = document.getElementById("dias");
const elementoHoras = document.getElementById("horas");
const elementoMinutos = document.getElementById("minutos");
const elementoSegundos = document.getElementById("segundos");


// ==========================================
// VARIABLE PARA EL INTERVALO
// ==========================================

let intervalo;


// ==========================================
// EVENTO DEL BOTÓN
// ==========================================

btnIniciar.addEventListener("click", iniciarCuentaRegresiva);


// ==========================================
// FUNCIÓN PRINCIPAL
// ==========================================

function iniciarCuentaRegresiva() {

    const fechaIngresada = fechaObjetivo.value;

    // Comprobar que el usuario seleccionó una fecha
    if (!fechaIngresada) {

        mensaje.textContent =
            "Por favor selecciona una fecha y hora.";

        return;
    }


    // Convertir la fecha introducida en un objeto Date
    const fechaFinal = new Date(fechaIngresada);


    // Comprobar que la fecha sea válida
    if (isNaN(fechaFinal.getTime())) {

        mensaje.textContent =
            "La fecha introducida no es válida.";

        return;
    }


    // Obtener la fecha actual
    const ahora = new Date();


    // Comprobar si la fecha ya pasó
    if (fechaFinal <= ahora) {

        mensaje.textContent =
            "La fecha seleccionada ya ha pasado.";

        reiniciarPantalla();

        return;
    }


    // Limpiar cualquier contador anterior
    clearInterval(intervalo);

    mensaje.textContent =
        "Cuenta regresiva en curso...";


    // Ejecutar inmediatamente
    actualizarContador(fechaFinal);


    // Actualizar cada segundo
    intervalo = setInterval(() => {

        actualizarContador(fechaFinal);

    }, 1000);
}


// ==========================================
// ACTUALIZAR CONTADOR
// ==========================================

function actualizarContador(fechaFinal) {

    const ahora = new Date();

    // Diferencia entre fecha final y fecha actual
    const diferencia =
        fechaFinal.getTime() - ahora.getTime();


    // Si llegó el momento
    if (diferencia <= 0) {

        clearInterval(intervalo);

        elementoDias.textContent = "00";
        elementoHoras.textContent = "00";
        elementoMinutos.textContent = "00";
        elementoSegundos.textContent = "00";

        mensaje.textContent =
            "🎉 ¡La cuenta regresiva ha terminado!";

        return;
    }


    // ======================================
    // CONVERSIÓN DEL TIEMPO
    // ======================================

    const segundo = 1000;

    const minuto = segundo * 60;

    const hora = minuto * 60;

    const dia = hora * 24;


    // Días completos
    const dias = Math.floor(
        diferencia / dia
    );


    // Horas restantes
    const horas = Math.floor(
        (diferencia % dia) / hora
    );


    // Minutos restantes
    const minutos = Math.floor(
        (diferencia % hora) / minuto
    );


    // Segundos restantes
    const segundos = Math.floor(
        (diferencia % minuto) / segundo
    );


    // ======================================
    // MOSTRAR RESULTADOS
    // ======================================

    elementoDias.textContent =
        formatearNumero(dias);

    elementoHoras.textContent =
        formatearNumero(horas);

    elementoMinutos.textContent =
        formatearNumero(minutos);

    elementoSegundos.textContent =
        formatearNumero(segundos);
}


// ==========================================
// FORMATEAR NÚMEROS
// ==========================================

function formatearNumero(numero) {

    return numero
        .toString()
        .padStart(2, "0");
}


// ==========================================
// REINICIAR PANTALLA
// ==========================================

function reiniciarPantalla() {

    elementoDias.textContent = "00";
    elementoHoras.textContent = "00";
    elementoMinutos.textContent = "00";
    elementoSegundos.textContent = "00";
}
