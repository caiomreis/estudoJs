let pontuacao = "30, 40, 20, 4, 51, 25, 42, 38, 56, 0"


function avaliaPontos(pontuacao) {
    let pontuacoes = pontuacao.split(", ")
    let qtdQuebraDeRecords = 0
    let piorJogo = 1
    let maiorPontuacao = pontuacoes[0]
    let menorPontuacao = pontuacoes[0]

    for (i = 0; i < pontuacoes.length; i++) {
        if (maiorPontuacao > pontuacoes[i]) {
            maiorPontuacao = pontuacoes[i]
            qtdQuebraDeRecords++
        } else if (pontuacoes[i] < menorPontuacao) {
            menorPontuacao = pontuacoes[i]
            piorJogo = i + 1;
        }

    }
    return [qtdQuebraDeRecords, piorJogo]
}

console.log(avaliaPontos)