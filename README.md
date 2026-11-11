```text
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
```

# Jogo Pokémon no Terminal (AV3 de RLA)

Projeto da disciplina **Raciocínio Lógico e Algorítmico** (Ciência da Computação, Unifor): um jogo de batalha Pokémon por turnos, jogado no terminal, em JavaScript puro.

- **Escrito em:** VS Code
- **Testado em:** [Programiz (JavaScript Online Compiler)](https://www.programiz.com/javascript/online-compiler/)
- **Conceitos aplicados:** `if/else`, `switch`, `for`, `while`, arrays e funções

## Equipe

| Integrante | Responsabilidade |
|---|---|
| _Nome 1_ | Pessoa 1: Dados do jogo + Menus e entrada |
| _Nome 2_ | Pessoa 2: Regras do combate |
| _Nome 3_ | Pessoa 3: Fluxo da batalha e do jogo |

## Como rodar

1. Abra o [Programiz](https://www.programiz.com/javascript/online-compiler/).
2. Cole o conteúdo de `main.js` no editor.
3. Clique em **Run** e responda às perguntas no painel *Output*.

## Sumário

1. [Visão geral do jogo](#1-visão-geral-do-jogo)
2. [Onde cada conceito da disciplina aparece](#2-onde-cada-conceito-da-disciplina-aparece)
3. [Antes de começar](#3-antes-de-começar-todos-juntos-30-min)
4. [Divisão em etapas](#4-divisão-em-etapas-para-3-pessoas)
5. [Contrato das funções](#5-contrato-das-funções-combinem-antes-de-programar)
6. [Checklist de testes](#6-checklist-de-testes-antes-de-entregar)
7. [Extras](#7-extras-só-se-sobrar-tempo)
8. [Cronograma](#8-sugestão-de-cronograma)

---

## 1. Visão geral do jogo

**Ideia em uma frase:** o jogador escolhe 1 de 3 Pokémon, enfrenta um **vilão** e, se vencer, enfrenta o **boss**. Cada batalha é por turnos: o jogador escolhe o ataque e a máquina responde com um ataque sorteado.

**Fluxo completo:**

1. Tela de abertura com o nome do jogo.
2. Escolha do personagem (3 opções).
3. **Batalha 1:** contra o vilão.
4. Se perder, fim de jogo. Se vencer, recupera um pouco de vida e segue.
5. **Batalha 2:** contra o boss.
6. Tela final de vitória ou derrota, com a pergunta "Jogar de novo?".

**Tamanho certo para a AV3:** 3 personagens, 2 inimigos, 3 ataques por personagem e 1 item de cura. Isso já usa todos os conceitos sem virar um projeto gigante.

## 2. Onde cada conceito da disciplina aparece

O professor vai procurar os conceitos, então deixem cada um **visível** e com um comentário explicando onde está.

| Conceito | Onde usar no jogo |
|---|---|
| `if / else` | vida chegou a 0? acertou ou errou o ataque? tem vantagem de tipo? |
| `switch` | menu de escolha do personagem e menu de ação na batalha (1 = atacar, 2 = curar...) |
| `for` | exibir a lista de personagens e a lista de ataques a partir dos arrays |
| `while` | o laço da batalha (**enquanto** os dois estiverem vivos) e a validação de entrada |
| Arrays | lista de personagens, lista de ataques de cada um, lista de inimigos |
| Funções | cada parte do jogo é uma função (seção 5) |
| Contador / acumulador | número do turno, dano total causado, curas restantes |

## 3. Antes de começar (todos juntos, ~30 min)

**3.1 Onde escrever e onde rodar.** Vocês escrevem no VS Code e testam no **Programiz**, onde o `prompt()` funciona (vocês já usaram nos treinos). Então **não precisam instalar nada**. Duas consequências:

- O Programiz roda **um arquivo só**. Mesmo que cada um trabalhe num arquivo separado no VS Code, no fim tudo vai ser colado num único `main.js`. Combinem a **ordem** dentro dele: primeiro os dados, depois as funções, e por último a chamada `jogar()`.
- Se algum dia quiserem rodar direto no terminal do VS Code (Node.js), o `prompt()` não existe lá. Aí seria preciso o pacote `prompt-sync`. Para este projeto, não é necessário.

**3.2 Decidir como guardar um Pokémon.** Duas opções:

- **Se a turma já viu objetos** (`{ nome: ..., vida: ... }`): cada Pokémon é um objeto, e os ataques são um array dentro dele. É o mais organizado.
- **Se ainda não viu:** usem **arrays paralelos**, como no problema da lanchonete: `nomes`, `vidas`, `tipos`, e a posição `i` liga tudo. Funciona, só dá mais trabalho.

Perguntem ao professor se objetos podem ser usados. Se ele não falou deles, arrays paralelos são a escolha segura.

**3.3 Combinar o "contrato".** Antes de cada um sair programando, o grupo precisa concordar com **os nomes das funções, o que cada uma recebe e o que devolve** (tabela da seção 5). É isso que permite trabalhar em paralelo e juntar tudo no final sem quebrar.

**3.4 Combinar os números do jogo** (vida, dano dos ataques etc.). Sugestão de ponto de partida, que vocês devem ajustar jogando:

| Quem | Vida | Ataques (dano) |
|---|---|---|
| Personagem 1 | 100 | fraco ~10, médio ~18, forte ~28 (pode errar) |
| Personagem 2 | 120 | ataques um pouco mais fracos, mais vida |
| Personagem 3 | 85 | ataques mais fortes, menos vida |
| Vilão | 80 | 2 ataques |
| Boss | 150 | 3 ataques, um deles bem forte |

Cada personagem com um "estilo" diferente deixa a escolha da etapa 2 interessante.

## 4. Divisão em etapas (para 3 pessoas)

| Pessoa | Etapas | Peso |
|---|---|---|
| **Pessoa 1** | A (Dados) + B (Menus e entrada) | os dados são rápidos; os menus têm mais detalhes |
| **Pessoa 2** | C (Regras do combate) | funções de cálculo, sorteio e condições |
| **Pessoa 3** | D (Fluxo da batalha e do jogo) | a parte que liga tudo; é a mais "laço" do projeto |
| **Todos** | E (Integração e testes) | |

Cada etapa diz **os conceitos aplicados**, **o que entregar**, **perguntas para guiar** e **armadilhas** (as mesmas que apareceram nos nossos treinos).

### Etapa A: Dados do jogo

**Conceitos aplicados:** **arrays** (lista de personagens, lista de ataques de cada um, lista de inimigos), **variáveis e tipos** (texto para nomes, número para vida e dano), **arrays paralelos ou objetos** ([seção 3.2](#3-antes-de-começar-todos-juntos-30-min)) e **índice** (a posição liga o personagem aos seus dados).

**Entrega:** um arquivo/trecho com todos os personagens, ataques, o vilão, o boss e os números da seção 3.4.

**Perguntas-guia:**

- Cada ataque precisa de quais informações? (nome, dano, chance de acerto, quantas vezes pode ser usado?)
- Como o código vai saber quais ataques pertencem a qual personagem?
- A vida "máxima" e a vida "atual" são a mesma coisa? (Dica: para curar e para mostrar "75/100", vocês vão precisar das duas.)

**Armadilha:** começar a batalha 2 com o Pokémon "zerado" porque a vida foi alterada na batalha 1. Decidam: a vida continua de onde parou ou recupera?

### Etapa B: Menus e entrada do jogador

**Conceitos aplicados:** **funções** (cada tela é uma função), **`for`** (percorrer o array para montar os menus), **`switch`** (tratar a opção escolhida), **`while` de validação** (repetir enquanto a opção for inválida), **`prompt` + `Number`** (entrada do usuário) e **índice × posição exibida** (`escolha - 1`).

**Entrega:** as funções que mostram telas e leem escolhas **válidas**.

- Tela de abertura.
- Mostrar os 3 personagens (com `for` percorrendo o array, não com 3 `console.log` fixos).
- Ler a escolha do personagem e devolver qual foi escolhido.
- Mostrar o menu da batalha (ataques + curar) e devolver a ação escolhida.

**Perguntas-guia:**

- O que acontece se o jogador digitar 7, ou "abc"? (Resposta: o `while` de validação. Lembram do "repete enquanto for inválido"?)
- O menu mostra "1, 2, 3", mas o array começa em 0. Onde vocês fazem esse ajuste (`escolha - 1`)?
- Onde o `switch` entra melhor: na escolha do personagem ou na ação da batalha? (Pode entrar nas duas.)

**Armadilha:** o `prompt` devolve **texto**. Sem `Number(...)`, `"1" == 1` até funciona, mas `escolha - 1` e comparações de intervalo podem surpreender.

### Etapa C: Regras do combate

**Conceitos aplicados:** **funções com parâmetro e `return`** (recebem valores e devolvem o resultado, sem imprimir), **`if / else`** (acertou ou errou, vantagem de tipo, vida negativa), **operadores de comparação e lógicos** (`<`, `>=`, `&&`, `||`), **`Math.random()` e `Math.floor()`** (sorteio do ataque e da chance de acerto) e **acesso a array por índice** (o ataque sorteado).

**Entrega:** as funções que **calculam**, sem nenhum `prompt` dentro delas:

- Calcular o dano de um ataque (com chance de errar e, se quiserem, crítico).
- Aplicar o dano na vida de alguém, sem deixar ficar negativa.
- Escolher o ataque da máquina (sorteio).
- *(Opcional)* Vantagem de tipo: fogo > planta > água > fogo, causando dano × 1,5.

**Perguntas-guia:**

- Como sortear um número com `Math.random()`? Pesquisem como transformar o resultado num índice de 0 até `ataques.length - 1`.
- "70% de chance de acertar" vira qual `if`?
- Se a vida é 5 e o dano é 18, a vida fica -13? Como impedir?

**Armadilha:** índice sorteado igual a `length` (fora do array). Testem o sorteio umas 20 vezes e confiram se nunca sai `undefined`.

### Etapa D: Fluxo da batalha e do jogo

**Conceitos aplicados:** **`while` com mais de um motivo de parada** (a batalha continua enquanto os dois estão vivos), **`if` depois do laço** (descobrir quem venceu), **funções chamando funções** (a batalha usa as funções das etapas B e C), **reaproveitamento por parâmetro** (a mesma batalha serve para o vilão e para o boss), **contador** (número do turno) e **`while` externo** ("jogar de novo").

**Entrega:** a função da **batalha** (um turno do jogador, depois um turno da máquina, repetindo) e a função **principal**, que liga tudo: abertura → escolha → vilão → boss → fim → jogar de novo.

**Perguntas-guia:**

- Por quais motivos o laço da batalha para? (Exatamente o problema da senha: **todos** os motivos entram na condição, e um `if` depois do laço descobre quem venceu.)
- Se o jogador derrota o inimigo no turno dele, a máquina ainda ataca?
- A mesma função de batalha serve para o vilão **e** para o boss? (Deveria: é para isso que existe parâmetro.)
- O "Jogar de novo?" é outro `while` em volta de tudo. O que precisa ser resetado a cada partida?

**Armadilha:** a mensagem "Você venceu!" ficar dentro do laço ou fora de qualquer `if` (lembrem da lanchonete e do caixa eletrônico).

### Etapa E: Integração e testes (todos)

**Conceitos aplicados:** **teste de mesa** (rastrear uma batalha à mão para conferir os números), **casos extremos** (entrada inválida, vida exata em 0, perder logo na primeira batalha) e **depuração** (`console.log` temporário para ver o valor das variáveis).

Juntem as partes e rodem o checklist da seção 6. Façam pelo menos **uma partida completa cada um**.

## 5. Contrato das funções (combinem antes de programar)

Os nomes abaixo são sugestão. O importante é o grupo inteiro usar **os mesmos**.

| Função | Recebe | Devolve | Etapa |
|---|---|---|---|
| `mostrarAbertura` | nada | nada (só imprime) | B (Pessoa 1) |
| `escolherPersonagem` | lista de personagens | o personagem (ou o índice) escolhido | B (Pessoa 1) |
| `escolherAcao` | o personagem do jogador | o número da ação válida | B (Pessoa 1) |
| `sortearAtaque` | lista de ataques do inimigo | um ataque (ou índice) | C (Pessoa 2) |
| `calcularDano` | o ataque (e os tipos, se usarem vantagem) | o dano (0 se errou) | C (Pessoa 2) |
| `aplicarDano` | vida atual e dano | a nova vida (nunca negativa) | C (Pessoa 2) |
| `mostrarStatus` | jogador e inimigo | nada (imprime as vidas) | B (Pessoa 1) |
| `batalhar` | jogador e inimigo | `true` se o jogador venceu, `false` se perdeu | D (Pessoa 3) |
| `jogar` | nada | nada (é o jogo inteiro) | D (Pessoa 3) |

**Regra de ouro:** função que **calcula** não lê teclado nem imprime, e função que **mostra/lê** não faz conta de dano. Assim cada um testa sua parte sozinho.

**Como testar sua parte antes de juntar:** chame sua função com valores fixos e imprima o resultado. Exemplo para a etapa C: `aplicarDano` com vida 5 e dano 18 tem que devolver 0.

## 6. Checklist de testes antes de entregar

1. Escolher cada um dos 3 personagens funciona?
2. Digitar opção inválida (0, 9, letra) no menu pede de novo, sem quebrar?
3. A vida nunca aparece negativa?
4. Perder para o vilão encerra o jogo, **sem** ir para o boss?
5. Vencer o vilão leva para o boss?
6. Vencer o boss mostra a vitória final?
7. O ataque da máquina nunca é `undefined`?
8. A cura acaba quando os usos chegam a 0?
9. "Jogar de novo" recomeça com as vidas cheias?
10. Todo `while` tem um jeito de terminar?

## 7. Extras (só se sobrar tempo)

- Ataques com usos limitados (PP), usando um array de contadores.
- Crítico: 10% de chance de dano em dobro.
- Histórico da batalha: um array que guarda o que aconteceu em cada turno, exibido no final com `for`.
- Pontuação final: turnos usados, dano total causado.

## 8. Sugestão de cronograma

| Momento | O que fazer |
|---|---|
| Dia 1 | Seção 3 juntos: objetos ou arrays, contrato das funções, números e ordem do arquivo final |
| Dias 2 a 4 | Pessoa 1 (A+B), Pessoa 2 (C) e Pessoa 3 (D) em paralelo; cada um testa sua parte sozinho no Programiz |
| Dia 5 | Colar tudo num único `main.js`, rodar no Programiz e passar o checklist (seção 6) |
| Dia 6 | Ajustar números jogando, comentar o código apontando os conceitos, ensaiar a apresentação |

**Dica de apresentação:** cada integrante deve conseguir explicar **qualquer** parte, não só a sua. O professor costuma perguntar "por que esse `while` para?" ou "onde está o `switch`?".
