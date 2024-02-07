class controleRemoto {
    constructor(tv) {
        this.tv = tv
        this.volume = 0 // so estou iniciando o volume no zero
    }
 // método de instância
    aumentarVolume() {
        this.volume += 2 // aumentando de 2 em 2
    }

    diminuirVolume() {
        this.volume -= 2
    }

    // método estatico -> só consegue ser acessado pela a class e também não tem acesso as instâncias da class, não está instânciando a class criando um novo objeto por isso não temos acesso aos métodos e propriedades, 
    static trocaPilha() {
        console.log('ok, vou trocar.')
    }
}
const controle = new controleRemoto('LG')
controle.aumentarVolume()
controle.aumentarVolume()
controle.aumentarVolume()
console.log(controle)

controleRemoto.trocaPilha() 

