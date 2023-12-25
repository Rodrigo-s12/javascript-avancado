// let tem escopo de bloco {...bloco}
// var tem escopo de função
const verdadeira = true

let nome = 'luiz' // Eu não consigo redeclarar let
var nome2 = 'luiz'


if(verdadeira) {       // bloco
    let nome = 'otavio'
    console.log(nome, nome2)

    if(verdadeira) {
        var nome2 = 'outra coisa'
        
    }
    console.log(nome, nome2)
}        
