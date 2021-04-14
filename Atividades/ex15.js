function CompraCarro(Modelo) {
    switch (Modelo) {
        case "hatch":
            return "Compra efetuada com sucesso"
        case "sedans":
        case "motocicletas":
        case "caminhonetes":
            return "Tem certeza que não prefere este modelo?"
        default:
            return "Não trabalhamos com este tipo de automóvel aqui"
    }


}


console.log(CompraCarro("hatch"));
console.log(CompraCarro("sedans"));
console.log(CompraCarro("sedans"));
console.log(CompraCarro("hatch"));
console.log(CompraCarro("hatch"));
console.log(CompraCarro("motocicletas"));
console.log(CompraCarro("motocicletas"));
console.log(CompraCarro("pera"));