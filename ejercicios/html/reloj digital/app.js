function hora(){
    let tiempo = new Date()
    let hora = formatoHora(tiempo.getUTCHours())
    let minutos = formatoHora(tiempo.getUTCMinutes())
    let segundos = formatoHora(tiempo.getUTCSeconds())
    document.getElementById('hora').innerHTML = `${hora} : ${minutos} : ${segundos}`


    const dias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

    const meses = [
    'Enero', 'Febrero', 'Marzo', 'Abril',
    'Mayo', 'Junio', 'Julio', 'Agosto',
    'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];

    let dia = dias[tiempo.getUTCDay()]
    let mes = meses[tiempo.getMonth()]
    let año = tiempo.getFullYear()

    document.getElementById('calendario').innerHTML = `${dia} ${tiempo.getDay()} de ${mes} ${año}`
}

const formatoHora = (hora)=>{
    if(hora < 10){
        hora = '0' + hora
    }
    return hora
}

setInterval(hora, 1000)

