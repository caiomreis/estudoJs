function media(valores) {
    let soma = 0
    for (let i = 0; i < valores.length; i++) {
        soma += valores[i]
    }

    return soma / valores.length;

}

valores = [10, 20, 10, 20, 10, 20, 10, 20, 10, 20]

console.log(media(valores))