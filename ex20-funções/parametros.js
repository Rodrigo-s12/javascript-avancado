function conta(operador, acumulador, ...numeros) { //colocando esses tres pontos nos numeros ele vai pegar o restante dos numeros que no caso e (10, 20, 30, 40) e joga tudo dentro de um array, ele sempre deve ser o ultimo parâmetro.Pode ser usado(...args) que tb funciona, vai pegar o resto.
    for(let numero of numeros) {
        if(operador === '+') acumulador += numero
    }
    console.log(acumulador)
}
conta('+', 0 , 10, 20 ,30, 40)






/*// arguments sustenta todos os os argumentos enviados, so funcionar em 'function', argumentos: são os valores enviados para os parâmetros
function funcao(a, b, c) {
    console.log(arguments)
}
funcao(1, 2, 3)*/