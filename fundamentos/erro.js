function tratarErroELancar(erro) {
    //  throw new Error('ocorreu um erro mas ja estamos verificando')
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritando(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log('final')
    }
}

const obj = { name: 'Caio' }
imprimirNomeGritando(obj)

var a = 0

var qt = a

qt = 3

var qt = a
console.log(qt)
console.log(a)

let cem = 100

for (Mcem = 100; Mcem <= 115; Mcem++) {
    console.log(Mcem)
}