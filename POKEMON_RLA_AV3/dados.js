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
 
// i = pokemon e j = ataque
for (let i = 0 ; i < herois.length ; i++) {
    console.log (herois[i])
    for (let j = 0 ; j < ataquesH[i].length ; j++) {
        console.log (`Ataque: ${ataquesH[i][j]} - Dano: ${danosH[i][j]} - Taxa de acerto: ${acertosH[i][j] * 100}%`)
    }
}

// i = viloes e j = ataque
for (let i = 0 ; i < viloes.length ; i++) {
    console.log (viloes[i])
    for (let j = 0 ; j < ataquesV[i].length ; j++) {
        console.log (`Ataque: ${ataquesV[i][j]} - Dano: ${danosV[i][j]} - Taxa de acerto: ${acertosV[i][j] * 100}%`)
    }
}