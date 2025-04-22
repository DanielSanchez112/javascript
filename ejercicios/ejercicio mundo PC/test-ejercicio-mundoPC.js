import { COrden } from "./class-orden.js"
import { CComputadora } from "./class-computadora.js"
import { CMonitor } from "./class-monitor.js"
import { CTeclado } from "./class-teclado.js"
import { CRaton } from "./class-raton.js"

//teclados y ratones
let raton1 = new CRaton("USB", "HP")
let raton2 = new CRaton("BT", "Dell")
let teclado1 = new CTeclado("BT", "MSI")
let teclado2 = new CTeclado("USB", "Acer")

//monitores
let monitor1 = new CMonitor("HP", "15")
let monitor2 = new CMonitor("Dell", "27")

//computadoras
let computadora1 = new CComputadora("HP", monitor1, raton1, teclado1)
let computadora2 = new CComputadora("Armada", monitor2, raton2, teclado2)

let orden1 = new COrden()
orden1.agregarComputadora(computadora1)
orden1.agregarComputadora(computadora2)

console.log(orden1.mostrarOrden())

console.log(raton1.toString())