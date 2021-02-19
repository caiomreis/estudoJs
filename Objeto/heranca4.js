function MeuObjeto() {}
console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto

console.log(obj1.__proto__ === MeuObjeto.prototype)
console.log(obj1.__proto__ == obj2.__proto__)

MeuObjeto.prototype.nome = `Caio`

MeuObjeto.prototype.falar = function() {
    console.log(`Boa noite! Meu nome e ${this.nome}!`)
}

obj1.falar()

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype
obj3.nome = `Maria`
obj3.falar()