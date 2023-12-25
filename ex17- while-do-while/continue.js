const numeros = [1, 2, 3, 4, 5, 6, 7, 8]
// for = para, of =  de, para cada num de numeros
for(let num of numeros) {
   //if = se
   if(num === 2) { //quando achar o numero 2 ele vai pular, se o num for igual a 2 ele vai dar continue
    console.log('pulei o numero 2')
    continue  // pular para a proxima interação e continua executando
    
   }
   
   console.log(num)
    if(num === 7 ) {
        console.log('7 encontrado , saindo...')
        break // ele vai quebrar o laço, vai para a proxima que tiver fora do for no caso, não vai ser executado mais nada desse interação
    }
    

}