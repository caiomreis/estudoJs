const fs = require(`fs`)

const produto = {
    nome: "Celular",
    preco: 1222.33,
    marca: "Iphone"
}

fs.writeFile(__dirname + `/arquivoGerado.json`, JSON.stringify(produto), err => {
    console.log(err || `Arquivo Salvo!`)
})