export class CDispositivoEntrada{
    constructor(tipoEntrada, marca){
        this._tipoEntrada = tipoEntrada
        this._marca = marca
    }

    get getTipoEntrada(){
        return this._tipoEntrada
    }
    set setTipoEntrada(tipoEntrada){
        this._tipoEntrada = tipoEntrada
    }

    get getMarca(){
        return this._marca
    }
    set setMarca(tipoEntrada){
        this._marca = tipoEntrada
    }
}