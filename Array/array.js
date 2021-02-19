let aprovados = ["Bia", "Carlos", "Ana"]

aprovados[9] = 'Caio'

console.log(aprovados)

aprovados.sort() // ordena os itens no array
console.log(aprovados)

delete aprovados[1]
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 0, `Elemento1`, `Elemento2`)
console.log(aprovados)