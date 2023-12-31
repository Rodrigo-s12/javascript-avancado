// elas pausam o codigo em determinado momento, nunca entrega todos os valores de um vez

function* geradora1() {
    yield 'valor 1' // parecido com return, mais so que ele retorna o resultado pausado, cada vez que a funçaõ for chamada ele vai mandar um valor diferente

    yield 'valor 2'
}

const g1 = geradora1()


function* gerador2() {
    yield 1
    yield 2
    yield 3
}

function* gerador3() {
    yield* gerador2()
    yield 4
    yield 5
    yield 6
}
const g = gerador3()
function* gerador4() {
    yield function() {
        console.log('yield 1')
    }

    yield function() {
        console.log('yield 2')
    }
}

const g2 = gerador4()
const func1 = g2.next().value
const func2 = g2.next().value
func1()
func2()