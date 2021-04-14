function num(numero) {
    console.log(`voce tem R$ ` + numero.toFixed(2).toString().replace(".", ","))
}

num(0.30000000000000004)