function zeroAesquerda(num) {
    return num >= 10 ? num : `0${num}` // se num for menor que ta vai adicionar o 0 se não for nao vai fazer nada
}

function formataData(data){
    const dia = zeroAesquerda(data.getDate())
    const mes = zeroAesquerda(data.getMonth() + 1)
    const ano = zeroAesquerda(data.getFullYear())
    const hora = zeroAesquerda(data.getHours())
    const min = zeroAesquerda(data.getMinutes())
    const seg = zeroAesquerda(data.getSeconds())

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`

}

const data = new Date() //  data atual
const dataBrasil = formataData(data)
console.log(data)