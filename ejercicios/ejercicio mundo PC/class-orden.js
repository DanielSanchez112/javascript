export class COrden{
    static contadorOrdenes = 0

    constructor(computadoras = []){
        this.idOrden = ++COrden.contadorOrdenes
        this._computadoras = computadoras
    }

    get getIdOrden(){
        return this.idOrden
    }

    agregarComputadora(computadora){
        this._computadoras.push(computadora)
    }

    mostrarOrden(){
        let mostrarComputadoras = ''
        for(let c of this._computadoras){
            mostrarComputadoras += `\n ${c.toString()}\n`
        }
        return `------------DATA------------\nOrden: ${this.idOrden} \n ${mostrarComputadoras}\n------------DATA------------`
    }
}