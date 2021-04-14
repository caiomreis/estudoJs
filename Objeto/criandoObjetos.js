// Forma Literal

const obj1 = {}
console.log(obj1)

// Objecr em JS 

console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// Funcoes Construtoras
function Produto(nome, preco, desc) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto(`Caneta`, 7.99, 0.15)
const p2 = new Produto(`Notebook`, 342.44, 0.15)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// Funcao Factory 

function criarFuncionario(nome, salario, faltas) {
    return {
        nome,
        salario,
        faltas,
        getSalario() {
            return (salario / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario(`Micaele`, 4444, 4)
const f2 = criarFuncionario(`Pedro`, 1800, 2)
console.log(f1.getSalario(), f2.getSalario())

// Object.create

const filha = Object.create(null)
filha.nome = `Ana`
console.log(filha)

// Uma funcao famosa que retorna objeto...
const fromJSON = JSON.parse(`{"info": "Oi, sou um JSON"}`)
console.log(fromJSON.info)