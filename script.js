const personagens = [
    { nome: "Batman", dicas: ["Ele é um bilionário que combate o crime em Gotham City.", "Não tem superpoderes, mas usa tecnologia e gadgets avançados."], imagemUrl: "https://i.imgur.com/Kx3u45L.jpeg" },
    { nome: "Capitão América", dicas: ["Ele é um super-soldado da Segunda Guerra Mundial, que foi congelado no tempo.", "Seu principal acessório é um escudo indestrutível feito de vibranium."], imagemUrl: "https://i.imgur.com/J8Yl00H.jpeg" },
    { nome: "Jack Sparrow", dicas: ["Ele é um pirata carismático, com um jeito de andar e falar únicos.", "Capitão do navio Pérola Negra, ele está sempre procurando tesouros e evitando a Companhia das Índias Orientais."], imagemUrl: "https://i.imgur.com/gK1kFpY.jpeg" },
    { nome: "Darth Vader", dicas: ["É um dos vilões mais icônicos do cinema, com uma respiração pesada e robótica.", "Ele é um Lorde Sith, conhecido por ser o principal executor do Império Galáctico."], imagemUrl: "https://i.imgur.com/rS2a88U.jpeg" },
    { nome: "Elsa", dicas: ["Ela é uma rainha que nasceu com poderes de gelo e neve.", "Sua música tema mais famosa é 'Let it Go', e seu castelo é feito de gelo."], imagemUrl: "https://i.imgur.com/39wF4y8.jpeg" },
    { nome: "Frodo Bolseiro", dicas: ["Ele é um hobbit, uma criatura pequena que vive em um lugar chamado o Condado.", "Sua missão é destruir um anel mágico e poderoso em uma montanha de fogo."], imagemUrl: "https://i.imgur.com/QhXoB2i.jpeg" },
    { nome: "Gandalf", dicas: ["Ele é um mago poderoso, membro da Ordem de Istari.", "Guia os hobbits, anões e humanos em uma missão para derrotar um grande mal."], imagemUrl: "https://i.imgur.com/lM3Lp8U.jpeg" },
    { nome: "Goku", dicas: ["É um dos últimos Saiyajins, um guerreiro do Planeta Vegeta.", "Sua técnica principal é o Kamehameha, e ele pode se transformar em Super Saiyajin."], imagemUrl: "https://i.imgur.com/fVq6X0k.jpeg" },
    { nome: "Harry Potter", dicas: ["É um bruxo que sobreviveu à maldição de Voldemort quando era um bebê.", "Ele tem uma cicatriz na testa em forma de raio."], imagemUrl: "https://i.imgur.com/kYq3Q0L.jpeg" },
    { nome: "Homem de Ferro", dicas: ["Ele é um inventor e bilionário excêntrico.", "Usa uma armadura de alta tecnologia para combater o crime e salvar o mundo."], imagemUrl: "https://i.imgur.com/mRzR28g.jpeg" },
    { nome: "Homem Aranha", dicas: ["Ele é um jovem fotógrafo que foi picado por um aracnídeo radioativo.", "Seus poderes incluem teias que ele atira dos pulsos e um 'sentido aranha' que o alerta sobre perigos."], imagemUrl: "https://i.imgur.com/bWkQ2oZ.jpeg" },
    { nome: "Hulk", dicas: ["É um cientista que, após um experimento, se transforma em uma criatura gigante e verde quando fica irritado.", "Sua força é proporcional à sua raiva."], imagemUrl: "https://i.imgur.com/p51tV3s.jpeg" },
    { nome: "Link", dicas: ["Ele é um herói da série 'The Legend of Zelda'.", "Normalmente usa uma túnica verde e carrega uma espada e um escudo, sendo o portador da Triforce da Coragem."], imagemUrl: "https://i.imgur.com/3h8Q45z.jpeg" },
    { nome: "Luffy", dicas: ["Ele é o capitão do bando do Chapéu de Palha.", "Seu corpo se tornou de borracha após ele comer uma fruta do diabo."], imagemUrl: "https://i.imgur.com/p1zPq1L.jpeg" },
    { nome: "Luke Skywalker", dicas: ["Ele é o herói de uma galáxia muito, muito distante.", "É um mestre Jedi, filho de um dos maiores vilões do cinema."], imagemUrl: "https://i.imgur.com/4qD4f1s.jpeg" },
    { nome: "Mario", dicas: ["É um encanador italiano do Reino Cogumelo.", "Ele pula em inimigos e come cogumelos para crescer."], imagemUrl: "https://i.imgur.com/7gK5J5S.jpeg" },
    { nome: "Mickey Mouse", dicas: ["É um personagem de desenho animado que usa luvas brancas e sapatos grandes.", "Ele mora em 'Mickey Mouse Clubhouse' e trabalha em 'Fantasia'."], imagemUrl: "https://i.imgur.com/jW1hG1U.jpeg"},
    { nome: "Mulher Maravilha", dicas: ["Ela é uma princesa guerreira de Themyscira, uma ilha oculta.", "Seu principal acessório é o Laço da Verdade, que força as pessoas a dizerem a verdade."], imagemUrl: "https://i.imgur.com/z0J6t8Y.jpeg" },
    { nome: "Optimus Prime", dicas: ["Ele é o líder dos Autobots.", "Seu corpo se transforma em um caminhão, e sua frase mais famosa é 'Autobots, roll out!'."], imagemUrl: "https://i.imgur.com/p8b6Q1c.jpeg" },
    { nome: "Peter Pan", dicas: ["Ele é um menino que se recusa a crescer e mora em uma ilha mágica.", "Voa com a ajuda de pó de fada e é amigo de uma pequena fada chamada Sininho."], imagemUrl: "https://i.imgur.com/e2N6B4l.jpeg" },
    { nome: "Sherlock Holmes", dicas: ["É um detetive particular britânico, conhecido por sua grande inteligência e observação.", "Vive na Rua Baker, 221B, em Londres, e é acompanhado por seu amigo Dr. Watson."], imagemUrl: "https://i.imgur.com/dK3f0bS.jpeg" },
    { nome: "SpongeBob SquarePants", dicas: ["É uma criatura amarela que mora em um abacaxi, no fundo do mar.", "Seu melhor amigo é uma estrela do mar, e ele trabalha no Siri Cascudo."], imagemUrl: "https://i.imgur.com/q7N6y0w.jpeg" },
    { nome: "Super-Homem", dicas: ["Ele é um alienígena do planeta Krypton, enviado à Terra ainda bebê.", "Seus poderes incluem superforça, voo e visão de raio-x."], imagemUrl: "https://i.imgur.com/qR5K5L2.jpeg" }
];

const META_PONTOS = 30;
const TEMPO_MAXIMO = 60;

let personagemSecreto = {};
let tentativas = 0;
let pontuacao = 0;
let dicaAtual = -1;
let nomeJogador = "";
let tempoRestante = TEMPO_MAXIMO;
let timer;

// Elementos da tela de início
const startScreen = document.getElementById('start-screen');
const startBtn = document.getElementById('start-btn');
const nameInput = document.getElementById('name-input');

// Elementos da tela de jogo
const gameScreen = document.getElementById('game-screen');
const inputPalpite = document.getElementById('adivinhaInput');
const btnEnviar = document.getElementById('enviarPalpiteBtn');
const mensagem = document.getElementById('mensagem');
const btnReiniciar = document.getElementById('reiniciarBtn');
const btnPedirDica = document.getElementById('pedirDicaBtn');
const divDica = document.getElementById('dica');
const personagemImagem = document.getElementById('personagem-imagem');
const pontuacaoTexto = document.getElementById('pontuacao');
const metaTexto = document.getElementById('meta');
const playerNameDisplay = document.getElementById('player-name-display');
const timerDisplay = document.getElementById('timer-display');

// --- Funções de Lógica do Jogo ---

function iniciarNovoJogoCompleto() {
    pontuacao = 0;
    metaTexto.textContent = `Meta: ${META_PONTOS}`;
    pontuacaoTexto.textContent = `Pontos: ${pontuacao}`;
    iniciarNovaRodada();
    iniciarCronometro();
}

function iniciarNovaRodada() {
    const indiceAleatorio = Math.floor(Math.random() * personagens.length);
    personagemSecreto = personagens[indiceAleatorio];

    tentativas = 0;
    dicaAtual = -1;
    inputPalpite.value = '';
    mensagem.textContent = '';
    mensagem.className = '';
    btnEnviar.disabled = false;
    btnPedirDica.style.display = 'inline-block';
    btnPedirDica.disabled = false;
    btnReiniciar.classList.add('hidden');
    divDica.innerHTML = '<p>Toque em "Pedir Dica" para começar!</p>';
    personagemImagem.src = '';
    personagemImagem.classList.add('hidden');
    playerNameDisplay.textContent = `Olá, ${nomeJogador}!`;
    inputPalpite.focus();
}

function atualizarPontuacao(pontosGanhos) {
    pontuacao += pontosGanhos;
    pontuacaoTexto.textContent = `Pontos: ${pontuacao}`;
}

function verificarPalpite() {
    const palpite = inputPalpite.value.trim().toLowerCase();
    inputPalpite.value = '';

    if (palpite === '') {
        mensagem.textContent = 'Por favor, digite um nome de personagem.';
        return;
    }

    tentativas++;

    if (palpite === personagemSecreto.nome.toLowerCase()) {
        const pontosGanhos = calcularPontos(tentativas);
        atualizarPontuacao(pontosGanhos);
        mensagem.textContent = `Parabéns, ${nomeJogador}! Você acertou em ${tentativas} tentativa(s) e ganhou ${pontosGanhos} pontos!`;
        mensagem.className = 'win-message';
        fimDeRodada();
    } else {
        mensagem.textContent = 'Incorreto. Tente novamente!';
        mensagem.className = 'lose-message';
        if (tentativas >= 3) {
            mensagem.textContent = `Você errou 3 vezes, ${nomeJogador}. O personagem era "${personagemSecreto.nome}".`;
            mensagem.className = 'lose-message';
            fimDeRodada();
        }
    }
}

function mostrarDica() {
    dicaAtual++;
    if (dicaAtual < personagemSecreto.dicas.length) {
        divDica.innerHTML = `<p>${personagemSecreto.dicas[dicaAtual]}</p>`;
    } else {
        divDica.innerHTML = '';
        personagemImagem.src = personagemSecreto.imagemUrl;
        personagemImagem.classList.remove('hidden');
        personagemImagem.onerror = function() {
            this.src = 'https://i.imgur.com/kYq3Q0L.jpeg'; // Imagem de fallback
            mensagem.textContent = "A imagem não foi carregada. Tente adivinhar com as dicas!";
        };
        btnPedirDica.disabled = true;
        mensagem.textContent = 'Última dica, agora é sua chance!';
        mensagem.className = '';
    }
}

function calcularPontos(tentativas) {
    if (tentativas === 1) return 10;
    if (tentativas === 2) return 5;
    if (tentativas === 3) return 1;
    return 0;
}

function fimDeRodada() {
    btnEnviar.disabled = true;
    btnPedirDica.disabled = true;
    btnPedirDica.style.display = 'none';
    btnReiniciar.classList.remove('hidden');

    if (pontuacao >= META_PONTOS) {
        fimDeJogoTotal("vitória");
    } else if (tentativas >= 3) {
        fimDeJogoTotal("derrota");
    } else {
        btnReiniciar.textContent = 'Próximo Personagem';
    }
}

function fimDeJogoTotal(resultado) {
    clearInterval(timer); 
    btnEnviar.disabled = true;
    btnPedirDica.disabled = true;
    btnPedirDica.style.display = 'none';
    btnReiniciar.classList.remove('hidden');
    btnReiniciar.textContent = 'Reiniciar Jogo';

    if (resultado === "vitória") {
        mensagem.textContent = `Parabéns, ${nomeJogador}! Você venceu o jogo, atingindo ${pontuacao} pontos!`;
        mensagem.className = 'win-message';
    } else { 
        mensagem.textContent = `Fim de jogo, ${nomeJogador}. O personagem era "${personagemSecreto.nome}". Você terminou com ${pontuacao} pontos.`;
        mensagem.className = 'lose-message';
    }
}

function perderPorTempo() {
    fimDeJogoTotal("derrota"); 
}

function atualizarCronometro() {
    tempoRestante--;
    timerDisplay.textContent = `Tempo: ${tempoRestante}s`;
    
    if (tempoRestante <= 10) {
        timerDisplay.classList.add('danger');
    } else {
        timerDisplay.classList.remove('danger');
    }

    if (tempoRestante <= 0) {
        perderPorTempo();
    }
}

function iniciarCronometro() {
    clearInterval(timer);
    tempoRestante = TEMPO_MAXIMO;
    timerDisplay.textContent = `Tempo: ${tempoRestante}s`;
    timerDisplay.classList.remove('danger');
    timer = setInterval(atualizarCronometro, 1000);
}

// --- Event Listeners ---

startBtn.addEventListener('click', () => {
    nomeJogador = nameInput.value.trim();
    if (nomeJogador === "") {
        nomeJogador = "Jogador";
    }
    startScreen.classList.add('hidden');
    gameScreen.classList.remove('hidden');
    iniciarNovoJogoCompleto();
});

btnReiniciar.addEventListener('click', () => {
    if (btnReiniciar.textContent === 'Reiniciar Jogo') {
        gameScreen.classList.add('hidden');
        startScreen.classList.remove('hidden');
        iniciarNovoJogoCompleto();
    } else {
        iniciarNovaRodada();
    }
});

btnEnviar.addEventListener('click', verificarPalpite);
btnPedirDica.addEventListener('click', mostrarDica);
inputPalpite.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        verificarPalpite();
    }
});