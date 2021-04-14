Array.prototype.filter2 = function(callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            newArray.push(this[i])
        }

    }
    return newArray

}

const produtos = [
    { nome: `Notebook`, preco: 2499, fragil: true },
    { nome: `Ipad Pro`, preco: 4199, fragil: true },
    { nome: `Copo de Vidro`, preco: 12.49, fragil: true },
    { nome: `Copo de Plastico`, preco: 10.99, fragil: false }
]


const fragil = produtos => produtos.fragil;
const caro = produtos => produtos.preco >= 1000;

resultado = produtos.filter2(fragil).filter2(caro)
console.log(resultado)