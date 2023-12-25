//  Escreva uma função que recebe um numero.
// e retorne o seguinte.
// Número é divisivel por 3 = Fizz
// Número é divisivel por 5 = Buzz
// Número e divisivel por 3 e 5 = FizzBuzz
// Número NÃO é divisivel por 3 e 5 = retornar o próprio número
// Checar se o número é relamente um número = retornar o próprio número 
// Use a função com números de 0 a 100

function FizzBuzz(numero) {
    if(typeof numero !== 'number') return numero // aqui eu to checando se e um numero e retornando o proprio numero
    if(numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz' // checando todos os numeros divisiveis por 3 e 5 e retornando a mensagem
    if(numero % 3 === 0) return 'Fizz'
    if(numero % 5 === 0) return 'Buzz'
    return numero // se o número nao for divisivel por 3 e 5, ele vai retonar o proprio numero
    

}
console.log('a',FizzBuzz('a')) // checando se e um numero, como não e vai retornar a string, se foss um numero ia retornar o proprio numero.
for( let i = 0; i <= 100; i++) {
    console.log(i, FizzBuzz(i)) // chamei primeiro os numeros, depois a função mais os numeros, assim vai checando cada if da função
}