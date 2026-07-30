// contar quantos numeros pares e quantos numero impares nós temos entre 0 e 100

let totalNumerosPares = 0
let totalNumerosImpares = 0 

// laço de repetição

for (let contador = 0; contador <= 100; contador++) {
    if (contador % 2 == 0) {
        totalNumerosPares++
    } else {
        totalNumerosImpares++
    }
}

console.log('Total de números pares:', totalNumerosPares)
console.log('Total de números ímpares:', totalNumerosImpares)