function bisexto(ano) {
    if (ano % 400 == 0) {
        return true
    } else if (ano % 100 == 0) {
        return false
    } else if (ano % 4 == 0) {
        return true
    } else if (ano <= 0) {
        return false
    } else {
        return false
    }
}

console.log(bisexto(400))
console.log(bisexto(99))
console.log(bisexto(14))
console.log(bisexto(430))
console.log(bisexto(12))