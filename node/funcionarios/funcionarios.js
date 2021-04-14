const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'

const axios = require('axios')

const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === `F`
const menorSalario = (menor, menorAtual) => {
    return menor.salario < menorAtual.salario ? menor : menorAtual
}

axios.get(url).then(resp => {
    const funcionarios = resp.data;
    //console.log(funcionarios)
    const menor = funcionarios
        .filter(chineses)
        .filter(mulheres)
        .reduce(menorSalario)

    console.log(menor)

})

/* axios.get(url).then(resp => {
    const funcionarios = resp.data;
    console.log(funcionarios)
}) */