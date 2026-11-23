                                  ,'\
    _.----.        ____         ,'  _\   ___    ___     ____
_,-'       `.     |    |  /`.   \,-'    |   \  /   |   |    \  |`.
\      __    \    '-.  | /   `.  ___    |    \/    |   '-.   \ |  |
 \.    \ \   |  __  |  |/    ,','_  `.  |          | __  |    \|  |
   \    \/   /,' _`.|      ,' / / / /   |          ,' _`.|     |  |
    \     ,-'/  /   \    ,'   | \/ / ,`.|         /  /   \  |     |
     \    \ |   \_/  |   `-.  \    `'  /|  |    ||   \_/  | |\    |
      \    \ \      /       `-.`.___,-' |  |\  /| \      /  | |   |
       \    \ `.__,'|  |`-._    `|      |__| \/ |  `.__,'|  | |   |
        \_.-'       |__|    `-._ |              '-.|     '-.| |   |
                                `'                            '-._|

# Jogo Pokémon no Terminal (AV3 de RLA)

Jogo de batalha Pokémon por turnos, jogado no terminal e feito em JavaScript puro, para a disciplina **Raciocínio Lógico e Algorítmico** (Ciência da Computação, Unifor).

O jogador escolhe um entre 3 Pokémon (Bulbasaur, Charmander ou Squirtle) e enfrenta o vilão (Arbok) e depois o chefão (Mewtwo). Antes de cada luta, um NPC propõe o desafio: aceitar com respeito mantém a vida do inimigo normal, aceitar com arrogância deixa o inimigo 30% mais forte, e recusar encerra a jornada.

## Como rodar

1. Abra o [Programiz](https://www.programiz.com/javascript/online-compiler/).
2. Copie todo o conteúdo de `rla_pokemon_versao_final/main.js` e cole no editor.
3. Clique em **Run** e jogue pelo painel *Output*.

## Estrutura

| Pasta | Conteúdo |
|---|---|
| `rla_pokemon_versao_final/` | `main.js`: o jogo completo, com todas as partes juntas |
| `etapas/` | cada parte separada, do jeito que foi desenvolvida |

## Etapas, responsáveis e conceitos

| Etapa | Responsável | Funções principais | Conceitos aplicados |
|---|---|---|---|
| **Dados** (`dados.js`) | Benito | Arrays com nomes, tipos, vidas, ataques, danos e taxas de acerto | Arrays paralelos, arrays aninhados (`[i][j]`), `for` aninhado, `length` |
| **Menus** (`menu.js`) | Benito | `mostrarAbertura`, `escolherPersonagem`, `escolherAcao`, `mostrarStatus` | Funções com parâmetro e `return`, `for`, `while` de validação com `isNaN`, template strings |
| **Combate** (`combate.js`) | Gabriel | `sortearAtaque`, `vantagemDeTipo`, `calcularDano`, `aplicarDano`, `curar`, `calcularVidaInimigo` | Funções que só calculam e devolvem, `Math.random()`, `Math.floor()` e `Math.round()`, `if/else`, comparações, limites de vida (mínimo 0, máximo da espécie) |
| **Fluxo** (`fluxo.js`) | Arthur | `encontrarNPC`, `batalhar`, `jogar` e o laço "jogar de novo" | `switch`, `while` com duas condições de parada, `if` após o laço, funções chamando funções, contador de turnos e de curas, variáveis globais e locais |

## Regras do jogo

- **Turnos:** o jogador age primeiro (atacar ou curar) e depois o inimigo sorteia um ataque. Os ataques podem errar.
- **Vantagem de tipo:** Fogo > Planta > Água > Fogo causa dano x1,5.
- **Cura:** 2 curas por batalha, de 30 pontos, sem ultrapassar a vida máxima. Ao vencer o vilão, o herói recupera mais 30.
- **NPC:** a resposta do jogador define a vida do inimigo (normal ou +30%) e respostas inválidas repetem a pergunta.

## Decisões principais

- A posição `i` representa o mesmo Pokémon em todos os arrays (`herois[i]`, `vidasMaxH[i]`, `ataquesH[i]`...).
- As vidas máximas nunca são alteradas: a vida que muda na batalha fica em variáveis separadas.
- Funções de cálculo (combate) não leem teclado e funções de tela (menus) não fazem conta, para que cada parte seja testada sozinha.
- A fase do inimigo segue o índice do array `viloes`: 0 = Arbok, 1 = Mewtwo.