import { CDispositivoEntrada } from "./class-dispositivo-entrada.js"

export class CTeclado extends CDispositivoEntrada{
    static contadorTeclados = 0

    constructor(nombre, marca){
        super(nombre,marca) 
        this.idTeclado = ++CTeclado.contadorTeclados
    }

    get getIdTeclado(){
        return this.idTeclado
    }
    toString(){
        return `[idTeclado: ${this.idTeclado}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}]`
    }
}