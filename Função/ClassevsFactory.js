class Pessoa {
    constructor(nome) {
        this.nome = nome
    }
    falar() {
        console.log(`meu nome e ${this.nome}`);
    }
}
const p1 = new Pessoa(`joao`);
p1.falar();

const criarPessoas = nome => {
    return {
        falar: () => console.log(`meu nome e ${nome}`)
    }
}
const p2 = criarPessoas(`joao`)

p2.falar();