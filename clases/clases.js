//las clases son plantilla para crear objetos
//las clases poseen atributos y metodos
//un objeto es una instancia de una clase

//se define la clase y su nombre
class Persona {
    //dentro del constructor se definen los atributos de la clase
    constructor(nombre,apellido){
        this._nombre = nombre
        this._appellido = apellido
    }

    //haciendo uso de los atributos uno puede crear metodos   
    
    //metodo get
    get nombre(){
        return this._nombre
    }

    //metodo set
    set nombre(nombre){
        this._nombre = nombre
    }

    //creacion de los metodos restantes
    get apellido(){
        return this._appellido
    }

    set apellido(apellido){
        this._appellido = apellido
    }

    //metodo para obtener el nombre completo
    nombreCompleto(){
        return this._nombre + " " + this._appellido
    }

    //polimorfismo 
    toString(){
        return this.nombreCompleto()
    }
}

//aqui se crearon personas manualmente haciendo un llamado al constructor
//se crean los objetos de la clase persona
//se llama al constructor y se le pasan los atributos
let persona1 = new Persona("Juan", "Perez")
console.log(persona1)

let persona2 = new Persona("Carlos", "Lara")
console.log(persona2)

//para hacer uso de los metodos
//metodo get
console.log(persona1.nombre)

//metodo set
persona1.nombre = "Pedro"
console.log(persona1.nombre)



//herencia de clases
class Empleado extends Persona{
    constructor(departamento, nombre, apellido){
        super(nombre,apellido)
        this._departamento = departamento
    }

    get departamento(){
        return this._departamento
    }

    set departamento(departamento){
        this._departamento = departamento
    }

    //concepto de sobre escritura 
    nombreCompleto(){
        //se puede acceder a los metodos de la clase padre con super
        return super.nombreCompleto() + ", " + this._departamento
    }
}

let empleado1 = new Empleado("Ventas", "Ana", "Gonzalez")
console.log(empleado1)
console.log(empleado1.nombre)

//se accede al metodo de la clase padre donde escribe el nombre completo
console.log(empleado1.nombreCompleto())
console.log(empleado1.toString())
