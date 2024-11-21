alert("Bem vindo ao jogo de basquete")
alert('como vai fucionar?')
alert(`meu projeto pessoal vai ser um x1 de basquete que so um jogar atacar e um defende\n voce vai ter as opçoes se quer fazer a bandeja ou se quer aremessar\n
     voce vai ter algumas tentativas de arremeso ou bandeja \n e no final vai mostrar as estatisticas` )
     alert("vamos começar")
let hub = ''
let ply1 = prompt("qual nome do seu jogador que vai atacar?")
let ply2 = prompt("qual nome do seu jogador que vai defender?")
function randomNum(n) {
    return Math.floor(Math.random() * (n + 1))
}
let pontos = 0
let tenativas = 0
let limitePontos = 15
let toco = 0
let airBall = 0
for(let i = 0; pontos <= limitePontos; i++) {
    let resultado = randomNum(5)
    tenativas = i
    hub = prompt("1: voce quer fazer bandeja\n2: voce quer arremesar ")
    if (hub == 1) {
        if(resultado < 4) {
            alert(`${ply1} fez bandeja e fez o ponto`)
            pontos += 2
        } else if (resultado > 3) {
            alert(`${ply2} deu o toco`)
            toco += 1
        }
    } else if (hub == 2) {
        if (resultado < 4) {
            alert(`${ply1} fez um arremeso e fez o ponto`)
            pontos += 3
        } else if (resultado > 3) {
            alert(`${ply1} arremessou e deu AIR BALL`)
            airBall += 1
        }
    }
}
alert(`Você teve ${tenativas} tentativas fez ${pontos} pontos e teve ${pontos/tenativas} pontos por tentativa e levou ${toco} tocos de ${ply2} e deu ${airBall} air ball`)

//mostrar que levou o toco e de quem 
//ajeitar as mensagem dos alert

//===================================================

alert("Bem vindo ao jogo de basquete")
alert('como vai fucionar?')
alert(`meu projeto pessoal vai ser um x1 de basquete que so um jogar atacar e um defende\n voce vai ter as opçoes se quer fazer a bandeja ou se quer aremessar\n
     voce vai ter algumas tentativas de arremeso ou bandeja \n e no final vai mostrar as estatisticas` )
     alert("vamos começar")
let hub = ''
let ply1 = prompt("qual nome do seu jogador que vai atacar?")
let ply2 = prompt("qual nome do seu jogador que vai defender?")
function randomNum(n) {
    return Math.floor(Math.random() * (n + 1))
}
let pontos = 0
let tentativas = 0
let limitePontos = 9
let toco = 0
let airBall = 0


for(let i = 0; pontos <= limitePontos; i++) {
    let resultado = randomNum(5)
    tentativas++
    hub = prompt("1: voce quer fazer bandeja\n2: voce quer arremesar ")
    if (hub == 1) {
        if(resultado < 4) {
            alert(`${ply1} fez bandeja e fez o ponto`)
            pontos += 2
        } else if (resultado > 3) {
            alert(`${ply2} deu o toco`)
            toco += 1
        }
    } else if (hub == 2) {
        if (resultado < 4) {
            alert(`${ply1} fez um arremeso e fez o ponto`)
            pontos += 3
        } else if (resultado > 3) {
            alert(`${ply1} arremessou e deu AIR BALL`)
            airBall += 1
        }
    }
}
alert(`Você teve ${tentativas} tentativas fez ${pontos} pontos e teve ${pontos/tentativas} pontos por tentativa e levou ${toco} tocos de ${ply2} e deu ${airBall} air ball`)

//mostrar que levou o toco e de quem 
//ajeitar as mensagem dos alert

    
