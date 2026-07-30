function saudacao() {
    console.log('E ai, beleza')
}

// setTimeout(saudacao, 5000) //ms

let contador = 0

const id = setInterval(() => {
    contador++
    console.log('Tempo decorrido (em segundos):', contador)
    if (contador == 10) {
        clearInterval(id)
    }
}, 1000)