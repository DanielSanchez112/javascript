//se define primero una funcion async
async function funcionConPromesaYAwait() {
    let promesa = new Promise((resolved) => {
        resolved('promesa con await')
    })

    //await solo se puede usar dentro de una funcion declarada con async
    console.log(await promesa); //espera a que la promesa sea correcta
}
 
funcionConPromesaYAwait()