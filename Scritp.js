const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".boton");

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const botonOn = boton.textContent;
        if (boton.id == "Limpiar") {
            pantalla.textContent = "0";
            return;
        }
        if (boton.id == "botonEliminar") {
            if (pantalla.textContent.length === 1) {
                pantalla.textContent = "0";
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return;
        }
        if (boton.id == "botonIgual") {
            try {
                if (esExpresionValida(pantalla.textContent)) {
                    pantalla.textContent = eval(pantalla.textContent);
                } else {
                    pantalla.textContent = "Error";
                }
            } catch {
                pantalla.textContent = "Error";
            }
            return;
        }
        if (pantalla.textContent == "0" || pantalla.textContent === "Error") {
            pantalla.textContent = botonOn;
        } else {
            pantalla.textContent += botonOn;
        }
    });
});

function esExpresionValida(expresion) {
    // Verificar patrones inválidos como múltiples operadores consecutivos
    const patronesInvalidos = /[^0-9+\-*/.]/; // Coincide con cualquier carácter que no sea un dígito u operador
    const operadoresConsecutivos = /[+\-*/]{2,}/; // Coincide con dos o más operadores consecutivos

    if (patronesInvalidos.test(expresion) || operadoresConsecutivos.test(expresion)) {
        return false;
    }

    // Se pueden agregar más verificaciones para expresiones válidas aquí
    return true;
}
