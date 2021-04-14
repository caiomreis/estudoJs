const carrinho = [
    '{"nome": "Borracha", "preco": 41.22}',
    '{"nome": "Caderno", "preco": 4.22}',
    '{"nome": "Lapis FaberCastel", "preco": 421.22}',
    '{"nome": "Leite", "preco": 41}',

]

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco


const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)