const pessoa = {
    nome: `Rebeca`,
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave} : ${valor}`)
})

Object.defineProperty(pessoa, `DataNascimento`, {
    enumerable: true,
    writetable: false,
    value: `25/10/1998`
})

console.log(pessoa.DataNascimento)
console.log(Object.keys(pessoa))

// Object.assign 

const dest = { a: 1 }
const o1 = { b: 1 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2)
console.log(obj)