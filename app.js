let listaNumeroSorteados = []
let i = 1000;
let numeroAleatorio = gerarNumeroAleatorio();
let tentavivas = 1;

function substituir_texto(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
};

function exibirMensagemInicial() {
    substituir_texto("p","Escolha um numero de 1 a 1000");
    substituir_texto("h1","Jogo do numero secreto");
}

exibirMensagemInicial()


function verificarChute(){
    let chute = document.querySelector("input").value ;
    if (chute==numeroAleatorio){
        substituir_texto("h1","Parabéns!! Você acertou");
        substituir_texto("p",`O numero de tentativas foi ${tentavivas}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }
    else{
        substituir_texto("h1","Voce errou!!");
        if(chute>numeroAleatorio){
            substituir_texto("p",`O numero escolhido ${chute} é maior que o numero aleatório`);
        }
        else{
            substituir_texto("p",`O numero escolhido ${chute} é menor que o numero aleatório`);
        }
        tentavivas++;
        limparCampo();  
    }
};  


function gerarNumeroAleatorio() {
    let numeroescolhido =  parseInt(Math.random()*i+1);
    if (listaNumeroSorteados.length==i){
        listaNumeroSorteados = []
    }
    if (listaNumeroSorteados.includes(numeroescolhido)){
        return gerarNumeroAleatorio();
    }
    else{
        listaNumeroSorteados.push(numeroescolhido);
        console.log(listaNumeroSorteados)
        return numeroescolhido;
    }
};

function limparCampo() {
    chute = document.querySelector("input");
    chute.value = '';
}

function reiniciarJogo() {
    numeroAleatorio = gerarNumeroAleatorio();
    limparCampo();
    tentavivas=1;
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled",true);
    verificarChute();
}