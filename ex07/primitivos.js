let a = [1, 2, 3]
let b = [...a] //fiz uma copia de 'a' dentro de 'b' o valor de b nao vai mudar, mesmo quando atribuir outro valor para 'a '
a.push(3)
console.log(a, b)


/*
primitivos(imutaveis): string, number, boleean,undefined,null(bigint,symbol)

referência(mutavel) - array, object, function - passados por referencia
*/ 

/*let a = 'A'  // primitivos
let b = a // copia, se adicionar outro valor a variavel o b fica com mesmo
a = 'c'*/

/*let a = [1 , 2, 3]
let b = a     // por referência, os dois fica com o mesmo valor
a.push(4)
console.log(a, b) 

b.pop()
console.log(a,b)*/
