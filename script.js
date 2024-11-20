// LOOP WHILE
//permita que o usuário faça várias tentativas até acertar
/*let number = true

while (number) {
    let number1 = prompt('escolha um numero de 1 a 20 ')

    if(number1 == 20) { 
        alert('voce acertou') 
        break
    } else {
        alert('vc errou')
    }
}*/
function registrarPontos(arremesso) {
    if (arremesso === 2) {
        return 2; // Arremesso de 2 pontos
    } else if (arremesso === 3) {
        return 3; // Arremesso de 3 pontos
    } else {
        return 0; // Erro, não fez cesta
    }
}

// Array para armazenar os pontos dos arremessos
let pontos = [];
let totalPontos = 0;
let tentativas = 0;
let maxTentativas = 5; // Limitar tentativas
let defensor = prompt('quem e seu defensor?')
while (tentativas < maxTentativas) {
    // Simulando um arremesso (2 ou 3 pontos)
    let arremesso = prompt("voce quer arremesar de 2 ou de 3?\naperte 0 para sair :");
    arremesso = parseInt(arremesso);

    if (arremesso === 0) {
        break;
    }

    // Registrar os pontos do arremesso
    pontos.push(registrarPontos(arremesso));
    totalPontos += pontos[pontos.length - 1];
    tentativas++;
}

alert(`voce arremessou ${tentativas} vezes e ganhou do ${defensor} de ${totalPontos} pontos`);

// você vai criar uma função usando o math.random() para definir se errou ou acertou a cesta









