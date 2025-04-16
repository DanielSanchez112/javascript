console.log("Hello from matrices.js");

//delcaracion de un matriz
let matriz1 = [[],[]]

//modificar valores en matriz
matriz1[0][0] = 100
//en el renglon 0 indice 0 se le asigna el valor 100
matriz1[0][1] = 200
//en el renglon 0 indice 1 se le asigna el valor 200
matriz1[0][2] = 300

//aqui se llena el renglo 1 con los indices asignados
matriz1[1][0] = 400

matriz1[1][2] = 500

matriz1[1][3] = 600


//simplificacion de la matriz
let matriz2 = [[100,200,300],[400,500,600]]


//imprimiendo partes de la matriz
console.log(matriz1[0][0]) //100
console.log(matriz1[0][1]) //200
//etc

console.log(`Elemento en la matriz 2 posicion 0,0: ${matriz2[0],[0]}`)
console.log(`Elemento en la matriz 2 posicion 1,0: ${matriz2[1],[0]}`)

//iteracion de los elemntos en una matriz
for (let i = 0; i < matriz2.length; i++) {
    for (let j = 0; j < matriz2[i].length; j++) {
        // i es el renglon y j es la columna 
        console.log(`Elemento en la matriz 2 posicion ${i},${j}: ${matriz2[i][j]}`)
    }
}
