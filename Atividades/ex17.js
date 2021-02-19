function aumento(salario, plano) {
    switch (plano) {
        case "a":
            return salario = salario + (salario * 10 / 100)
        case "b":
            return salario = salario + (salario * 15 / 100)
        case "c":
            return salario = salario + (salario * 20 / 100)
        default:
            return "voce nao se enquadra em nenhum dos nossos planos"
    }
}

console.log(aumento(1000, "a"))
console.log(aumento(5600, "b"))
console.log(aumento(34460, "c"))
console.log(aumento(34460, "d"))