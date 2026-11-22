// ==========================================================
// ETAPA C - REGRAS DO COMBATE (Gabriel)
//
// Regra de ouro do grupo: aqui só tem CONTA e SORTEIO.
// Nenhuma função deste arquivo usa prompt() nem console.log().
// Elas recebem valores, calculam e devolvem o resultado com return.
//
// Depende de dados.js (herois, viloes, tiposH, tiposV, ataquesV...).
// No main.js final, este bloco vem DEPOIS dos dados.
// ==========================================================


// ----------------------------------------------------------
// sortearAtaque
// Escolhe o ataque da máquina.
//
// Recebe: a lista de ataques do inimigo (ex.: ataquesV[fase])
// Devolve: o ÍNDICE sorteado (0 até length - 1)
//
// Uso: let j = sortearAtaque(ataquesV[fase])
//      ataquesV[fase][j], danosV[fase][j] e acertosV[fase][j]
//      são o nome, o dano e a precisão do ataque sorteado.
//
// Por que não dá undefined: Math.random() vai de 0 até 0.9999...
// (nunca chega em 1). Multiplicando por length e cortando a parte
// decimal com Math.floor, o maior resultado é length - 1.
// ----------------------------------------------------------
function sortearAtaque(ataques) {
    let sorteio = Math.random()
    let indice = Math.floor(sorteio * ataques.length)
    return indice
}


// ----------------------------------------------------------
// vantagemDeTipo  (opcional do README, já incluída)
// Fogo > Planta > Agua > Fogo  ->  dano x 1.5
// Qualquer outra combinação      ->  dano x 1
//
// Recebe: tipo de quem ataca e tipo de quem defende
// Devolve: o multiplicador (1.5 ou 1)
//
// Atenção: os textos precisam ser IGUAIS aos de dados.js
// (ex.: "Agua" sem acento, como está no tiposH).
// ----------------------------------------------------------
function vantagemDeTipo(tipoAtacante, tipoDefensor) {
    if (tipoAtacante == "Fogo" && tipoDefensor == "Planta") {
        return 1.5
    }
    if (tipoAtacante == "Planta" && tipoDefensor == "Agua") {
        return 1.5
    }
    if (tipoAtacante == "Agua" && tipoDefensor == "Fogo") {
        return 1.5
    }
    return 1
}


// ----------------------------------------------------------
// calcularDano
// Decide se o ataque acertou e, se acertou, qual o dano final.
//
// Recebe:
//   danoBase      -> o dano do ataque (ex.: danosH[i][j])
//   acerto        -> a precisão em decimal (ex.: acertosH[i][j] = 0.9)
//   tipoAtacante  -> tipo de quem ataca (ex.: tiposH[i])
//   tipoDefensor  -> tipo de quem defende (ex.: tiposV[fase])
//
// Devolve: o dano causado. Se ERROU, devolve 0.
// (Todos os ataques do jogo têm dano maior que 0, então
//  "dano 0" só acontece quando o ataque erra.)
//
// Teste de acerto: Math.random() sorteia de 0 até quase 1.
// Com acerto 0.90, o sorteio acerta quando sai menor que 0.90,
// ou seja, em 90% das vezes. Com acerto 1, sempre acerta.
// ----------------------------------------------------------
function calcularDano(danoBase, acerto, tipoAtacante, tipoDefensor) {
    let sorteio = Math.random()

    if (sorteio >= acerto) {
        return 0
    }

    let multiplicador = vantagemDeTipo(tipoAtacante, tipoDefensor)
    let dano = Math.round(danoBase * multiplicador)

    return dano
}


// ----------------------------------------------------------
// aplicarDano
// Tira o dano da vida e garante que a vida nunca fica negativa.
//
// Recebe: vida atual e dano
// Devolve: a nova vida (mínimo 0)
//
// Exemplo: aplicarDano(5, 18) devolve 0, e não -13.
// ----------------------------------------------------------
function aplicarDano(vidaAtual, dano) {
    let novaVida = vidaAtual - dano

    if (novaVida < 0) {
        novaVida = 0
    }

    return novaVida
}


// ----------------------------------------------------------
// curar
// Regra da cura (o menu já tem a opção "Curar").
// Recupera vida, mas nunca passa da vida máxima.
//
// Recebe: vida atual, vida máxima e quanto cura
// Devolve: a nova vida (máximo = vida máxima)
//
// O valor da cura NÃO está no contrato do README: combinem com o
// Arthur (ex.: 30). Se quiserem limitar os usos, o contador de
// curas restantes fica no fluxo da batalha (Etapa D).
// ----------------------------------------------------------
function curar(vidaAtual, vidaMax, valorCura) {
    let novaVida = vidaAtual + valorCura

    if (novaVida > vidaMax) {
        novaVida = vidaMax
    }

    return novaVida
}


// ----------------------------------------------------------
// calcularVidaInimigo  (parte do NPC)
// Define a vida com que o inimigo ENTRA na batalha.
//
// Recebe:
//   vidaBase   -> a vida máxima original (ex.: vidasMaxV[fase])
//   tratouBem  -> true/false, que vem de encontrarNPC(fase)
//
// Devolve:
//   tratou bem -> a própria vida base
//   tratou mal -> vida base + 30%, arredondada para inteiro
//
// Não altera vidasMaxV: só devolve um número novo. Quem chama
// guarda numa variável separada (a vida ATUAL da batalha).
// Deve ser chamada UMA vez, antes de a batalha começar.
// ----------------------------------------------------------
function calcularVidaInimigo(vidaBase, tratouBem) {
    if (tratouBem == true) {
        return vidaBase
    }

    let vidaAumentada = Math.round(vidaBase * 1.3)
    return vidaAumentada
}
