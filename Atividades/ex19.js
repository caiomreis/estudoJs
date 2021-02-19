function lanchonete(codico, quantidade, descricao, preco, resu) {
    switch (codico) {
        case 100:
            descricao = "Cachorro Quente "
            preco = 3.00
            resu = quantidade * preco
            return resu.toFixed(2).toString().replace(".", ",")

        case 200:
            descricao = "Hambúrguer Simples"
            preco = 4.00
            resu = quantidade * preco
            return resu.toFixed(2).toString().replace(".", ",")

        case 300:
            descricao = "Cheeseburguer"
            preco = 5.50
            resu = quantidade * preco
            return resu.toFixed(2).toString().replace(".", ",")

        case 400:
            descricao = "Bauru"
            preco = 7.50
            resu = quantidade * preco
            return resu.toFixed(2).toString().replace(".", ",")

        case 500:
            descricao = "Refrigerante"
            preco = 3.50
            resu = quantidade * preco
            return resu.toFixed(2).toString().replace(".", ",")

        case 600:
            descricao = "Suco"
            preco = 2.80
            resu = quantidade * preco
            return resu.toFixed(2).toString().replace(".", ",")

        default:
            return "esse produto naoe existe"
    }
}

console.log(lanchonete(100, 3))
console.log(lanchonete(200, 4))
console.log(lanchonete(300, 6))
console.log(lanchonete(400, 7))
console.log(lanchonete(500, 4))
console.log(lanchonete(600, 5))
console.log(lanchonete(300, 2))
console.log(lanchonete(1200, 4))