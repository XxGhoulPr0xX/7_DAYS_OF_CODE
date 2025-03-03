frutas = [];
lacteos = [];
congelados = [];
dulces = [];
i = true;
while (i) {
    x = prompt("Deseas agregar un alimento a tu lista de compras? \nsi o no").toLowerCase();
    if (x == "si") {
        producto = prompt("Que producto es?").toLowerCase();
        categoria = parseInt(prompt("Qué categoría de producto es? \n1.- Frutas 2.- Lácteos 3.- Congelados 4.- Dulces").toLowerCase());
        if (categoria === 1) {
            frutas.push(producto);
        } else if (categoria === 2) {
            lacteos.push(producto);
        } else if (categoria === 3) {
            congelados.push(producto);
        } else if (categoria === 4) {
            dulces.push(producto);
        } else {
            alert("No existe esa categoría");
            continue;
        }
        alert("El producto " + producto + " ha sido agregado");
    }
    else if (x == "no") {
        alert("Lista de compras:\n\n" +
            "Frutas: " + frutas.join(", ") + "\n" +
            "Lácteos: " + lacteos.join(", ") + "\n" +
            "Congelados: " + congelados.join(", ") + "\n" +
            "Dulces: " + dulces.join(", "));
        alert("Hasta la próxima")
        i = false
    }
    else {
        alert("Opción no valida")
    }
}
