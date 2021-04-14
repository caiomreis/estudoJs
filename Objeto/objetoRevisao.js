// Coleção dinâmica de pares chave/valor

const produto = new Object

produto.nome = `Cadeira`
produto[`marca do produto`] = `Gamer`
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto[`marca do produto`]
console.log(produto)

const carro = {
    modelo: `A4`,
    valor: 123000,
    dono: {
        nome: `Caio`,
        idade: `21`,
        endereco: {
            logradouro: `Av. Dom joao VI`,
            numero: 183
        }
    },
    condutores: [{
        nome: `Caio`,
        idade: `21`
    }, {
        nome: `Ana`,
        idade: `22`
    }]

}


carro.dono.endereco.numero = 100000
console.log(carro)

delete carro.condutores
delete carro.dono.endereco
delete carro.valorpago

console.log(carro)
console.log(carro.condutores)