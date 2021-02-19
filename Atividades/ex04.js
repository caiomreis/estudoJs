function div(divisor, dividendo) {
    resultadoDivisao = Math.floor(divisor / dividendo);
    resultadoResto = divisor % dividendo;

    console.log(`Esse e o resultado da divisao ${resultadoDivisao} e esse e o resto ${resultadoResto}`)
}

div(11, 2)