class Persona {
    static contadorPersona = 0
    constructor( nombre, apellido, edad){
        this._idPersona = ++Persona.contadorPersona
        this._nombre = nombre
        this._apellido = apellido
        this._edad = edad
    }

    get getIdPersona(){
        return this._idPersona
    }

    get getNombre(){
        return this._nombre
    }
    set setNombre(nombre){
        this._nombre = nombre
    }

    get getApellido(){
        return this._apellido
    }
    set setApellido(apellido){
        this._apellido = apellido
    }

    get getEdad(){
        return this._edad
    }
    set setEdad(edad){
        this._edad = edad
    }

    toString(){
        return "id: " + this._idPersona + " Nombre: " + this._nombre + " " + this._apellido + " Edad: " + this._edad
    }
}

class Empleado extends Persona{
    static contadorEmpleado = 0

    constructor(nombre, apellido, edad, sueldo){
        super(nombre,apellido,edad,sueldo)
        this._idEmpleado = ++Empleado.contadorEmpleado
        this._sueldo = sueldo
    }

    get getIdEmpleado(){
        return this._idEmpleado
    }

    get getSueldo(){
        return this._sueldo
    }
    set setSueldo(sueldo){
        this._sueldo = sueldo
    }

    toString(){
        return "idEmpleado: "+ this._idEmpleado +" "+ super.toString() + " sueldo: " + this._sueldo
    }
}

class Cliente extends Persona{
    static contadorCliente = 0

    constructor(nombre, apellido, edad, fechaRegistro){
        super(nombre,apellido,edad)
        this._idCliente = ++Cliente.contadorCliente
        this._fechaRegistro = fechaRegistro
    }

    get getIdCliente(){
        return this._idCliente
    }

    get getFechaRegistro(){
        return this._fechaRegistro
    }
    set setFechaResgistro(FR){
        this._fechaRegistro = FR
    }

    toString(){
        return "idCliente: "+ this._idCliente +" "+ super.toString() + " FR: " + this._fechaRegistro
    }
}

//pruebas
let persona1 = new Persona("Juan", "Perez", 28)

let Empleado1 = new Empleado("Carlos", "Lara", 30, 5000)

let Cliente1 = new Cliente("Pedro", "Lara", 30, new Date())

console.log(persona1.toString());
console.log(Empleado1.toString());
console.log(Cliente1.toString());


