const pessoa = {
    nome: 'Vinicius',
    idade: 37,
    pets: ['Luke'],
    nacionalidade: 'Brasileiro'
}

for(const chave in pessoa) {
    console.log('Chave', chave)
     console.log('Valor', pessoa[chave])
}

const chaves = Object.keys(pessoa)
const valores = Object.values(pessoa)

const entradas = Object.entries(pesoa)

console.log('chaves:', chaves)
console.log('valores:', valores)
console.log('Entradas (chaves/valor):', entradas)