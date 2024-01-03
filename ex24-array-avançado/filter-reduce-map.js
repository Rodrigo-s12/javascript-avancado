// retorne a soma do dobro de todos os pares
// filtrar pares
// dobrar os valores 
// reduzir (somar tudo)

const  numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const numerosPares = numeros
.filter(valor => valor % 2 === 0) // filtrei so os numeros pares
.map(valor => valor * 2) // retornei o dobro de todos pares
.reduce((ac, valor) => ac + valor) // aqui somei tudo
console.log(numerosPares)