// XMLHttpRequest - pode fazer requisição de qualquer tipo de dados
// vai buscar as paginas
/*const request = obj => { 
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest() 
   xhr.open(obj.method, obj.url, true)// get = buscar algum conteudo da internet, requisição, o padrao do navegador, aqui eu peguei os parametros do abjeto, aqui so estamos usando get
   xhr.send() // usado quando o metodo e post, primeiro vem o verbo, url, assincrono ou sincrono com boolean = true ou false


   // checar quando essa requisição terminou
   xhr.addEventListener('load', () => {
        if(xhr.status >= 200 && xhr.status < 300) {// se o status der entre 200 e 300
            resolve(xhr.responseText) // aqui vem o que gente buscou na requisição
        } else {
            reject(xhr.statusText)// mandar o status do erro

        }
   })
    })
   
}*/

//pegar os clicks nos links, qualquer click
document.addEventListener('click', e => {
    const el = e.target
    const tag = el.tagName.toLowerCase() // pegando cada tag e convertendo para minuscula

    if(tag === 'a') { // se a tag clicada for o "A", vai usar a função de carregar a pagina
        e.preventDefault() //  prevenir que o link vai para a pagina
        carregaPagina(el)
    }
})

async function carregaPagina(el) {
    
    try {
        const href = el.getAttribute('href') // pegando o link que ta sendo clicado
        const response = await fetch(href) // por padrão retorna uma promisse
    
        if(response.status !== 200) throw new Error('ERROR 404!')
    
        const html = await response.text()
        carregaResultado(html)
    } catch(e) {
        console.log(e)
    }
    
}

    /*request(objConfig).then(response => {
        carregaResultado(response)
    }).catch(error => console.log(error))*/



 function carregaResultado(response) { // função para mostrar o resultado na tela
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = response
 }



