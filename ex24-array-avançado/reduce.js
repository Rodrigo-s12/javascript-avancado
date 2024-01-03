// reduce ->  reduzir um array a um unico elemento
// some todos os numeros 
// retorne um array com os pares (filter)
// retorne um array com o dobro dos valores(map)

const  numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

const soma = numeros.reduce(function(acumulador, valor) { // 
    acumulador += valor // to somando todos os numeros e jogando dentro do acumulador
    
    return acumulador
    
})
//console.log(soma)


// retorne a pessoa mais velha

const pessoas = [
    { nome: 'luiz', idade: 62 }, // aqui ta sendo o acumulador
    { nome: 'maria', idade: 23 },// aqui ta sendo o valor
    { nome: 'eduardo', idade: 55 },
    { nome: 'leticia', idade: 19 },
    { nome: 'rosana', idade: 64 },
    { nome: 'wallace', idade: 47 },
]
// o acumulador ta sendo o primeiro pq não to mandando nenhum valor 
const maisVelho = pessoas.reduce(function(acumulador, valor) {
    if(acumulador.idade > valor.idade) return acumulador // aqui vou fazer a checagem 
    return valor
}) // aqui vai o valor entro esses parenteses 
console.log(maisVelho)