//sintaxis de una funcion
//*function* nombreFuncion(parametros) {
function nombreFuncion(parametros) {
    //cuerpo de la funcion
}

// ejemplo de una funcion que manda a imprimir una palabra
function imprimir(palabra){
    console.log(palabra)
}

//se utiliza la funcion y se proporcionan los parametros
imprimir("hola mundo")


//difenrecia entre parametros y argumentos
// parametros son los que se declaran en la funcion y 
// los argumentos son los que se pasan a la funcion al llamarla

//ejemplo de una funcion que suma dos numeros
function suma(a,b){
    console.log(a+b)
}

//llamando a la funcion suma con argumentos 5 y 10
suma(5,10)