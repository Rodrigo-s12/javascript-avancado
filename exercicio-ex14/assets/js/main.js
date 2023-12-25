const elementos = [
    {tag: 'p', texto: 'rodrigo lindo'},
    {tag: 'div', texto: 'frase 2'},
    {tag: 'section', texto: 'frase 3'},
    {tag: 'footer', texto: 'frase 4'},
]

const container = document.querySelector('.container') // ligandoo js com html
const div = document.createElement('div') // criei uma div

for (let i = 0; i < elementos.length; i++) {
    let {tag, texto} = elementos[i] // peguei a tag e o texto, por meio de desestruração
    let tagCria = document.createElement(tag) // criei as tag
    let textoCria = document.createTextNode(texto) // criei os texto

    tagCria.appendChild(textoCria) // joguei o texto dentro das tag
    div.appendChild(tagCria) // coloquei a tag e o texto dentro da div

}
container.appendChild(div) // coloquei a div dentro do container, que no caso e a section