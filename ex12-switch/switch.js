const data = new Date()
let diaSemana = data.getDay()
let diaSemanaTexto;




switch (diaSemana) {  // e usado quando vc usa uma mesma variavel para fazer varias checagem.
case 0:
    diaSemanaTexto = 'Domingo'   
break
case 1:
    diaSemanaTexto = 'Segunda'
break
case 2:
    diaSemanaTexto = 'Terça'
break
case 3:
    diaSemanaTexto = 'Quarta'
break
case 4: 
    diaSemanaTexto = 'Quinta'
break
case 5:
    diaSemanaTexto = 'Sexta'
break
case 6: 
    diaSemanaTexto = 'Sábado'
break  
default:
    diaSemanaTexto = ''// como se fosse o else
break    
}
console.log(diaSemanaTexto)