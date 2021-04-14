let valor 

console.log(valor)

valor = null // Ausencia de valor
console.log(valor)


let produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // Evite atribuir, deixe o proprio js fazer isso
console.log(!!produto.preco) // deleta o que tem em produto.preco

console.log(produto)

produto.preco = null // sem preco 

console.log(!!produto.log)
console.log(produto)