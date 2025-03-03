function sumar(a,b){
    return a+b;
}
function restar(a,b){
    return a-b;
}
function dividir(a,b){
    return a/b;
}
function multiplicar(a,b){
    return a*b;
}

i=true
while(i){
    let a;
    let b;
    let x=parseInt(prompt("Dime que operación quieres hacer? \n1.- Sumar 2.- Restar 3.- Multiplicar 4.- Dividir 5.- Salir"));
    if(x===1){
        a=parseInt(prompt("Dame el valor de a"));
        b=parseInt(prompt("Dame el valor de B"));
        alert(sumar(a,b));
    }
    else if(x===2){
        a=parseInt(prompt("Dame el valor de a"));
        b=parseInt(prompt("Dame el valor de B"));
        alert(restar(a,b));
    }
    else if(x===3){
        a=parseInt(prompt("Dame el valor de a"));
        b=parseInt(prompt("Dame el valor de B"));
        alert(dividir(a,b));
    }
    else if(x===4){
        a=parseInt(prompt("Dame el valor de a"));
        b=parseInt(prompt("Dame el valor de B"));
        alert(multiplicar(a,b));
    }
    else if(x===5){
        alert("Hasta la próxima")
        i=false
    }
    else{
        alert("Opción no valida")
    }
}