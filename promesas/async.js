//uso de la palabra async
//al poner la palabra async en una promesa quiere descir que esta obligado a devolver esa promesa

//aqui tenemos como es una promesa generalmente
let promesa = new Promise((resolved) => {
    setTimeout(() => resolved('resuelto'), 3000)
})


//de esta manera convertimos una funcion en una promesa
async function miFuncionConPromesa() {
    return 'saludo com promesa y async'
}

miFuncionConPromesa.then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});