const alunos = [
    { nome: `Jao`, nota: 7.4, bolsista: false },
    { nome: `Marta`, nota: 8.6, bolsista: true },
    { nome: `Caio`, nota: 9.8, bolsista: true },
    { nome: `Joana`, nota: 9.2, bolsista: false }
]


// Desafio1: Todos os alunos sao bolsistas?
const alunoBolsa = (resultado, bolsista) => resultado && bolsista;
console.log(alunos.map(a => a.bolsista).reduce(alunoBolsa))

// Desafio2: Pelo menos um tem bolsa?
const algumBolsista = (resultado, bolsista) => resultado || bolsista;
console.log(alunos.map(a => a.bolsista).reduce(alunoBolsa))