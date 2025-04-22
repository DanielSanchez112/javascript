export class CComputadora{
    static contadorComputadoras = 0

    constructor(nombre, monitor, raton, teclado){
        this.idComputadora = ++CComputadora.contadorComputadoras
        this._nombre = nombre
        this._monitor = monitor
        this._raton = raton
        this._teclado = teclado
    }

    get getNombre(){
        return this._nombre
    }
    set setNombre(nombre){
        this._nombre = nombre
    }

    get getMonitor(){
        return this._monitor
    }
    set setMonitor(monitor){
        this._monitor = monitor
    }

    get getTeclado(){
        return this._teclado
    }
    set setTeclado(teclado){
        this._teclado = teclado
    }

    get getRaton(){
        return this._raton
    }
    set setRaton(raton){
        this._raton = raton
    }

    toString(){
        return `COMPUTADORA: ${this.idComputadora},  ${this._nombre} \nmonitor: ${this._monitor} \nteclado: ${this._teclado} \nraton: ${this._raton.toString()}`
    }
}