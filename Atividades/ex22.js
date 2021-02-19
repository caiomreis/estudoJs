function juros(mes, valor) {
    if (mes > 0 && mes < 13) {
        return (valor * ((1 + (5 / 100)) ** mes)).toFixed(2)
    } else {
        `Valor inserido e negativos`
    }

}

console.log(juros(1, 100))