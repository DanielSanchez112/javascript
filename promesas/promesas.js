let miPrimesa = new Promise((resolver, rechazar) => {
    let expresion = true //cambiar a false
    if(expresion === true){
        resolver('Resolvio correcto')
    }else{
        rechazar('Rechazar')
    }
})

miPrimesa.then(
    valor => console.log(valor),
    error => console.log(error)
)

miPrimesa
.then(valor => console.log(valor))
.catch(error => console.log(error))


//funcion set time out y promesas 
const promesa2 = new Promise((resolved) => {
    console.log('inicio de promesa STO');
    setTimeout(() => resolved('se ejecuto con un set time out', 3000))
    console.log('fin de promesa STO');
})

promesa2
.then(ress => console.log(ress))
.catch(err => console.log(err))