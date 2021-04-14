function ImprimeSomar (a, b){ 

    console.log (a + b)
}

ImprimeSomar(2, 3)


function soma (a, b = 0) {
    return a + b
}
console.log (soma(2, 3))