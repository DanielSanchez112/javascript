class CEmpleado {
    constructor(nombre, sueldo){
        this._nombre = nombre
        this._sueldo = sueldo
    }

    obternerDetalles(){
        return `Nombre: ${this._nombre}, Sueldo: ${this._sueldo}`
    }
}

class CGerente extends CEmpleado{
    constructor(nomrbe,sueldo,departamento){
        super(nomrbe,sueldo)
        this._departamento = departamento
    }

    obternerDetalles(){
        return `${super.obternerDetalles()}, Departamento: ${this._departamento} `
    }
}

//apesar de que ambos tienen el metodo de obtener detalles se entiende que la clase hija
//que es la de gerente sobreescribe la funcion de obtener detalles, sin ese metodo de la
//clase hija tendria acceso al metodo pero qal sobreescribirlo le damos su propio funcionamiento
//a la clase hija

let empleado1 = new CEmpleado("Enrique", 10000)
console.log(empleado1.obternerDetalles())

let gerente1 = new CGerente("Daniel", 20000, "IT")
console.log(gerente1.obternerDetalles());


//polimorfismo

function imprimit(tipo){
    console.log(tipo.obternerDetalles());
    if(tipo instanceof CEmpleado){
        console.log('Es un objeto de la calse empleado')
    }
}


//al tener una funcion que ejecuta el metodo que abas clases tienen segun sea el tipo de clase
//que se le asigna se ejecutara el metodo de esa forma tendremos polimorfia al poder darle
//funcionamientos distintos a una sola funcion

imprimit(empleado1)
imprimit(gerente1)
