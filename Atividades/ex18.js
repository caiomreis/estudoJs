function intervalo(numero) {
    switch (numero) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
            return "numero dentro do intervalo"
        default:
            return "numero fora do intervalo"
    }
}

console.log(intervalo(13))