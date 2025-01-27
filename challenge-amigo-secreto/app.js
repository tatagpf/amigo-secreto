//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
//let titulo = document.querySelector("h1");
//titulo.innerHTML = "jogo do amigo secreto";

//let paragrafo = document.querySelector("h2");
//paragrafo.innerHTML ="Digite o nome dos seus amigos";
function exibirTextoNaTela(tag, Texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = Texto;
}

// Inicializando as mensagens
exibirTextoNaTela("h1", "Amigo Secreto");
exibirTextoNaTela('h2', 'Digite o nome dos seus amigos');

let listaAmigos = [];
let sorteado = false; // Variável para verificar se já foi feito o sorteio

function adicionarAmigo() {
    let campoTexto = document.getElementById('amigo');
    let nomeAmigo = campoTexto.value.trim();

    if (nomeAmigo === '') {
        alert('Por favor, insira um nome.');
        return;
    }
    
    // Verifica se o nome já foi adicionado
    if (listaAmigos.includes(nomeAmigo)) {
        alert('Este nome já foi adicionado!');
        campoTexto.value = '';  // Limpa o campo de texto
        return;
    }

    listaAmigos.push(nomeAmigo);
    campoTexto.value = ''; // Limpa o campo de texto após adicionar
    exibirListaAmigos();
}

function exibirListaAmigos() {
    let listaAmigosElement = document.getElementById('listaAmigos');
    listaAmigosElement.innerHTML = ''; // Limpar lista anterior

    // Exibe todos os amigos
    for (let i = 0; i < listaAmigos.length; i++) {
        let novoItemLista = document.createElement('li');
        novoItemLista.textContent = listaAmigos[i];
        listaAmigosElement.appendChild(novoItemLista);
    }
}

function sortearAmigo() {
    if (listaAmigos.length < 2) {
        alert('Adicione pelo menos 2 amigos para sortear!');
        return;
    }

    if (sorteado) {
        alert('O sorteio já foi realizado!');
        return;
    }

    let resultadoElement = document.getElementById('resultado');
    let amigosDisponiveis = [...listaAmigos];  // Copiar lista para sorteio

    // Limpar qualquer resultado anterior
    resultadoElement.innerHTML = '';

    // Limpar a lista de amigos exibida
    let listaAmigosElement = document.getElementById('listaAmigos');
    listaAmigosElement.innerHTML = '';

    // Sortear um único amigo
    let sorteadoNome = amigosDisponiveis[Math.floor(Math.random() * amigosDisponiveis.length)];

    // Exibir resultado
    let novoItemResultado = document.createElement('p');
    novoItemResultado.textContent = `O amigo secreto sorteado é: ${sorteadoNome}`;
    resultadoElement.appendChild(novoItemResultado);

    // Marcar que o sorteio foi realizado
    sorteado = true;
}
