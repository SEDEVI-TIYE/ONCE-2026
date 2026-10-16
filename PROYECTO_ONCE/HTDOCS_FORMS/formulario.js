const formulario = document.getElementById("formularioRegistro");
const listaRegistros = document.getElementById("listaRegistros");

formulario.addEventListener("submit", function(evento) {

    evento.preventDefault();

    // Obtener los datos del formulario
    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const edad = document.getElementById("edad").value;


    // ==========================================
    // ENVIAR LOS DATOS A PHP
    // ==========================================

    const datos = new FormData();

    datos.append("nombre", nombre);
    datos.append("correo", correo);
    datos.append("edad", edad);

    fetch("formulario_server.php", {
        method: "POST",
        body: datos
    })
    .then(respuesta => {

        if (!respuesta.ok) {
            throw new Error("Error en la comunicación con PHP");
        }

        return respuesta.text();

    })
    .then(resultado => {

        console.log(resultado);

    })
    .catch(error => {

        console.error("Error al guardar los datos:", error);

    });


    // ==========================================
    // CREAR EL CONTENEDOR DEL REGISTRO
    // ==========================================

    const registro = document.createElement("div");
    registro.classList.add("registro");


    // ==========================================
    // CREAR NOMBRE
    // ==========================================

    const textoNombre = document.createElement("p");
    textoNombre.textContent = "Nombre: " + nombre;


    // ==========================================
    // CREAR CORREO
    // ==========================================

    const textoCorreo = document.createElement("p");
    textoCorreo.textContent = "Correo: " + correo;


    // ==========================================
    // CREAR EDAD
    // ==========================================

    const textoEdad = document.createElement("p");
    textoEdad.textContent = "Edad: " + edad;


    // ==========================================
    // CREAR BOTÓN ELIMINAR
    // ==========================================

    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";


    // ==========================================
    // EVENTO DEL BOTÓN ELIMINAR
    // ==========================================

    botonEliminar.addEventListener("click", function() {

        registro.remove();

    });


    // ==========================================
    // METER LOS ELEMENTOS DENTRO DEL REGISTRO
    // ==========================================

    registro.appendChild(textoNombre);
    registro.appendChild(textoCorreo);
    registro.appendChild(textoEdad);
    registro.appendChild(botonEliminar);


    // ==========================================
    // AGREGAR EL REGISTRO A LA PÁGINA
    // ==========================================

    listaRegistros.appendChild(registro);


    // ==========================================
    // LIMPIAR FORMULARIO
    // ==========================================

    formulario.reset();

});