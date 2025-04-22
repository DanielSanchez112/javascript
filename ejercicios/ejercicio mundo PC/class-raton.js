import { CDispositivoEntrada } from "./class-dispositivo-entrada.js"

export class CRaton extends CDispositivoEntrada{
    static contadorRatones = 0

    constructor(nombre, marca){
        super(nombre,marca) 
        this.idRaton = ++CRaton.contadorRatones
    }

    get getIdRaton(){
        return this.idRaton
    }
    toString(){
        return `[idRaton: ${this.idRaton}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}]`
    }
} 