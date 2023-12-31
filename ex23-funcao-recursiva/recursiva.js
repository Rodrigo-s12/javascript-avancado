function recursiva(max) { // uma função recursiva vai chamar ela mesma, como se fosse uma estrtura de repetição
    if(max >= 10) return // se max for maior que 10 'return', para sair da função
    max++
    console.log(max)
    recursiva(max)
}

recursiva(0)