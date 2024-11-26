alert("Bem-vindo ao meu projeto pessoal")
alert("Como vai funcionar?")
alert(`Projeto Pessoal: X1 de Basquete

O jogo consiste em um duelo de 1 contra 1, onde um jogador ataca e o outro defende. Durante o ataque, o jogador tem a opção de fazer uma bandeja ou realizar um arremesso.

Regras:

- O jogador tem 10 tentativas ou 15 pontos para vencer.
- Ao final do jogo, serão mostradas as seguintes estatísticas:
  ° Número de tentativas realizadas.
  ° Quantidade de pontos marcados.
  ° Média de pontos por tentativa.
  ° Número de tocos recebidos.
  ° Quantidade de arremessos errados (air balls).`)

alert("Vamos começar!")

let hub = ''
let ply1 = prompt("Qual o nome do seu jogador que vai atacar?")
let ply2 = prompt("Qual o nome do seu jogador que vai defender?")

function randomNum(n) {
    return Math.floor(Math.random() * (n + 1))
}

let pontos = 0
let tentativas = 0
let limitePontos = 15
let limiteTentativas = 10
let toco = 0
let airBall = 0

for (let i = 0; tentativas < limiteTentativas && pontos <= limitePontos; i++) {
    let resultado = randomNum(5)
    tentativas++

    hub = prompt("1: Você quer fazer bandeja\n2: Você quer arremessar")

    if (hub == 1) {
        if (resultado < 4) {
            alert(`${ply1} foi pra bandeja e marcou o ponto na cabeça de ${ply2}!`)
            pontos += 2
        } else {
            alert(`${ply2} deu o toco em ${ply1}!`)
            toco += 1
        }
    } else if (hub == 2) {
        if (resultado < 4) {
            alert(`${ply1} arremesou e fez o ponto!`)
            pontos += 3
        } else {
            alert(`${ply1} arremessou e deu AIR BALL!`)
            airBall += 1
        }
    }
}

alert(`Você teve ${tentativas} tentativas, fez ${pontos} pontos, e teve uma média de ${pontos / tentativas} pontos por tentativa.
Você levou ${toco} tocos de ${ply2} e deu ${airBall} air balls.`)

alert("Obrigado por jogar!")  

