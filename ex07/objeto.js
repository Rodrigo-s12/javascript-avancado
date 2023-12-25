const pessoa1 = {
    nome: 'Rodrigo',
    sobrenome:'silva',
    idade: 25,

   fala() {
    console.log(`A minha idade atual e ${this.idade}`)
   },

   incrementaIdade() {
    this.idade++
   }
}

pessoa1.fala()
pessoa1.incrementaIdade()
pessoa1.fala()
pessoa1.incrementaIdade()
pessoa1.fala()
pessoa1.incrementaIdade()
