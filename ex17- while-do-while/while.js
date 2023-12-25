function random(min, max) {
    const r = Math.random() * (max - min) + min  // vai criar numero aleatorio
    return Math.floor(r)

}
const min = 1
const max = 50 // eu to determinando quando vai ser o min e o max

let rand = random(min, max)
//while = enquanto, ele verifica a condição para depois executar o laço se o rand for = 10, ele vai analisar a condição e não vai executar nada.
while (rand !== 10) {   //quando o rand for igual a 10 vai parar de contar, while e usado mais quando tem essas coisas que gente n sabe quando vai terminar.

    rand = random(min, max) // chamo a função para atualizar o numero
    console.log(rand)
}

// faça = do, while = enquanto
do { // ele executa primeiro o codigo e depois executa a condição
    rand = random(min, max) // chamo a função para atualizar o numero
    console.log(rand)
} while(rand !== 10 ) // enquanto a condição for verdadeira