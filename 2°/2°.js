document.getElementById("miFormulario").addEventListener("submit", function(event) {
    event.preventDefault();
    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("años").value;
    let lenguaje = document.getElementById("lenguaje").value;
    document.getElementById("informacion").innerHTML = `"Hola ${nombre}, tienes ${edad} años y ya estás aprendiendo ${lenguaje}!"`;
    document.getElementById("oculto").classList.remove("oculto");
    document.getElementById("pregunta").innerHTML="¿Te gusta estudiar "+lenguaje+"? Responde con el número 1 para SÍ o 2 para NO.";
});
document.getElementById("miFormulario2").addEventListener("submit", function(event) {
    event.preventDefault();
    let repuesta = document.getElementById("repuesta").value;
    if (repuesta==1){
        document.getElementById("informacion2").innerHTML="¡Muy bien! Sigue estudiando y tendrás mucho éxito.";
    }
    else{
        document.getElementById("informacion2").innerHTML="Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?"
    }

});