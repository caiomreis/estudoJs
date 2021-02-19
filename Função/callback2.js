const notas = [7.7, 6.4, 6.5, 4.3, 4.8, 3.4, 5.4, 2.7]
const v = notas.length
const nota = {
    soma() {
        for (let i = 0; i < v; i++) {
            console.log(`essa e a nota ${notas[i]} do aluno ${i}`)
        }
    }
}

nota.soma()

// sem callback
let notasBaixas = []
let notasBaixas2 = []
let notasBaixas3 = []
for (let i in notas) {
    if (notas[i] < 4) {
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

// com callback

notasBaixas2 = notas.filter(function(notas) {
    return notas < 5
})

console.log(notasBaixas2)

notasBaixas3 = notas.filter(nota => nota < 5)
console.log(notasBaixas3)