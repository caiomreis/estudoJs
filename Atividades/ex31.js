function inteiros(numero) {
    let intei = 0
    for (let i = 0; i < numero.length; i++) {
        if (numero[i] < 0) {
            intei++
        }
    }
    console.log(`essa e a quantidade de numeros menores de negativos ${intei}`)

}

numero = [-3, 2, -3, 4, -4, -3]

inteiros(numero)