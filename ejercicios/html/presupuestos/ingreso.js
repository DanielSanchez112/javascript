class Ingresos{
    static id

    constructor(tipo,descripcion,valor){
        this.id = Ingresos.id += 1
        this._tipo = tipo
        this._descripcion = descripcion
        this._valor = valor
    }

    get getId(){
        return this.id
    }
    get getTipo(){
        return this._tipo
    }
    get getDescripcion(){
        return this._descripcion
    }
    get getValor(){
        return this._valor
    }
}