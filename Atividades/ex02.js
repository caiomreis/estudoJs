function trinagulo(lado1, lado2, lado3) {
    if (lado1 + lado2 == lado3 * 2) {
        console.log(`Esse trinangulo e Equilátero`)
    } else if (lado1 == lado2 || lado2 == lado3 || lado1 == lado3) {
        console.log(`Esse trinagulo e Isósceles`)
    } else {
        console.log(`Esse trinagulo e Escaleno`)
    }

}

trinagulo(2, 1, 3)