// ja vimos
// object.keys() = retorna as chaves do objeto
// object.freeze() = congela o objeto
// object.defineProperties() = define varias propriedades
// object.defineProperty() = define uma propriedade
// object.entries() = um array com os valores e o nomes das chaves
// objext.getOwnPropertyDescription(chave, 'propriedade) = vai retornar a descrição de property 
// spred =  espalha um valor do objeto dentro de outro

// copiando propriedades de um objeto pra outro
const produto = {nome: 'camisa', preco: 1.8}
const caneca = {...produto, material: 'porcelana'} // os dois esntao apontando pro mesmo lugar na memoria, usando sprad eu copiei o objeto de cima e adcionei mais uma chave(material)
//const caneca = Object.assign({}, produto, { material: 'porcelana'}), pode ser usado esse metodo, funciona igual o sprad
caneca.nome = 'outro nome'
caneca.preco = 2.5

console.log(produto)
console.log(caneca)
console.log(Object.values(produto)) // aqui vai ler so os valores