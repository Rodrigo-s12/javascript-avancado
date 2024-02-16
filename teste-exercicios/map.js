// serve para alterar alguns dos array original

const pessoas = [
    {nome: 'Rodrigo', idade: 25},
    {nome: 'Gael', idade: 2},
    {nome: 'Vitoria', idade: 22},
    {nome: 'Eliete', idade: 45},
    {nome: 'Netinha', idade: 50},
]

const pessoas1 = pessoas.map(valor => valor.nome) // pegando so o nomes
/*const idades = pessoas.map(function(valor) { // pegando so idade
    delete valor.nome
    return valor 
})*/

const comids = pessoas.map(function(valor, indice) { // criei um novo objeto sem mexer no original
    const newObj = {...valor} // fiz uma copia do original
    newObj.id = indice // adicionei os id, colocando o indice para cada um
    return newObj
})

const idades2 = pessoas.map(valor => ({idade: valor.idade})) // pegando so idade com arrow function
//console.log(comids)


const dobrar = [1, 2, 3]

const somar = dobrar.map(function(valor) {
    return valor * 2
})
//console.log(somar)
const caps = ['oi', 'tudo', 'bem?']

