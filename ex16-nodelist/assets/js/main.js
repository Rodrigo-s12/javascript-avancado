const paragrafos = document.querySelector('.paragrafos') // ligando o js com a div
const ps = document.querySelectorAll('p') // aqui eu to pegando todos os paragrafos, se comporta similar a um array

const estiloBody = getComputedStyle(document.body) // aqui to pegando tudo do body do navegador
const backgroundColorBody = estiloBody.backgroundColor // eu to pegando a cor do body

for(let p of ps) {
    p.style.backgroundColor = backgroundColorBody // coloquei a cor de fundo dos paragrafos igual a do body
    p.style.color = 'white' // cor das letras branca
    p.style.padding = '10px'
    p.style.borderRadius = '10px'

}