//FLUXO INICIAL DE MENU

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

// i é o índice do herói (o mesmo que escolherPersonagem() devolve)
// a função devolve de 0 até qtd − 1 quando é ataque, e qtd quando é Curar
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
function mostrarStatus(i, fase, vidaHeroi, vidaVilao) {
  console.log(`${herois[i]}: ${vidaHeroi} / ${vidasMaxH[i]}`);
  console.log(`${viloes[fase]}: ${vidaVilao} / ${vidasMaxV[fase]}`);
}

// mostrarStatus(0, 0, 106, 60) -> teste de saída

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

//DADOS

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

// i = pokemon e j = ataque
for (let i = 0; i < herois.length; i++) {
  console.log(herois[i]);
  for (let j = 0; j < ataquesH[i].length; j++) {
    console.log(
      `Ataque: ${ataquesH[i][j]} - Dano: ${danosH[i][j]} - Taxa de acerto: ${acertosH[i][j] * 100}%`,
    );
  }
}

// i = viloes e j = ataque
for (let i = 0; i < viloes.length; i++) {
  console.log(viloes[i]);
  for (let j = 0; j < ataquesV[i].length; j++) {
    console.log(
      `Ataque: ${ataquesV[i][j]} - Dano: ${danosV[i][j]} - Taxa de acerto: ${acertosV[i][j] * 100}%`,
    );
  }
}

//COMBATE

// sortearAtaque
// Escolhe o ataque da máquina.

function sortearAtaque(ataques) {
  let sorteio = Math.random();
  let indice = Math.floor(sorteio * ataques.length);
  return indice;
}

// vantagemDeTipo  (opcional do README, já incluída)
// Fogo > Planta > Agua > Fogo  ->  dano x 1.5
// Qualquer outra combinação      ->  dano x 1function vantagemDeTipo(tipoAtacante, tipoDefensor)

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

// calcularDano

function calcularDano(danoBase, acerto, tipoAtacante, tipoDefensor) {
  let sorteio = Math.random();

  if (sorteio >= acerto) {
    return 0;
  }

  let multiplicador = vantagemDeTipo(tipoAtacante, tipoDefensor);
  let dano = Math.round(danoBase * multiplicador);

  return dano;
}

// aplicarDano
// Tira o dano da vida e garante que a vida nunca fica negativa.

function aplicarDano(vidaAtual, dano) {
  let novaVida = vidaAtual - dano;

  if (novaVida < 0) {
    novaVida = 0;
  }

  return novaVida;
}

// CURAR

function curar(vidaAtual, vidaMax, valorCura) {
  let novaVida = vidaAtual + valorCura;

  if (novaVida > vidaMax) {
    novaVida = vidaMax;
  }

  return novaVida;
}

// calcularVidaInimigo  (parte do NPC)
// Define a vida com que o inimigo ENTRA na batalha.

function calcularVidaInimigo(vidaBase, tratouBem) {
  if (tratouBem == true) {
    return vidaBase;
  }

  let vidaAumentada = Math.round(vidaBase * 1.3);
  return vidaAumentada;
}
