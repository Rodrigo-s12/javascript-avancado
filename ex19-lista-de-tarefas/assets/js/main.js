const inputTarefa = document.querySelector('.input-tarefa')
const btnTarefa = document.querySelector('.btn-tarefa')
const tarefas = document.querySelector('.tarefas')

function criaLi() { // essa função e so pra criar o li
    const li = document.createElement('li')
    return li
}

function criaTarefa(textoInput) { // joguei o texto pra essa função ser exibido na tela
    const li = criaLi() // to pegando o li da função que foi criada
    li.innerText = textoInput // aqui eu to mostrando o texto na tela, que vai ficar dentro de li
    tarefas.appendChild(li) // to jogando li dentro de tarefas
    limpaInput() // função para limpar o label
    botaoApagar(li) // função para criar o botao apagar
    salvarTarefas() // função para salvar as tarefas
   
}

function botaoApagar(li) {
    li.innerText += ' ' // aqui to dando espaço do botao do texto 
    const botaoApagar = document.createElement('button') // criei um botao
    botaoApagar.innerText = 'Apagar' // aqui adicionei o nome apagar no botao
    botaoApagar.setAttribute('class', 'apagar') // to adicionando um atributo class com valor apagar
    botaoApagar.setAttribute('title', 'Apagar esta tarefa')
    li.appendChild(botaoApagar) // aqui adicionei o botao apagar dentro do li

}

function limpaInput() {
    inputTarefa.value = '' // aqui eu to limpando a caixa de texto
    inputTarefa.focus() // aqui eu to focando o cursor na caixa de texto
}

inputTarefa.addEventListener('keypress', function(e) { // eu to pegando o evento quando apertar uma tecla
    if(e.keyCode === 13) { // aqui eu to pegando a tecla enter, 13 e o keyCode ta tecla
        if(!inputTarefa.value) return // so vai adcionar quando tiver algum texto
        criaTarefa(inputTarefa.value) // se tiver algum valor, vai criar a tarefa com valor
    }
})

btnTarefa.addEventListener('click', function() { // peguei o evento de click no botao
    if(!inputTarefa.value) return // aqui e se nao tiver nada na caixa, não vai poder enviar dados

    criaTarefa(inputTarefa.value) // to mandando o texto pra essa função
})

document.addEventListener('click', function(e) { // criei um evento pra pegar o click do apagar
    const el = e.target; 
    console.log(el)
    if (el.classList.contains('apagar')) { // se o evento de click for o apagar
        el.parentElement.remove(); // eu vou apagar o pai dele, que no caso e o li que vai o texto
        salvarTarefas() // se eu apagar algum texto, ele tb vai apagar no banco de dados so localstorage
    } 
})

function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li') // pegando todos o li de tarefas
    const listaTarefas = [] // criei um array para pode  pegar os textos dos li

    for(let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText // to pegando o texto de dentro de tarefa
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim() // aqui eu to apagando o nome apagar que ta indo junto com as li, que no caso e o botao.trim e para remover qualquer espaço que tiver no texto
        listaTarefas.push(tarefaTexto) // eu to jogando o texto dentro do array
        
    }
    const tarefasJSON = JSON.stringify(listaTarefas) // to transformando o array em string
    localStorage.setItem('tarefas', tarefasJSON) // to salvando os dados no localStorage, so aceita string por isso foi trsnformado em string
    console.log(tarefasJSON)
}

function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas') // aqui vou pegar as tarefas salvas
    const listaDeTarefas = JSON.parse(tarefas) // to transformando em array denovo
    console.log(listaDeTarefas)
    for(let tarefa of listaDeTarefas) {
        criaTarefa(tarefa)
    }
}
adicionaTarefasSalvas() 