// Selecciona el elemento de la pantalla de la calculadora
const pantalla = document.querySelector(".pantalla");
// Selecciona todos los botones de la calculadora
const botones = document.querySelectorAll(".boton");

// Itera sobre cada botón y agrega un Event Listener para manejar los clics
botones.forEach(boton => {
    boton.addEventListener("click", () => {
        // Obtiene el texto del botón que fue clicado
        const botonOn = boton.textContent;
        
        // Si el botón es "Limpiar", restablece la pantalla a "0"
        if (boton.id == "Limpiar") {
            pantalla.textContent = "0";
            return;
        }
        
        // Si el botón es "Eliminar", elimina el último carácter de la pantalla
        if (boton.id == "botonEliminar") {
            // Si solo queda un carácter, restablece la pantalla a "0"
            if (pantalla.textContent.length === 1) {
                pantalla.textContent = "0";
            } else {
                // Elimina el último carácter de la pantalla
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return;
        }
        
        // Si el botón es "Igual", intenta evaluar la expresión en la pantalla
        if (boton.id == "botonIgual") {
            try {
                // Verifica si la expresión es válida antes de evaluarla
                if (esExpresionValida(pantalla.textContent)) {
                    // Evalúa la expresión y muestra el resultado en la pantalla
                    pantalla.textContent = eval(pantalla.textContent);
                } else {
                    // Si la expresión no es válida, muestra "Error" en la pantalla
                    pantalla.textContent = "Error";
                }
            } catch {
                // Si ocurre un error al evaluar la expresión, muestra "Error"
                pantalla.textContent = "Error";
            }
            return;
        }
        
        // Si la pantalla muestra "0" o "Error", reemplázalo con el texto del botón
        if (pantalla.textContent == "0" || pantalla.textContent === "Error") {
            pantalla.textContent = botonOn;
        } else {
            // Si no, agrega el texto del botón al final de la expresión en la pantalla
            pantalla.textContent += botonOn;
        }
    });
});

// Función para verificar si una expresión matemática es válida
function esExpresionValida(expresion) {
    // Verifica si hay caracteres inválidos que no sean dígitos u operadores
    const patronesInvalidos = /[^0-9+\-*/.]/; // Coincide con cualquier carácter que no sea un dígito u operador
    // Verifica si hay dos o más operadores consecutivos
    const operadoresConsecutivos = /[+\-*/]{2,}/; // Coincide con dos o más operadores consecutivos

    // Si se encuentran patrones inválidos o operadores consecutivos, la expresión no es válida
    if (patronesInvalidos.test(expresion) || operadoresConsecutivos.test(expresion)) {
        return false;
    }

    // Se pueden agregar más verificaciones para expresiones válidas aquí
    return true; // Si no se encuentran patrones inválidos, la expresión es válida
}
