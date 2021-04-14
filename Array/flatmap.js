const escola = [{
    nome: "Turma 1",
    alunos: [{
        nome: `Caio`,
        nota: 10
    }, {
        nome: "Bia",
        nota: 9.2
    }]
}, {
    nome: "Turma 2",
    alunos: [{
        nome: `Marcela`,
        nota: 10
    }, {
        nome: "Marcos",
        nota: 9.2
    }]
}]

const getNotaDoAluno = aluno => aluno.nota
const getNotaDasTurmas = turma => turma.alunos.map(getNotaDoAluno)
const notas1 = escola.map(getNotaDasTurmas)


console.log(notas1)

Array.prototype.flatmap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatmap(getNotaDasTurmas)
console.log(notas2)