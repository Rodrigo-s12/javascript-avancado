// retorne as pessoas que tem o nome com 5 letras ou mais  
// retorne as pessoas com mais de 50 anos
// retorne as pessoas cujo nome termina com a
const pessoas = [
    { nome: 'luiz', idade: 62 },
    { nome: 'maria', idade: 23 },
    { nome: 'eduardo', idade: 55 },
    { nome: 'leticia', idade: 19 },
    { nome: 'rosana', idade: 32 },
    { nome: 'wallace', idade: 47 },
]

const pessoasComNomeGrande = pessoas.filter(valor => valor.nome.length >= 5 
) // filter retorna um novo array filtrado
const pessoasIdade = pessoas.filter(valor => valor.idade > 50)
const terminaComLetraA = pessoas.filter(valor => valor.nome.toLowerCase().endsWith('a')) // aqui eu transformei o nome em minusculo e depois peguei so os que termina com a letra A


console.log(terminaComLetraA)







// filter = sempre retotna um array, com a mesma quantidade de elementos ou menos.
//const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

/*function callbackFilter(valor, indice, array) {  // so em usar o metodo filter a função ja vai usar esse tres parametros, valor = vai pegar cada valor do array, indice = vai pegar os indices dos valores, array = pode receber ou utilizar o valor ou array
    return valor > 10  // quando tiver retornando um valor boolean pra uma condição automaticamente ela vai retornar verdadeiro e falso
    
}*/

//const numerosFiltrados = numeros.filter(valor => valor > 10) // aqui usei uma arrow function, e não preciso usar o return pq so tem uma linha
//console.log(numerosFiltrados)