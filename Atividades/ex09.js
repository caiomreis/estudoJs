function passarounao(nota) {
    let notaCorrigida = arredondar(nota)
    if (notaCorrigida <= 39) {
        console.log(`Sua nota nao atinge o suficiente par passar de ano, sua nota e ${notaCorrigida}`)
    } else {
        console.log(`Voce atingiu a pontuacao minuma para passar de ano, sua nota e ${notaCorrigida}`)
    }
}

function arredondar(nota) {
    if (nota % 5 > 2) {
        return nota + (5 - (nota % 5))
    } else {
        return nota
    }
}

passarounao(98)
passarounao(23)
passarounao(44)
passarounao(23)
passarounao(12)