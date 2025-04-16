//las clases son plantilla para crear objetos
//las clases poseen atributos y metodos
//un objeto es una instancia de una clase

//se define la clase y su nombre
class Persona {
    //definir atrubutos staticos

    static contadorObjetosPersona = 0 //atrubuto de la clase
    static contadorIdPersona = 0 //atributo para crear un id

    static get MAX_OBJ(){
        return 5
    }//el punto es crear una variable que no se pueda modificar

    email = null //atributo de instancia o objeto

    //dentro del constructor se definen los atributos de la clase
    constructor(nombre,apellido){
        this._nombre = nombre
        this._appellido = apellido
        this.idPersona = ++Persona.contadorIdPersona

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
        return "id: "+ this.idPersona + ", " + this._nombre + " " + this._appellido
    }

    //polimorfismo 
    toString(){
        return this.nombreCompleto()
    }

    static saludar(){
        console.log()
    }

    static saludar2(persona){
        console.log(persona.nombreCompleto())
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

//prueba del metodo estatico
//persona1.saludar() no es posible llamar un metodo static desde un metodo

Persona.saludar() //solo se puede llamar desde la clase

Persona.saludar2(empleado1)// al pasarle un parametro persona podemos seleccionar 
// el objeto que queremos ver

Empleado.saludar2(empleado1)//tambien se puede llamar desde la clase hija
//por que es una clase que hereda de la clase padre

console.log(Persona.contadorObjetosPersona) //accedemos a la variable estatica
//lo mismo funciona con la clase hija

//accedemos al atrubuto email del objeto
console.log(empleado1.email);

//aqui accedemos a todas las propiedades de los objetos y dentro esta el id
console.log(persona1,persona2,empleado1)

console.log(Persona.MAX_OBJ) //accedemos al atributo estatico de la clase