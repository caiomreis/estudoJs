function crescimento(altura1, taxa1, altura2, taxa2) {
    if (altura1 > altura2) {
        let ano1 = 0;
        while (altura1 > altura2) {

            altura2 = altura2 + taxa2
            altura1 = altura1 + taxa1
            ano1++

        }
        console.log(`A crianca 2 ficara mais alta em ${ano1} anos`)

    } else if (altura2 > altura1) {
        let ano2 = 0;
        while (altura2 > altura1) {

            altura1 = altura1 + taxa1
            altura2 = altura2 + taxa2

            ano2++

        }
        console.log(`A crianca 1 ficara mais alta em ${ano2} anos`)

    }
}

crescimento(1.56, 0.11, 1.40, 0.23)

crescimento(1.00, 0.21, 1.40, 0.11)