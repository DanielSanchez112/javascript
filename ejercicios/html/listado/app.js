
console.log('listado de persoasn');

const personas = [
    new CPersona('Juan', 'Perez'),
    new CPersona('Karla', 'Lara')
]

function mostraPersona(){
    console.log('mostrado persona');
    let texto = ''
    for(let i of personas){
        texto += `<li>${i._nombre}${i._apellido}</li>`
    }
    
    
    document.getElementById('lista').innerHTML = texto
}

function add(){
    let nombre = document.getElementById('nombre').value
    let apellido = document.getElementById('apellido').value
    
    if(nombre === ''){
        document.getElementById('labelNombre').innerHTML = 'Falta el nombre'
    }else if(apellido === ''){
        document.getElementById('labelNombre').innerHTML = 'Nombre'
        document.getElementById('labelApellido').innerHTML = 'Falta el apellido'
    }else{
        let persona = new CPersona(nombre,apellido)
        personas.push(persona)
        document.getElementById('labelApellido').innerHTML = 'Apellido'

        mostraPersona()
    }
}