const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indece) {
    console.log(`${indece + 1}, ${nome}`)
}

fabricantes.forEach(imprimir)

fabricantes.forEach(fabricantes => console.log(fabricantes))