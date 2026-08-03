function clasificar() {
            // Pedir estatura
            let estatura = window.prompt("Ingrese su estatura en cm:");

            // Convertir a número
            estatura = parseFloat(estatura);

            let mensaje = "";

            // Validar
            if (isNaN(estatura)) {
                mensaje = "Por favor ingrese un número válido.";
            } else {
                // Clasificación
                if (estatura < 150) {
                    mensaje = "Estatura baja";
                } else if (estatura >= 150 && estatura < 170) {
                    mensaje = "Estatura media";
                } else {
                    mensaje = "Estatura alta";
                }
            }

            // Mostrar en la página
            document.getElementById("resultado").innerText = mensaje;
        }