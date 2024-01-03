 //               -5        -4        -3        -2         -1 
//                0          1         2         3          4
const nome = ['rodrigo', 'vitoria', 'gael', 'wanderson', 'amos']

// splice(indice, delete, elem1, elem2, elem3)

const removidos = nome.splice(0, 0, 'zezinho') // primeiro declara o indice, segundo quantos elementos quer deletar e terceiro adicionar um elemento apartir do indice declarado.
//console.log(nome, removidos)


// Concatenando dois arrays

const a1 = [1, 2, 3]
const a2 = [4, 5, 6]
//const a3 = a1.concat(a2, [7, 8, 9]) // com o metodo concat
const a3 = [...a1, ...a2, 'luiz', ...[7, 8, 9]]// aqui estou concantenando usando o spread operation

console.log(a3)