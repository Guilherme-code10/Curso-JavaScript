const pessoa = {
    nome: 'Nathália', 
    idade: 17,
    profissão:'Estudante'
}

// console.log(pessoa.nome)
// console.log(pessoa.idade)

const { nome, idade } = pessoa

console.log(nome)
console.log(idade)

function saudacao( {nome, idade} ) {
    console.log('Olá,', pessoa.nome)
    if (idade > 18){
        console.log('Maior de idade')
    }
}

saudacao(pessoa)

const frutas = ['uva', 'banana']

const [primeira, segunda] = frutas

// const primeira = frutas[0]
// const segunda = frutas[1]