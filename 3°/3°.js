let continuar = true;
let y=true
let z=true
let x4 = [];

while(y){
    let x = prompt("¿Quieres seguir hacia el área de Front-End o seguir hacia el área de Back-End?").toLowerCase();
    if (x == "front-end") {
        let continuar = true
        while (continuar) {
            let x2 = prompt("¿Quieres aprender React o Vue?").toLowerCase();
            if (x2 == "react") {
                alert("¡Excelente elección! React es una de las bibliotecas más populares para el desarrollo Front-End.");
                continuar = false;
                y = false;
            }
            else if (x2 == "vue") {
                alert("¡Genial! Vue es un framework progresivo y muy fácil de aprender.");
                continuar = false;
                y = false;
            }
            else {
                alert("Opción no válida.");
            }
        }
    }
    else if (x == "back-end") {
        let continuar = true
        while (continuar) {
            let x3 = prompt("¿Quieres aprender C# o Java?").toLowerCase();
            if (x3 == "c#") {
                alert("¡Buena elección! C# es un lenguaje poderoso para el desarrollo Back-End, especialmente con .NET.");
                continuar = false;
                y = false;
            }
            else if (x3 == "java") {
                alert("¡Java es una excelente opción! Es ampliamente utilizado en aplicaciones empresariales.");
                continuar = false;
                y = false;
            }
            else {
                alert("Opción no válida. Reinicia el juego.");
            } 1
        }
    }
    else {
        alert("Opción no válida.");
    }
}

while(z){
    let decision = prompt("¿Quieres especializarte en el área elegida o desarrollarte para convertirte en Fullstack? (especializarse/fullstack)").toLowerCase();
    if (decision == "especializarse") {
        alert("¡Perfecto! La especialización te permitirá dominar tu área y ser un experto.");
        z = false;
    }
    else if (decision == "fullstack") {
        alert("¡Convertirte en Fullstack es una gran idea! Tendrás un perfil más versátil y completo.");
        z = false;
    }
    else {
        alert("Opción no válida. Reinicia el juego.");
    }
}

while (continuar) {
    let tecno = prompt("¿Qué tecnología te gustaría aprender? (Escribe el nombre)");
    if (tecno == "ok") {
        continuar = false
        alert("Tu lista de tecnologías para aprender es: " + x4.join(", "));
    }
    else{
        alert(`¡${tecno} es una excelente tecnología! Añadida a tu lista de aprendizaje.`);
        x4.push(tecno);
    }
}
