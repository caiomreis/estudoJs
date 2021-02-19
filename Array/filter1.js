const produtos = [
    { nome: `Notebook`, preco: 2499, fragil: true },
    { nome: `Ipad Pro`, preco: 4199, fragil: true },
    { nome: `Copo de Vidro`, preco: 12.49, fragil: true },
    { nome: `Copo de Plastico`, preco: 10.99, fragil: false }
]

console.log(produtos.filter(function(p) {
    return false
}))

let resultado = produtos.filter(function(p) {
    return p
})
const fragil = p => p.fragil;
const caro = p => p.preco >= 1000;

resultado = produtos.filter(fragil).filter(caro)
console.log(resultado)