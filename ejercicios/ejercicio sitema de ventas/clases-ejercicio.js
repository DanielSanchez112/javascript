class CProducto {
    static cotadorProducto = 0

    constructor(nombre, precio){
        this.idProducto = ++CProducto.cotadorProducto
        this._nombre = nombre
        this._precio = precio
    }

    get getIdProducto(){
        return this.idProducto
    }

    get getNombre(){
        return this._nombre
    }
    set setNombre(nombre){
        this.nombre = nombre
    }

    get getPrecio(){
        return this._precio
    }
    set setPrecio(precio){
        this._precio = precio
    }

    toString(){
        return "idProducto: " + this.idProducto + ", Nombre: " + this._nombre + ", Precio: " + this._precio 
    }
}

class COrden{
    static condatorOrdenes = 0
    static get MAX_PRODUCTOS(){
        return 5 
    }
    constructor(){
        this.idOrden = ++COrden.condatorOrdenes 
        this._productos = []
        this._contadorProductosAgregados = 0
    }

    get getIdOrden(){
        return this.idOrden
    }

    agregarProducto(producto){
        if(this._productos.length < COrden.MAX_PRODUCTOS){
            this._productos.push(producto)
            this._contadorProductosAgregados++
        }else{
            console.log("No se pueden agregar mas productos")
        }
    }

    calcularTotal(){
        let total = 0
        for(let p of this._productos){
            total += p.getPrecio
        }
        return total
    }

    mostrarOrden(){
        let productosOrden = ""
        for(let p of this._productos){
            productosOrden += "\n" + p.toString()
        }
        return "-------------ticket-------------\n" + "Orden: " + this.idOrden + " Total: " + this.calcularTotal() + "\n Productos: " + productosOrden + "\n-------------ticket-------------"
    }
}

let producto1 = new CProducto("Camisa", 1000)
let producto2 = new CProducto("Pantalon", 2000)
let producto3 = new CProducto("Zapatos", 3000)
let producto4 = new CProducto("Cinturon", 4000)
let producto5 = new CProducto("Gorra", 5000)

let Orden1 = new COrden()
Orden1.agregarProducto(producto1)
Orden1.agregarProducto(producto2)
Orden1.agregarProducto(producto3)
Orden1.agregarProducto(producto4)
Orden1.agregarProducto(producto5)
Orden1.agregarProducto(producto1)

console.log(Orden1.mostrarOrden())



