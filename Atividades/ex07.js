function formula(a, b, c) {
    let resultados = []
    delta = (b ** 2) - 4 * 1 * (c)
    if (delta < 0) {
        return "Delta é negativo"
    }
    let xp = (-b + Math.sqrt(delta)) / (2 * a)
    let xn = (-b - Math.sqrt(delta)) / (2 * a)
    resultados.push(xn)
    resultados.push(xp)
    return resultados
}




console.log(formula(1, 12, -13))