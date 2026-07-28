// function saldacao(nome) { // nome é um parametro da função
//    console.log('Olá,', nome)
// }

// const saudaco = (nome) => {
//     console.log('Vida longa e próspera,', nome)
// }

const saudacao = nome => console.log('Olá,', nome)

saudacao('Vinicios') // Vinicios é o "argumento"
saudacao('Jéssica')
saudacao('Nathália')

// function calcularDobroDeUm(numero) {
//    return numero + 2
// }

const calcularDobroDeUmNumero = (numero) => {
    return numero + 2
}

const numeroDobrado = calcularDobroDeUmNumero(4)
console.log('O dobro de 4 é:', numeroDobrado)

console.log('Olá', 'tudo', 'bem', '?')