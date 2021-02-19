function Pessoa(nome) {

    this.nome = nome
    this.falar = function() {
        console.log(`meu nome e ${this.nome}`);
    }
}
const p1 = new Pessoa(`joao`);
p1.falar();

function gente(nome) {
    this.nome = nome
}
const p2 = new gente(`Caio`)
gente.prototype.falar = function() {
    console.log(`meu nome e ${this.nome}`);
}

p2.falar()