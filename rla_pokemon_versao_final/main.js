// JOGO POKÉMON NO TERMINAL - VERSÃO FINAL

// 1) DADOS (Benito)

let herois = ["Bulbasaur", "Charmander", "Squirtle"];
let viloes = ["Arbok", "Mewtwo"];
let tiposH = ["Planta", "Fogo", "Agua"];
let tiposV = ["Veneno", "Psiquico"];
let vidasMaxH = [120, 85, 100];
let vidasMaxV = [80, 150];
let ataquesH = [
  ["Investida", "Chicote de Vinha", "Folha Navalha"],
  ["Arranhao", "Brasas", "Lanca-Chamas"],
  ["Investida", "Pistola d'Agua", "Hidro Bomba"],
];
let ataquesV = [
  ["Mordida", "Acido"],
  ["Velocidade", "Confusao", "Psiquico"],
];
let danosH = [
  [10, 16, 24],
  [12, 20, 30],
  [10, 18, 28],
];
let danosV = [
  [14, 18],
  [15, 20, 28],
];
let acertosH = [
  [0.95, 1, 0.9],
  [1, 1, 0.8],
  [0.95, 1, 0.75],
];
let acertosV = [
  [1, 0.9],
  [1, 0.95, 0.85],
];

let VALOR_CURA = 30;
let CURAS_POR_BATALHA = 2;
let RECUPERACAO_ENTRE_BATALHAS = 30;

// Vida ATUAL
let vidaHeroi = 0;

// 2) MENUS (Benito)

function escolherPersonagem() {
  for (let i = 0; i < herois.length; i++) {
    console.log(`${i + 1} - ${herois[i]}`);
  }

  let escolha = Number(prompt(`Escolha o seu personagem: `));

  // isNaN() impede com que a condição para string seja válida
  while (escolha < 1 || escolha > 3 || isNaN(escolha)) {
    console.log("Herói não identificado, tente novamente: ");
    escolha = Number(prompt(`Escolha o seu personagem: `));
  }

  return escolha - 1;
}

function escolherAcao(i) {
  let qtd = ataquesH[i].length;

  for (let j = 0; j < qtd; j++) {
    console.log(`${j + 1} - ${ataquesH[i][j]}`);
  }

  console.log(`${qtd + 1} - Curar`);

  let golpe = Number(prompt("Escolha a sua ação: "));

  while (golpe < 1 || golpe > qtd + 1 || isNaN(golpe)) {
    console.log("Ação não encontrada, tente novamente: ");
    golpe = Number(prompt("Escolha a sua ação: "));
  }

  return golpe - 1;
}

// i = heroi, fase = vilão (0 = Arbok, 1 = Mewtwo)
// vidaHeroi e vidaVilao = vida ATUAL, que veio do combate
// MUDANÇA: ganhou o 5º parâmetro vidaMaxVilao. Se o NPC aumentar a vida
// do vilão (ex.: 104), o status mostra 104 / 104 e não 104 / 80.
function mostrarStatus(i, fase, vidaHeroi, vidaVilao, vidaMaxVilao) {
  console.log(`${herois[i]}: ${vidaHeroi} / ${vidasMaxH[i]}`);
  console.log(`${viloes[fase]}: ${vidaVilao} / ${vidaMaxVilao}`);
}

// Mostra os ataques do herói escolhido (era o "for de teste" do dados.js)
function mostrarAtaquesHeroi(i) {
  console.log(`Ataques de ${herois[i]}:`);
  for (let j = 0; j < ataquesH[i].length; j++) {
    console.log(
      `  ${ataquesH[i][j]} - Dano: ${danosH[i][j]} - Precisão: ${acertosH[i][j] * 100}%`,
    );
  }
}

function mostrarAbertura() {
  console.log(`
                                  ,'\\
    _.----.        ____         ,'  _\\   ___    ___     ____
_,-'       '.     |    |  /'.   \\,-'    |   \\  /   |   |    \\  |'.
\\      __    \\    '-.  | /   '.  ___    |    \\/    |   '-.   \\ |  |
 \\.    \\ \\   |  __  |  |/    ,','_  '.  |          | __  |    \\|  |
   \\    \\/   /,' _'.|      ,' / / / /   |          ,' _'.|     |  |
    \\     ,-'/  /   \\    ,'   | \\/ / ,'.|         /  /   \\  |     |
     \\    \\ |   \\_/  |   '-.  \\    ''  /|  |    ||   \\_/  | |\\    |
      \\    \\ \\      /       '-.'.___,-' |  |\\  /| \\      /  | |   |
       \\    \\ '.__,'|  |'-._    '|      |__| \\/ |  '.__,'|  | |   |
        \\_.-'       |__|    '-._ |              '-.|     '-.| |   |
                                ''                            '-._|


                   BEM-VINDO AO UNIVERSO POKEMON!
        Você tem apenas uma missão, derrotar esses caras maus!

        Regra 1: Escolha seu Pokemon com sabedoria.
        Regra 2: Respeite quem faz parte da sua jornada.
        Regra 3: A cura gasta uma ação, use-a com sabedoria.
        Regra 4: Vença o primeiro vilão para enfrentar o chefão final!

                                `);
}

// ==========================================================
// 3) COMBATE (Gabriel)
// Só conta e sorteio: nenhuma destas funções usa prompt/console.log
// ==========================================================

// Escolhe o ataque da máquina. Recebe a lista de ataques do inimigo
// e devolve o ÍNDICE sorteado (0 até length - 1).
function sortearAtaque(ataques) {
  let sorteio = Math.random();
  let indice = Math.floor(sorteio * ataques.length);
  return indice;
}

// Fogo > Planta > Agua > Fogo  ->  dano x 1.5
// Qualquer outra combinação      ->  dano x 1
function vantagemDeTipo(tipoAtacante, tipoDefensor) {
  if (tipoAtacante == "Fogo" && tipoDefensor == "Planta") {
    return 1.5;
  }
  if (tipoAtacante == "Planta" && tipoDefensor == "Agua") {
    return 1.5;
  }
  if (tipoAtacante == "Agua" && tipoDefensor == "Fogo") {
    return 1.5;
  }
  return 1;
}

// Decide se o ataque acertou. Devolve o dano final (0 se errou).
function calcularDano(danoBase, acerto, tipoAtacante, tipoDefensor) {
  let sorteio = Math.random();

  if (sorteio >= acerto) {
    return 0;
  }

  let multiplicador = vantagemDeTipo(tipoAtacante, tipoDefensor);
  let dano = Math.round(danoBase * multiplicador);

  return dano;
}

// Tira o dano da vida e garante que a vida nunca fica negativa.
function aplicarDano(vidaAtual, dano) {
  let novaVida = vidaAtual - dano;

  if (novaVida < 0) {
    novaVida = 0;
  }

  return novaVida;
}

// Recupera vida, mas nunca passa da vida máxima.
function curar(vidaAtual, vidaMax, valorCura) {
  let novaVida = vidaAtual + valorCura;

  if (novaVida > vidaMax) {
    novaVida = vidaMax;
  }

  return novaVida;
}

// Define a vida com que o inimigo ENTRA na batalha.
// Tratou bem -> vida normal. Tratou mal -> vida + 30%.
function calcularVidaInimigo(vidaBase, tratouBem) {
  if (tratouBem == true) {
    return vidaBase;
  }

  let vidaAumentada = Math.round(vidaBase * 1.3);
  return vidaAumentada;
}

// ==========================================================
// 4) NPC (textos do fluxo.js)
// fase 0 = Benito (antes do vilão) | fase 1 = Gabriel (antes do boss)
//
// Devolve o número da resposta escolhida (já validado):
//   1 = aceitou com respeito  -> vida normal do inimigo
//   2 = aceitou com arrogância -> vida +30% (calcularVidaInimigo)
//   3 = recusou o desafio      -> a jornada acaba
// ==========================================================

function encontrarNPC(fase) {
  if (fase == 0) {
    console.log(`
    Benito (Vendedor de frutas da cidade): Fala, novo mestre Pokémon! Tenho uma missão para você. Dizem por aí que tem um vilão em uma caverna expulsando os Pokémon. Quer ir atrás desse desafio? Acha que consegue salvar os Pokémon?
    `);

    console.log(`RESPONDA AO BENITO:
   RESPOSTA 1 -> Sim, vou atrás desse vilão para ajudar os Pokémon!
   RESPOSTA 2 -> Sim, vou atrás desse vilão e provar que ninguém é melhor que eu.
   RESPOSTA 3 -> Não, não me sinto preparado para esse desafio.
   `);
  } else {
    console.log(`
    Gabriel (Forasteiro perdido na floresta): SOCORRO! Consegue me ajudar? Tem um Pokémon muito forte naquela caverna. Ele está machucando os Pokémon. Consegue derrotá-lo?
    `);

    console.log(`RESPONDA AO GABRIEL:
   RESPOSTA 1 -> Sim, eu vim derrotar esse vilão e ajudar os Pokémon.
   RESPOSTA 2 -> Sim, vim derrotar esse Pokémon e mostrar que sou o melhor.
   RESPOSTA 3 -> Não, não me sinto preparado para esse desafio.
   `);
  }

  let resposta = Number(prompt("VAMOS ACEITAR ESSE DESAFIO ? "));

  // resposta inválida (7, "abc") não conta como bem nem mal: pergunta de novo
  while (resposta < 1 || resposta > 3 || isNaN(resposta)) {
    console.log("Opção inválida, tente novamente.");
    resposta = Number(prompt("VAMOS ACEITAR ESSE DESAFIO ? "));
  }

  switch (resposta) {
    case 1:
      if (fase == 0) {
        console.log(`
            Benito (Vendedor de frutas da cidade): Esse é o espírito da coisa! Pois vamos para as instruções: você deve ir pela floresta, lá é perigoso, talvez encontre Pokémon malignos, mas eu confio em você!
            `);
      } else {
        console.log(
          "Gabriel (Forasteiro perdido na floresta): Muito obrigado! Eu confio em você. Entre lá e mostre para ele quem manda!",
        );
      }
      break;
    case 2:
      if (fase == 0) {
        console.log(`
            Benito (Vendedor de frutas da cidade): Pois vamos para as instruções: você deve ir pela floresta, lá é perigoso, talvez encontre Pokémon malignos. Aí é que vamos ver se você é bom mesmo!
        `);
      } else {
        console.log(
          "Gabriel (Forasteiro perdido na floresta): Pois entre lá, aí vamos ver se você é bom mesmo!",
        );
      }
      break;
    case 3:
      if (fase == 0) {
        console.log(
          "Benito (Vendedor de frutas da cidade): Eu entendo. Até os grandes mestres Pokémon têm medo. Não se preocupe!",
        );
      } else {
        console.log(
          "Gabriel (Forasteiro perdido na floresta): Pois vamos fugir antes que ele venha atrás de nós!",
        );
      }
      break;
  }

  return resposta;
}

// ==========================================================
// 5) BATALHA
// Recebe o herói, a fase e a vida com que o vilão ENTRA na luta.
// Usa e atualiza a variável global vidaHeroi.
// Devolve true se o jogador venceu, false se perdeu.
// ==========================================================

function batalhar(heroi, fase, vidaInicialVilao) {
  let vidaVilao = vidaInicialVilao;
  let vidaMaxVilao = vidaInicialVilao;
  let curasRestantes = CURAS_POR_BATALHA;
  let turno = 1;
  let qtdAtaques = ataquesH[heroi].length;

  console.log(`
==============================
 BATALHA: ${herois[heroi]} VS ${viloes[fase]}
==============================`);

  // A batalha continua enquanto OS DOIS estão vivos
  while (vidaHeroi > 0 && vidaVilao > 0) {
    console.log(`
--- Turno ${turno} ---`);
    mostrarStatus(heroi, fase, vidaHeroi, vidaVilao, vidaMaxVilao);
    console.log(`Curas restantes: ${curasRestantes}`);

    // ---------- turno do jogador ----------
    let acao = escolherAcao(heroi);

    // Sem curas: avisa e pergunta de novo (não gasta o turno)
    while (acao == qtdAtaques && curasRestantes == 0) {
      console.log("Você não tem mais curas nesta batalha! Escolha outra ação.");
      acao = escolherAcao(heroi);
    }

    if (acao == qtdAtaques) {
      // Curar
      vidaHeroi = curar(vidaHeroi, vidasMaxH[heroi], VALOR_CURA);
      curasRestantes = curasRestantes - 1;
      console.log(
        `${herois[heroi]} se curou! Vida: ${vidaHeroi} / ${vidasMaxH[heroi]}`,
      );
    } else {
      // Atacar
      let dano = calcularDano(
        danosH[heroi][acao],
        acertosH[heroi][acao],
        tiposH[heroi],
        tiposV[fase],
      );

      if (dano == 0) {
        console.log(
          `${herois[heroi]} usou ${ataquesH[heroi][acao]}, mas ERROU!`,
        );
      } else {
        vidaVilao = aplicarDano(vidaVilao, dano);
        console.log(
          `${herois[heroi]} usou ${ataquesH[heroi][acao]} e causou ${dano} de dano!`,
        );
        if (vantagemDeTipo(tiposH[heroi], tiposV[fase]) == 1.5) {
          console.log("É super efetivo!");
        }
      }
    }

    // ---------- turno do inimigo ----------
    // Só ataca se ainda estiver vivo
    if (vidaVilao > 0) {
      let k = sortearAtaque(ataquesV[fase]);
      let danoV = calcularDano(
        danosV[fase][k],
        acertosV[fase][k],
        tiposV[fase],
        tiposH[heroi],
      );

      if (danoV == 0) {
        console.log(`${viloes[fase]} usou ${ataquesV[fase][k]}, mas ERROU!`);
      } else {
        vidaHeroi = aplicarDano(vidaHeroi, danoV);
        console.log(
          `${viloes[fase]} usou ${ataquesV[fase][k]} e causou ${danoV} de dano!`,
        );
      }
    }

    turno = turno + 1;
  }

  // Fora do laço: descobre quem venceu
  if (vidaHeroi > 0) {
    console.log(`\n${viloes[fase]} foi derrotado!`);
    return true;
  } else {
    console.log(`\n${herois[heroi]} desmaiou...`);
    return false;
  }
}

// ==========================================================
// 6) JOGO COMPLETO (uma partida, do início ao fim)
// ==========================================================

function jogar() {
  console.log("VAMOS COMEÇAR SUA JORNADA!");
  console.log("ESCOLHA SEU PARCEIRO NA SUA JORNADA");

  let heroi = escolherPersonagem();
  console.log(`Você escolheu: ${herois[heroi]}`);
  mostrarAtaquesHeroi(heroi);

  // Vida cheia no começo de cada partida (resolve o "Jogar de novo")
  vidaHeroi = vidasMaxH[heroi];

  // ---------- FASE 0: Benito + vilão (Arbok) ----------
  let resposta1 = encontrarNPC(0);

  if (resposta1 == 3) {
    console.log("\nVocê recusou o desafio. Sua jornada termina aqui...");
    return;
  }

  let tratouBem1 = false;
  if (resposta1 == 1) {
    tratouBem1 = true;
  }

  let vidaVilao1 = calcularVidaInimigo(vidasMaxV[0], tratouBem1);
  if (tratouBem1 == false) {
    console.log(`${viloes[0]} parece mais forte... (vida ${vidaVilao1})`);
  }

  let venceuVilao = batalhar(heroi, 0, vidaVilao1);

  if (venceuVilao == false) {
    console.log("\n=== FIM DE JOGO: você foi derrotado pelo vilão. ===");
    return;
  }

  // Venceu o vilão: recupera um pouco de vida e segue
  vidaHeroi = curar(vidaHeroi, vidasMaxH[heroi], RECUPERACAO_ENTRE_BATALHAS);
  console.log(
    `\nVocê descansou e recuperou vida: ${vidaHeroi} / ${vidasMaxH[heroi]}`,
  );

  // ---------- FASE 1: Gabriel + boss (Mewtwo) ----------
  let resposta2 = encontrarNPC(1);

  if (resposta2 == 3) {
    console.log("\nVocês fugiram da caverna. O chefão continua solto...");
    return;
  }

  let tratouBem2 = false;
  if (resposta2 == 1) {
    tratouBem2 = true;
  }

  let vidaVilao2 = calcularVidaInimigo(vidasMaxV[1], tratouBem2);
  if (tratouBem2 == false) {
    console.log(`${viloes[1]} parece mais forte... (vida ${vidaVilao2})`);
  }

  let venceuBoss = batalhar(heroi, 1, vidaVilao2);

  if (venceuBoss == false) {
    console.log("\n=== FIM DE JOGO: o chefão foi forte demais. ===");
    return;
  }

  console.log(`
=========================================
   PARABÉNS! VOCÊ DERROTOU ${viloes[1].toUpperCase()}!
   Os Pokémon da caverna estão livres graças a você.
=========================================`);
}

// ==========================================================
// 7) INÍCIO DO PROGRAMA
// ==========================================================

mostrarAbertura();

let decisao = prompt("Deseja continuar ? ");

if (decisao == "Sim" || decisao == "sim" || decisao == "SIM") {
  let jogarDeNovo = true;

  while (jogarDeNovo == true) {
    jogar();

    let outra = prompt("Jogar de novo? (sim/nao) ");
    if (outra == "Sim" || outra == "sim" || outra == "SIM") {
      jogarDeNovo = true;
    } else {
      jogarDeNovo = false;
    }
  }

  console.log("OBRIGADO POR JOGAR! ATÉ A PRÓXIMA JORNADA POKÉMON!");
} else {
  console.log("DEPOIS VOCÊ CONTINUA COM SUA JORNADA POKÉMON!");
}
