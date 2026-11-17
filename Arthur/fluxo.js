let herois = ["Bulbasaur" , "Charmander", "Squirtle"]
let viloes = ["Arbok" , "Mewtwo"]
let tiposH = ["Planta" , "Fogo" , "Agua"]
let tiposV = ["Veneno" , "Psiquico"]
let vidasMaxH = [120 , 85 , 100]
let vidasMaxV = [80 , 150]
let ataquesH = [["Investida" , "Chicote de Vinha" , "Folha Navalha"] , ["Arranhao" , "Brasas" , "Lanca-Chamas"] , ["Investida" , "Pistola d'Agua" , "Hidro Bomba"]]
let ataquesV = [["Mordida" , "Acido"] , ["Velocidade" , "Confusao" , "Psiquico"]]
let danosH = [[10 , 16 , 24] , [12 , 20 , 30] , [10 , 18 , 28]]
let danosV = [[14 , 18] , [15 , 20 , 28]]
let acertosH = [[0.95 , 1 , 0.90] , [1 , 1 , 0.80] , [0.95 , 1 , 0.75]]
let acertosV = [[1 , 0.90] , [1 , 0.95 , 0.85]]
 
function escolherPersonagem() {
    for (let i = 0; i < herois.length; i++) {
        console.log(`${i + 1} - ${herois[i]}`)
    }

    let escolha = Number(prompt(`Escolha o seu personagem: `))

    // poderia filtrar apenas pelos valores certos também, mas utilizamos o isNaN().
    while ((escolha < 1 || escolha > 3) || isNaN(escolha)) {
        console.log("Herói não identificado, tente novamente: ")
        escolha = Number(prompt(`Escolha o seu personagem: `))
    }

    return escolha - 1
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

                                `)
}
mostrarAbertura()

let decisão = prompt("Deseja continuar ? ")

if(decisão == "Sim"|| decisão == "sim"|| decisão == "SIM"){
  console.log("VAMOS COMEÇAR SUA JORNADA!")
  console.log("ESCOLHA SEU PARCEIRO NA SUA JORNADA")
let heroi = escolherPersonagem()
console.log(`Você escolheu: ${herois[heroi]}`)
} else{
    console.log("DEPOIS VOCÊ CONTINUA COM SUA JORNADA POKÉMON!")
} 


console.log(`
    Benito (Vendedor de frutas da cidade): Fala, novo mestre Pokémon! Tenho uma missão para você. Dizem por aí que tem um vilão em uma caverna expulsando os Pokémon. Quer ir atrás desse desafio? Acha que consegue salvar os Pokémon?
    `)

console.log(`RESPONDA AO BENITO:
   RESPOSTA 1 -> Sim, vou atrás desse vilão para ajudar os Pokémon!
   RESPOSTA 2 -> Sim, vou atrás desse vilão e provar que ninguém é melhor que eu.
   RESPOSTA 3 -> Não, não me sinto preparado para esse desafio.
   `)

let fase1 = Number(prompt("VAMOS ACEITAR ESSE DESAFIO ? "))
let dificuldade = 0 
let desafio1 = false

switch(fase1){
    case 1:
        dificuldade += 60
        desafio1 = true
        console.log(`
            Benito (Vendedor de frutas da cidade): Esse é o espírito da coisa! Pois vamos para as instruções: você deve ir pela floresta, lá é perigoso, talvez encontre Pokémon malignos, mas eu confio em você!
            `)

    break;
    case 2:
        dificuldade += 80
        desafio1 = true
        console.log(`
            Benito (Vendedor de frutas da cidade): Pois vamos para as instruções: você deve ir pela floresta, lá é perigoso, talvez encontre Pokémon malignos. Aí é que vamos ver se você é bom mesmo!
        `)
    break;        
    case 3:
        console.log("Benito (Vendedor de frutas da cidade): Eu entendo. Até os grandes mestres Pokémon têm medo. Não se preocupe!")
    break;
    default:
        console.log("Opção inválida, reinicie sua jornada.") 
}

let passouDaFase1 = false // tem que mudar para passar pra proxima fase

if(desafio1 = true){// aqui o gabriel começa a trajetoria do primeiro vilão. a batalha etc
// se ele ganhar fassa o passouDaFase1 ficar true para seguir com o jogo
}

if(passouDaFase1 == true){
console.log(`
    Gabriel (Forasteiro perdido na floresta): SOCORRO! Consegue me ajudar? Tem um Pokémon muito forte naquela caverna. Ele está machucando os Pokémon. Consegue derrotá-lo?
    `)

console.log(`RESPONDA AO GABRIEL:
   RESPOSTA 1 -> Sim, eu vim derrotar esse vilão e ajudar os Pokémon.
   RESPOSTA 2 -> Sim, vim derrotar esse Pokémon e mostrar que sou o melhor.
   RESPOSTA 3 -> Não, não me sinto preparado para esse desafio.
   `)
let fase2 = Number(prompt("VAMOS ACEITAR ESSE DESAFIO ? "))
let desafio2 = false
switch(fase2){
    case 1:
        desafio2 = true
       console.log("Gabriel (Forasteiro perdido na floresta): Muito obrigado! Eu confio em você. Entre lá e mostre para ele quem manda!")
    break;
    case 2:
        dificuldade += 20
        desafio2 = true
       console.log("Gabriel (Forasteiro perdido na floresta): Pois entre lá, aí vamos ver se você é bom mesmo!")
    break;        
    case 3:
        console.log("Gabriel (Forasteiro perdido na floresta): Pois vamos fugir antes que ele venha atrás de nós!")
    break;
    default:
        console.log("Opção inválida, reinicie sua jornada.")    
}
if(desafio2 = true){// aqui o gabriel começa a trajetoria do segundo vilão(boss). a batalha etc

}
}
// LEMBRA DO NGC DE DIFICULDADE QUE COLOQUEI AI 