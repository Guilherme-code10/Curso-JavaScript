const { CONNREFUSED } = require("node:dns")

const pessoa = {
    nome: 'Ana',
    idade: 26,
    temCNH: true
}

pessoa.sobrenome = 'paula'

console.log('Nome: ', pessoa.nome)
console.log('Sobrenome: ', pessoa.sobrenome)

const livro = {
    título: 'O Hobbit',
    autor: 'J. R. R. Tolkien',
    paginas: 310
}

livro.publicado = true
livro.idiomas = [
    'Inlges', 'Portugues', 'Espanhol'
]

livro.idiomas.push('Mandarim')
livro.idiomas.push('Francês')

console.log('Livro antes:', livro)

delete livro.paginas

console.log('Livro depois:', livro)

console.log('Autordo livro', livro['autor'])
console.log('Editora', livro['editora'])

const autor = {
    nome:'J R R R Tolkien',
    nacionalidade: 'Britanico',
    idade: 98
}

console.log('Autor', autor)

livro.autor = autor

console.log(livro)

livro.autor.nome
livro.autor.nacionalidade
