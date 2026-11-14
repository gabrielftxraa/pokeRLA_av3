function escolherPersonagem() {
    for (let i = 0 ; i < herois.length ; i++) {
        console.log (`${i + 1} - ${herois[i]}`)
    }

    let escolha = Number (prompt (`Escolha o seu personagem: `))

    // isNaN() impede com que a condição para string seja válida
    while ((escolha < 1 || escolha > 3) || isNaN(escolha)) {
        console.log ("Herói não identificado, tente novamente: ")
        escolha = Number (prompt (`Escolha o seu personagem: `))
    }

    return escolha - 1
}

// i é o índice do herói (o mesmo que escolherPersonagem() devolve)
// a função devolve de 0 até qtd − 1 quando é ataque, e qtd quando é Curar
function escolherAcao(i) {

    let qtd = ataquesH[i].length

    for (let j = 0 ; j < qtd ; j++) {
        console.log (`${j + 1} - ${ataquesH[i][j]}`)
    }

    console.log (`${qtd + 1} - Curar`)
    
    let golpe = Number (prompt ("Escolha a sua ação: "))

    while ((golpe < 1 || golpe > (qtd + 1)) || isNaN(golpe)) {
        console.log ("Ação não encontrada, tente novamente: ")
        golpe = Number (prompt ("Escolha a sua ação: "))
    }

    return golpe - 1

}
