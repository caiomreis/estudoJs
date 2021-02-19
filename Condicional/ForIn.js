const notas = [3.4, 6.7, 4.5, 2.4, 7.8]

for (i in notas) {
    console.log(i, notas[i])
}

const pessoas = {
    nome: 'ana',
    sobrenome: 'Caludia',
    idade: 25,
    peso: 122
}

for (let atributo in pessoas) {
    console.log(`${atributo} = ${pessoas[atributo]}`)
}