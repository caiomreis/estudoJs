vetorInteiro = [1, 2, 3]
vetorString = ["a", "b", "c"]
vetorDouble = [1.3, 2.3, 3.3]

function juntos(...args) {
    resultado = []
    for (let i = 0; i < arguments.length; i++) {
        resultado = resultado.concat(arguments[i])
    }
    return resultado;
}


console.log(juntos(vetorInteiro, vetorString, vetorDouble))
console.log(juntos(vetorDouble, vetorString))