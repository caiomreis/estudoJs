class lancamentos {
    constructor(nome, valor) {
        this.nome = nome,
            this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes,
            this.ano = ano,
            this.lancamento = []
    }
    addLancamentos(...lancamento) {
        lancamento.forEach(l => this.lancamento.push(l))
    }

    sumario() {
        let valorConsolidade = 0
        this.lancamento.forEach(l => { valorConsolidade += l.valor })
        return valorConsolidade
    }
}

const salario = new lancamentos(`Salario`, 45000)
const contaLuz = new lancamentos(`Luz`, -200)
const contas = new CicloFinanceiro(12, 2018)

contas.addLancamentos(salario, contaLuz)
console.log(contas.sumario())