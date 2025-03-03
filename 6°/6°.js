frutas = [];
lacteos = [];
congelados = [];
dulces = [];
i = true;
while (i) {
    x = parseInt(prompt("Deseas agregar un alimento a tu lista de compras? \n1.- Sí 2.- No 3.- Eliminar elemento"));
    if (x === 1) {
        producto = String(prompt("Que producto es?").toLowerCase());
        categoria = parseInt(prompt("Qué categoría de producto es? \n1.- Frutas 2.- Lácteos 3.- Congelados 4.- Dulces"));
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
    else if (x === 2) {
        alert("Lista de compras:\n\n" +
            "Frutas: " + frutas.join(", ") + "\n" +
            "Lácteos: " + lacteos.join(", ") + "\n" +
            "Congelados: " + congelados.join(", ") + "\n" +
            "Dulces: " + dulces.join(", "));
        alert("Hasta la próxima")
        i = false
    }
    else if (x === 3) {
        if (frutas.length === 0 && lacteos.length === 0 && congelados.length === 0 && dulces.length === 0) {
            alert("No hay elementos en ninguna lista para eliminar.");
            continue;
        }
        let elimElemento = prompt("Lista de compras:\n\n" +
            "¿Qué elemento deseas eliminar? \n"+
            "Frutas: " + frutas.join(", ") + "\n" +
            "Lácteos: " + lacteos.join(", ") + "\n" +
            "Congelados: " + congelados.join(", ") + "\n" +
            "Dulces: " + dulces.join(", ")
        ).toLowerCase();
        let listaSeleccionada = parseInt(prompt("¿De qué lista es ese elemento? \n1.- Frutas 2.- Lácteos 3.- Congelados 4.- Dulces"));
        let lista;
        if (listaSeleccionada === 1) {
            lista = frutas;
        } else if (listaSeleccionada === 2) {
            lista = lacteos;
        } else if (listaSeleccionada === 3) {
            lista = congelados;
        } else if (listaSeleccionada === 4) {
            lista = dulces;
        } else {
            alert("Opción no válida.");
            continue;
        }
        let index = lista.indexOf(elimElemento);
        if (index !== -1) {
            lista.splice(index, 1);
            alert("El elemento " + elimElemento + " ha sido eliminado de la lista.");
        } else {
            alert("¡No fue posible encontrar el elemento en la lista!");
        }
    }
    else {
        alert("Opción no valida")
    }
}
