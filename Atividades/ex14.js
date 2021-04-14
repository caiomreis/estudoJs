function sacolao(fruta) {
    switch (fruta) {
        case `maçã`:
            return `Não vendemos esta fruta aqui`
            break
        case `kiwi`:
            return `Estamos com escassez de kiwis`
            break
        case `melancia`:
            return `Aqui está, são 3 reais o quilo`
            break
        default:
            return `ERRO`

    }
}
console.log(sacolao("maçã"));
console.log(sacolao("kiwi"));
console.log(sacolao("melancia"));
console.log(sacolao("maçã"));
console.log(sacolao("kiwi"));
console.log(sacolao("melancia"));
console.log(sacolao("maçã"));
console.log(sacolao("bala bala"));