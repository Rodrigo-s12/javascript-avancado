// for - in => ler indices ou chaves do abjeto
//                0       1         2     =>   indices

const pessoa = {
    nome: 'Rodrigo', // chave
    sobrenome: 'Santos',
    idade: 24
}
for(let chave in pessoa) { // for in => com object // para cada 'chave' dentro de 'pessoa' 
    console.log(`${chave}: ${pessoa[chave]}`)
}






/*const frutas = ['uva', 'banana', 'limao'] // for in => com array

for(let i in frutas) {
    console.log(frutas[i])
}*/

