let listaDeNumerosGerados = [];
let limiteDeNumeros = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
};

exibirMensagemInicial();

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', `Escolha um número de 1 a ${limiteDeNumeros}`);
}

function verificarChute(){
    let chute = document.querySelector('input').value;
    console.log(numeroSecreto);
    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Parabéns, você descobriu o número secreto em ${tentativas} ${palavraTentativas}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        exibirTextoNaTela('h1', ':(');
        if(chute > numeroSecreto){
            exibirTextoNaTela('p', 'O número secreto é menor');
            } else{
                exibirTextoNaTela('p', 'O número secreto é maior');
                }
        if(chute <= 0 || chute > 10){
            exibirTextoNaTela('p', `O número precisa estar entre 1 e ${limiteDeNumeros}`)
        }
        limparChute();
        tentativas++;
    }
}

function gerarNumeroAleatorio(){
    let numeroGerado = parseInt(Math.random() * limiteDeNumeros + 1);
    let quantidadeDeNumerosDaLista = listaDeNumerosGerados.length;

    if(quantidadeDeNumerosDaLista == limiteDeNumeros){
        listaDeNumerosGerados = [];
    }

    if(listaDeNumerosGerados.includes(numeroGerado)){
        return gerarNumeroAleatorio();
    } else{
        listaDeNumerosGerados.push(numeroGerado);
        console.log(listaDeNumerosGerados);
        return numeroGerado;
    }
}

function limparChute(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 1
    limparChute();
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}