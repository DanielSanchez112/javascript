//el  proposito de un callback par hacer procesos de tipo asincronos

function funcion1() {
    console.log('funcion 1');
}

function funcion2(){
    console.log('funcion 2');
}

//funcion de tipo callback
function imprimir(msg){
    console.log(msg);
}

function dividirResultado(res){
    console.log(res/2);
    
}

//aqui hacemos una suma que despues podemos pasar cualquier otra funcion
//dentro de los parametros 
function sumar(a,b, funccionCallback ){
    let res = a + b
    funccionCallback(res)
}

//ejemplo
sumar(10,10,imprimir) // resultado 20 por que solo imprimie

sumar(10,10,dividirResultado) // resultado 10 por que ejecuta la funcion dividir



//uso de la funcion setTimeOut
function funcionSTO(){
    console.log('saludo asincrono despues de 3 segundos');
}

setTimeout(funcionSTO, 3000) //ejecucion despues de 3 segundos



//uso de la funcion setInterval
//este codigo se ejecutara sin importar que codigo se ejecute en medio eso quiere decir que
//durante los 3 segundos que toma ejecutar la funcion anterior esta funcion
//se ejecutara 3 veces al 3er segundo sera al mismo tiempo la funcionSTO y el rejol
let reloj = () => {
    let fecha = new Date()
    console.log(`${fecha.getHours}:${fecha.getMinutes}:${fecha.getSeconds}`);
    
}
setInterval(reloj, 1000)//se ejecuta cada segundo
