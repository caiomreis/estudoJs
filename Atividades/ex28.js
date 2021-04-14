function inteiros(numero) {
    if (numero > 0) {
        let par = []
        let impar = []
        for (let i = 0; i < numero; i++) {
            if (i % 2 == 0) {
                par.push(i)
            } else {
                impar.push(i)
            }
        }
        console.log(`${par.length} valores sao pares e ${impar.length} sao impares`)
    } else {
        return console.log("Nao e um numero inteiro")
    }
}

inteiros(49)