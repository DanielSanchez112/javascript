//sintaxis de los objetos

let persona = {
    nombre: "Juan",
    edad: 25,
    profesion: "Ingeniero",
    // los objetos pueden tener funciones
    saludar: function() {
        console.log("Hola, mi nombre es " + this.nombre);
    }
}
console.log(persona.nombre) // aqui se imprime el nombre

//de esta manera se imprimen todos los datos del objeto
console.log(persona)

console.log(persona.saludar())// aqui se ejecuta la funcion



//creacion de un objeto vacio
let persona2 = new Object()

//agregar los atributos
persona2.nombre = "Pedro"
persona2.edad = 30
persona2.profesion = "Arquitecto"
persona2.saludar = function() {
    console.log("Hola, mi nombre es " + this.nombre);
}

console.log(persona2.nombre) // aqui se imprime el nombre
console.log(persona2.saludar())// aqui se ejecuta la funcion

