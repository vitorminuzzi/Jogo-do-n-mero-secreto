let listasDeNumerosSorteados = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio ();
let tentativas = 1;

function exibirMensagemInicial() {
exibirTextoNaTela ('h1', 'Jogo do Número secreto');
exibirTextoNaTela ('p', `Escolha um número entre 1 e ${numeroLimite}`);
}

function exibirTextoNaTela (tag, texto){
    let campo = document.querySelector (tag);
    campo.innerHTML= texto;
}           

exibirMensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        exibirTextoNaTela ('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'Tentativa';
        let mensagemTentativa =`Você descobriu o número secreto depois de ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela ('p',mensagemTentativa );
        document.getElementById('reiniciar') .removeAttribute('disabled'); 
    } else {
        if (chute < numeroSecreto) {
            exibirTextoNaTela ('p', `O número secreto é maior que ${chute}`);
        } else {
            exibirTextoNaTela ('p', `O numéro secreto é menor que ${chute}`);
        } tentativas++;
        limparCampo ();
    }
}
  
function gerarNumeroAleatorio () {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadesDeElementosNaLista = listasDeNumerosSorteados.length; 
    
    if (quantidadesDeElementosNaLista == numeroLimite) {
        listasDeNumerosSorteados = [];
    }
    
    if (listasDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listasDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido; 
    }
}

function limparCampo () {
chute = document.querySelector ('input');
chute.value = ''; 
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disable',true)
}