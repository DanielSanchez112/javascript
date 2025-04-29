//funcion normal
function miFuncion(){
    console.log('funcion normal');
}
miFuncion()

//la funcion flecha toma esta misma estructura
let miFuncion2 = function(){
    console.log('asignacion de una funcion a una variable');
}
miFuncion2()

//esta es la estructura
//la funcion flecha se llama asi por esto
//-----------------------v
const miFuncionFlecha = () =>{
    console.log('funcion flecha');    
}
//la funcion flecha no aplica el concepto de hoisting
miFuncionFlecha()


//forma de definir una funcion en una sola linea
const funcionFlecha2 = () => console.log('funcion flecha 2');
funcionFlecha2()


//esta funcion retorna en string
const saludar = () => {
    return 'funcion flecha saludar'
}
//aqui se ejecuta la funcion
console.log(saludar());


//funcion flecha para manejo de objetos
const regresarObjeto = () => ({nombre: 'Juan', edad: 25})
console.log('objetos: '+regresarObjeto());


//funcion flehca con parametros 
const funcionConParametro = (mensaje) => console.log(mensaje);
funcionConParametro('funcion con parametros')


//funcion con varios parametros
const funcionConParametros = (a,b) => a+b
console.log(funcionConParametros(1,2))

