function dez(numero) {
    let numeros = []
    let numeros2 = []
    for (let i = 0; i < numero; i++) {
        if (i > 10 && i < 20) {
            numeros.push(i)
        } else {
            numeros2.push(i)
        }
    }
    console.log(`${numeros.length} estao dentro do intevalo de dez e ${numeros2.length} nao estao`)
}

dez(100)