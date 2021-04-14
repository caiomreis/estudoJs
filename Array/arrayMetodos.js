const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

pilotos.pop() // retira o ultimo elemento do array

pilotos.push(`Verstppen`)
console.log(pilotos)

pilotos.shift() // remove primeiro
console.log(pilotos)

pilotos.unshift(`Himilton`) // adiciona um valor no primeio array
console.log(pilotos)
    //adicionar
pilotos.splice(2, 0, 'bottas', 'Massa')
console.log(pilotos)

// remover
pilotos.splice(3, 1) // massa quebrou de novo kkkk
console.log(pilotos)

const alguns = pilotos.slice(2) // novo array a partir de um certo indice
console.log(alguns)

const alguns2 = pilotos.slice(1, 4) //vai ate um valor no array sem inserir o mesmo

console.log(alguns2)