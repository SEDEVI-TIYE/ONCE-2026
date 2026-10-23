const formulario = document.getElementById("formularioRegistro");
const listaRegistros = document.getElementById("listaRegistros");

formulario.addEventListener("submit", function(evento) {

    evento.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const edad = document.getElementById("edad").value;

    // Crear el contenedor del registro
    const registro = document.createElement("div");
    registro.classList.add("registro");

    // Crear nombre
    const textoNombre = document.createElement("p");
    textoNombre.textContent = "Nombre: " + nombre;

    // Crear correo
    const textoCorreo = document.createElement("p");
    textoCorreo.textContent = "Correo: " + correo;

    // Crear edad
    const textoEdad = document.createElement("p");
    textoEdad.textContent = "Edad: " + edad;

    // Crear botón eliminar
    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";

    // Evento del botón eliminar
    botonEliminar.addEventListener("click", function() {
        registro.remove();
    });

    // Meter los elementos dentro del registro
    registro.appendChild(textoNombre);
    registro.appendChild(textoCorreo);
    registro.appendChild(textoEdad);
    registro.appendChild(botonEliminar);

    // Agregar el registro a la página
    listaRegistros.appendChild(registro);

    // Limpiar formulario
    formulario.reset();
});
