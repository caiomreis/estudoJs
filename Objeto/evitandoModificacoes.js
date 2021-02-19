// Object.preventExtensions

const produto = Object.preventExtensions({
    nome: `Qualquer`,
    preco: 2,
    tag: `promocao`
})

produto.nome = `Borracha`
produto.descricao = `Essa borracha e legal`
delete produto.tag

console.log(produto)