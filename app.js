alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute ;
let tentativas = 1;


while (chute != numeroSecreto){
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
             alert(`o número é menor que ${chute}`);
        } else{
            alert(`o número é maior que ${chute}`);
        }
         tentativas++;
    }
}

let palavraTentativa = tentavias > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! Voce acertou o numero secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);

 
   