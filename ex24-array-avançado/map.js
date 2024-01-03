// map sempre vai ter o mesmo tamanho do array original, ele altera os valores e retorna um array do mesmo tamanho do original

/*const  numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

const valoresEmDobro = numeros.map(valor => valor * 2)
console.log(valoresEmDobro)*/

// para cada elemento retorne  uma string com o nome da pessoa 
// remova  apenas ''nome'' do objeto
// adicione uma chave id em cada objeto 
const pessoas = [
    { nome: 'luiz', idade: 62 },
    { nome: 'maria', idade: 23 },
    { nome: 'eduardo', idade: 55 },
    { nome: 'leticia', idade: 19 },
    { nome: 'rosana', idade: 32 },
    { nome: 'wallace', idade: 47 },
]

const nomes = pessoas.map(obj => obj.nome) // aqui to pegando so os nomes das pessoas
const idade = pessoas.map(obj => ({idade: obj.idade})) // aqui to pegando so a idade
const comIds = pessoas.map((obj, indice) => {
    const newObj = {...obj } // aqui eu copiei os valores do 'obj' para não alterar o original
    newObj.id = (indice + 1) * 1000 // aqui adicionei o id nos objeto somei + 1 e multipliquei * 1000
    return newObj
})
console.log(comIds)
//console.log( nomes, idade, comIds)

