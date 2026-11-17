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
  console.log("DEPOIS VOCÊ CONTINUA COM SUA JORNADA POKEMON!")
} 


console.log(`
    Benito (Vendendor de frutas da cidade): Fala novo mestre pokemon, tenho uma missão para vc, dizem por ai que tem um vilão em uma caverna expulsando os pokemons, quer ir atras desse desafio ? acha que consegue salvar os pokemons ?
    `)
console.log(`RESPONDA O BENITO: 
   RESPOSTA 1 -> Sim, vou atras desse vilão para ajudar os pokemons!
   RESPOSTA 2 -> Sim, vou atras desse vilão e provar que niguem é melhor que eu 
   RESPOSTA 3 -> Não, não me sinto preparado para esse desafio 
   `)

let fase1 = Number(prompt("VAMOS ACEITAR ESSE DESAFIO ? "))
let dificuldade = 0 
let desafio1 = false

switch(fase1){
    case 1:
        dificuldade += 60
        desafio1 = true
        console.log("Benito (Vendendor de frutas da cidade): Esse é o espirito da coisa, pois vamos para as instruções, você deve ir pela floresta, lá e perigoso tlvz encontre pokemons malignos, mas eu confio em você!");
    break;
    case 2:
        dificuldade += 80
        desafio1 = true
        console.log("Benito (Vendendor de frutas da cidade): pois vamos para as instruções, você deve ir pela floresta, lá e perigoso tlvz encontre pokemons malignos, ai que vamos ver se vc é bom msm ");
    break;        
    case 3:
        console.log("Benito (Vendendor de frutas da cidade ): Eu entendo até os grandes mestres pokemons tem medo não se preucupe!")
    break;
    default:
        console.log("Opção invalida, renicie sua jornada")    
}

let passouDaFase1 = false // tem que mudar para passar pra proxima fase

if(desafio1 = true){// aqui o gabriel começa a trajetoria do primeiro vilão. a batalha etc
// se ele ganhar fassa o passouDaFase1 ficar true para seguir com o jogo
}

if(passouDaFase1 == true){
console.log(`
    Gabriel(forasteiro perdido na floresta): SOCORRO! consegue me ajudar? tem um pokemon muitoo forte naquela caverna ele ta machucando os pokemnos, consegue derrotar ele ?
    `)
console.log(`RESPONDA O GABRIEL: 
   RESPOSTA 1 -> Sim, eu vim derrotar esse vilão e ajudar os pokemons
   RESPOSTA 2 -> Sim, vim derrotar esse pokemon e mostrar que sou o melhor 
   RESPOSTA 3 -> Não, não me sinto preparado para esse desafio 
   `)
let fase2 = Number(prompt("VAMOS ACEITAR ESSE DESAFIO ? "))
let desafio2 = false
switch(fase2){
    case 1:
        desafio2 = true
        console.log("Gabriel(forasteiro perdido na floresta): Muito obrigado eu confio em você, entra lá e mostra pra ele quem manda!");
    break;
    case 2:
        dificuldade += 20
        desafio2 = true
        console.log("Gabriel(forasteiro perdido na floresta): Pois entre lá ai vamos ver se vc é bom msm ");
    break;        
    case 3:
        console.log("Gabriel(forasteiro perdido na floresta): Pois vamos fugir antes que ele venha atras de nós!")
    break;
    default:
        console.log("Opção invalida, renicie sua jornada")    
}
if(desafio2 = true){// aqui o gabriel começa a trajetoria do segundo vilão(boss). a batalha etc

}
}
// LEMBRA DO NGC DE DIFICULDADE QUE COLOQUEI AI 