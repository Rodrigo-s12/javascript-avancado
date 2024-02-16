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



const alunos = [
    {nome: 'Diogo', media: 5.5},
    {nome: 'Julia', media: 9.5},
    {nome: 'Roberto', media: 1.5},
    {nome: 'Tiago', media: 6.0}
]

const aprovados = alunos.filter(valor => valor.media >= 6.5)

console.log(aprovados)
