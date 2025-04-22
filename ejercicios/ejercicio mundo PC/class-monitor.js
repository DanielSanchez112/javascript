export class CMonitor{
    static contadorMonitores = 0

    constructor(marca, tamaño){
        this.idMonitor = ++CMonitor.contadorMonitores
        this._marca = marca
        this._tamaño = tamaño
    }

    get getId(){
        return this.idMonitor
    }

    get getMarca(){
        return this._marca
    }
    set setMarca(marca){
        this._marca = marca
    }

    get getTamaño(){
        return this._tamaño
    }
    set setTamaño(tamaño){
        this._tamaño = tamaño
    }

    toString(){
        return `[idMonitor: ${this.idMonitor}, tamaño: ${this._tamaño}, marca: ${this._marca}]`
    }
}