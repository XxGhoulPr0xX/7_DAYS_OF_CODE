let x = Math.floor(Math.random() * (10 - 1 + 1) + 1);
let intentos = 0;
let numUsuario = 0;

function recargarPagina() {
    location.reload();
}

document.getElementById("miFormulario").addEventListener("submit", function (event) {
    event.preventDefault();
    numUsuario = parseInt(document.getElementById("numero").value);
    if (isNaN(numUsuario) || numUsuario < 1 || numUsuario > 10) {
        document.getElementById("resultado").innerHTML += "Por favor, ingresa un número válido entre 1 y 10.<br>";
        document.getElementById("resultado").style.color = "red";
        document.getElementById("miFormulario").reset();
        return;
    }
    if (numUsuario == x) {
        document.getElementById("resultado").innerHTML = "Felicidades adivinaste"
        document.getElementById("resultado").style.color = "green";
    }
    else {
        intentos++;
        if (intentos < 3) {
            resultado.innerHTML += `Fallaste. Te quedan ${3 - intentos} intentos. No era el número ${numUsuario}.<br>`;
            resultado.style.color = "red";
        } else {
            resultado.innerHTML += `Lo siento, has agotado tus 3 intentos. El número era ${x}.<br>`;
            resultado.style.color = "red";
            document.getElementById("miFormulario").reset();
        }
    }
});