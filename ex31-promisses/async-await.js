function rand(min=0, max=3) { // fiz uma função para pegar um número aleatorio em minuto
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
       setTimeout(() => {
        if(typeof msg !== 'string') { 
            reject('CAI NO ERRO')
            return
        }  // quando der um erro ele vai rejeitar
        
        
        
            resolve(msg.toUpperCase() + ' - Passei na promise')
            return
        }, tempo)
    })    
} 

async function executa() { // vai permitir que vc use a palavra await dentro de uma função, para voce esperar uam promise ser finalizada
    try {
    const fase1 = await esperaAi('Fase 1', rand()) // as outras so vão ser executa depois que a primeira for executada
    console.log(fase1)
    
    const fase2 = await esperaAi('fase 2', rand())
    console.log(fase2)

    const fase3 = await esperaAi('Fase 3', rand())
    console.log(fase3)

 
  console.log('Terminamos na fase', fase3)
    } catch(e) { // quando ele encontrar um erro vai para o cacth que vai ser executado o reject
        console.log(e)
    }

}
executa()
// espera a execução da promise