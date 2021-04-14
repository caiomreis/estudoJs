function maiorMenor(numero) {
    vetores = []
    let maior
    let menor
    for (let i = 0; i < numero; i++) {
        vetores.push(i)
        if (maior === undefined && menor === undefined) {
            maior = vetores[i]
            menor = vetores[i]
        } else {
            if (vetores[i] > maior) {
                maior = vetores[i]
            }
            if (vetores[i] < menor) {
                menor = vetores[i]
            }
        }
    }
    console.log(`esse e o menor valor dentro do array ${menor} e esse e o maior ${maior}`)
}

maiorMenor(200)