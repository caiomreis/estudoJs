function DiaSemana(numero) {
    switch (numero) {
        case 1:
            return "Fim de semana"
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            return "Vai trabalhar sim"
        case 7:
            return "Final de Semana"
    }


}


console.log(DiaSemana(3));
console.log(DiaSemana(1));
console.log(DiaSemana(4));
console.log(DiaSemana(6));
console.log(DiaSemana(7));
console.log(DiaSemana(5));
console.log(DiaSemana(2));
console.log(DiaSemana('Pera'));