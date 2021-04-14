const alunos = [
    { nome: `Jao`, nota: 7.4, bolsista: false },
    { nome: `Marta`, nota: 8.6, bolsista: true },
    { nome: `Caio`, nota: 9.8, bolsista: true },
    { nome: `Joana`, nota: 9.2, bolsista: false }
]

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
}, 10)

console.log(resultado)