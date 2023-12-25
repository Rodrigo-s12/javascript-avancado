(function() { // aqui to criando uma função de execução imediata, para fugir do escopo global, posso usar tudo dentro dela
    const sobrenome = 'miranda'
    function criaNome(nome) {
        return nome + ' ' + sobrenome
    }

    function falaNome() {
       console.log(criaNome('luiz'))
    }
    falaNome()
})()