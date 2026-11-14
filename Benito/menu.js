function escolherPersonagem() {
    for (let i = 0 ; i < herois.length ; i++) {
        console.log (`${i + 1} - ${herois[i]}`)
    }

    let escolha = Number (prompt (`Escolha o seu personagem: `))

    // poderia filtrar apenas pelos valores certos também, mas utilizamos o isNaN().
    while ((escolha < 1 || escolha > 3) || isNaN(escolha)) {
        console.log ("Herói não identificado, tente novamente: ")
        escolha = Number (prompt (`Escolha o seu personagem: `))
    }

    return escolha - 1
}
