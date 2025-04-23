'use strict'
//uso del try catch
try {
    let x = 10
    // miFuncion()
} catch (error) {
    console.log(error)
}finally{
    console.log('fin de la revision de errores')
}

//throw new error

let resultado = 'hola'
try {
    // mandamos nuestro propio error al encontrar un error
    if( isNaN(resultado)) throw 'No es un numero'
} catch (error) {
    console.log(error);
}

//tipos de errores
throw new Error("Error genérico");
throw new TypeError("Tipo incorrecto");
throw new ReferenceError("Variable no definida");
throw new RangeError("Valor fuera de rango");
