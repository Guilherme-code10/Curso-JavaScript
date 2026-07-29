const readline = require('readline');

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

leitor.question('Digite  o primeiro número: \n', (numero1) => {
    leitor.question('Digite a operação:\n+: soma\b-:subtração\n> ', (operacao) => {
        leitor.question('Digite o segudo número:\n>', (numero2) => {
  
            const num1 = Number(numero1)
            const num2 = Number(numero2)


          leitor.close();
        })
    
    })
})