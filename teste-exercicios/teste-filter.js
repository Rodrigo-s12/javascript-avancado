const pessoas = [
    {nome: 'vitoria', idade: 20},
    {nome: 'gael', idade: 2},
    {nome: 'rodrigo', idade: 25},
    {nome: 'jose', idade: 60},
    {nome: 'netinha', idade: 55},
]

const pessoasMaisDe50 = pessoas.filter(valor => valor.idade > 50)
const pessoasIdadeENome = pessoas.filter(valor => valor.idade > 10 && valor.nome.length > 5)
const nomeTerminaComLetraA = pessoas.filter(valor => valor.nome.endsWith('a'))
console.log()



const dimensoes = [
    {altura: 10, comprimento: 20}, 
    {altura: 2, comprimento: 4},
    {altura: 1, comprimento: 1},
    {altura: 50, comprimento: 50},
]



