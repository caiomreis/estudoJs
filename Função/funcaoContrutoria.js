function Carro(velocidadeMaxia = 200, delta = 5) {
    //a
    let velocidadeAtual = 200

    // metodo publico 

    this.acelerar = function() {
            if (velocidadeAtual + delta <= velocidadeMaxia) {
                velocidadeAtual += delta
            } else {
                velocidadeMaxia = velocidadeMaxia
            }
        }
        //metodo publico
    this.getVelocidadeAtual = function() {
        return velocidadeAtual
    }
}

const uno = new Carro
uno.acelerar()

console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())