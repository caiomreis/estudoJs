function getPreco(impostos = 0, moeda = `R$`) {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + impostos)}`
}
const produto = {
    nome: `Notebook`,
    preco: 4565,
    desc: 0.15,
    getPreco
}
global.preco = 20
global.desc = 0.1
console.log(getPreco())
console.log(produto.getPreco())

const carro = { preco: 50000, desc: 0.20 }

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.14, `$`))