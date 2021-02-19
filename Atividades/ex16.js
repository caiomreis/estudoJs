function calculadora(operador, a, b) {
    switch (operador) {
        case "+":
            return a + b
        case "-":
            return a - b
        case "*":
            return a * b
        case "/":
            return a / b
        default:
            return "nao temos essa opcao"
    }
}
console.log(calculadora("+", 2, 2))
console.log(calculadora("-", 32, 2))
console.log(calculadora("/", 12, 2))
console.log(calculadora("*", 22, 2))
console.log(calculadora("@", 22, 2))