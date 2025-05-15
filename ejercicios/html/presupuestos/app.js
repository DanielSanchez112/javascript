const listaIngresos = []

function ingresosEgresos(){
    let textoI = ''
    let textoE = ''
    let ingresoTotal = 0
    let egresoTotal = 0
    for(let i of listaIngresos){
        if(i._tipo === true){
            textoI += `<li>${i._descripcion}             $${i._valor}</li>`
            ingresoTotal += parseFloat(i._valor)
        }else{
            textoE += `<li>${i._descripcion}$${i._valor}<button value="${}" onclick="eliminar()" type="button" class="btn btn-danger"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
                            </svg>
                        </button></li>`
            egresoTotal += parseFloat(i._valor)
        }
    }

    document.getElementById('porcentaje').innerHTML = `${egresoTotal/ingresoTotal*100}%`
    document.getElementById('total').innerHTML = `$${ingresoTotal - egresoTotal}`
    document.getElementById('ingresosTotal').innerHTML = `$${ingresoTotal}`
    document.getElementById('egresosTotal').innerHTML = `-$${egresoTotal}`
    document.getElementById('listaI').innerHTML = textoI
    document.getElementById('listaE').innerHTML = textoE
}

function add(){
    let tipo
    let descripcion = document.getElementById("descripcion")
    let valor = document.getElementById("valor")

    

    if(document.getElementById("tipo").value === "+"){
        tipo = true
    }else{
        tipo = false
    }

    const ingreso = new Ingresos(tipo, descripcion.value, valor.value)
    listaIngresos.push(ingreso)
    console.log(ingreso);
    console.log(listaIngresos);
    
    ingresosEgresos()
}

function eliminar(){
    
}
