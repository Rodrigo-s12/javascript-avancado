// reduzir o array a um elemento só

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

const total = numeros.reduce(function(ac, valor) {
    ac += valor
    return ac
})
//console.log(total)


const pessoas = [
    {nome: 'Rodrigo', idade: 62},
    {nome: 'Gael', idade: 23},
    {nome: 'Vitoria', idade: 55},
    {nome: 'Eliete', idade: 10},
    {nome: 'Netinha', idade: 64},
    {nome: 'Arinha', idade: 63},
]

const maisVelha = pessoas.reduce(function(ac, valor) {
    if(ac.idade > valor.idade) return ac
    return valor
})
console.log(maisVelha)