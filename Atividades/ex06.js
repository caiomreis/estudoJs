 function jurosSimples(capitalinicial, taxaDeJuros, tempo) {
     resultado = capitalinicial * taxaDeJuros * tempo
     console.log(resultado.toFixed(2).toString().replace(".", ","))
 }

 function jurosComposto(capitalinicial, taxaDeJuros, tempo) {
     resultado = capitalinicial * (1 + taxaDeJuros) ** tempo
     console.log(resultado.toFixed(2).toString().replace(".", ","))
 }

 jurosSimples(100, 0.25, 6)
 jurosComposto(50000, 0.12, 2)