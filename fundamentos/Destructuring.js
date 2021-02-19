const pessoa = {
    nome: `Caio`,
    idade: 21,
    endereco: {
        Logradouro: `AV. Dom Joao VI`,
        numero: 1000
    }
}

const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade: i } = pessoa

console.log(n, i)

const { sobrenome, bemHumorada } = pessoa
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep } } = pessoa

console.log(logradouro, numero, cep)