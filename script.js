// Dicionário de personagens por nível de dificuldade
const personagens = {
    facil: [
        { nome: "Mario", dicas: ["Ele é um encanador italiano do Reino Cogumelo.", "Ele pula em inimigos e come cogumelos para crescer."], imagemUrl: "https://i.imgur.com/7gK5J5S.jpeg" },
        { nome: "Homem de Ferro", dicas: ["Ele é um inventor e bilionário excêntrico.", "Usa uma armadura de alta tecnologia para combater o crime e salvar o mundo."], imagemUrl: "https://i.imgur.com/mRzR28g.jpeg" },
        { nome: "Goku", dicas: ["É um dos últimos Saiyajins, um guerreiro do Planeta Vegeta.", "Sua técnica principal é o Kamehameha, e ele pode se transformar em Super Saiyajin."], imagemUrl: "https://i.imgur.com/fVq6X0k.jpeg" },
        { nome: "Darth Vader", dicas: ["É um dos vilões mais icônicos do cinema, com uma respiração pesada e robótica.", "Ele é um Lorde Sith, conhecido por ser o principal executor do Império Galáctico."], imagemUrl: "https://i.imgur.com/rS2a88U.jpeg" },
        { nome: "Homem Aranha", dicas: ["Ele é um jovem fotógrafo que foi picado por um aracnídeo radioativo.", "Seus poderes incluem teias que ele atira dos pulsos e um 'sentido aranha' que o alerta sobre perigos."], imagemUrl: "https://i.imgur.com/bWkQ2oZ.jpeg" },
        { nome: "Batman", dicas: ["Ele é um bilionário que combate o crime em Gotham City.", "Não tem superpoderes, mas usa tecnologia e gadgets avançados."], imagemUrl: "https://i.imgur.com/Kx3u45L.jpeg" },
    ],
    medio: [
        { nome: "Capitão América", dicas: ["Ele é um super-soldado da Segunda Guerra Mundial, que foi congelado no tempo.", "Seu principal acessório é um escudo indestrutível feito de vibranium."], imagemUrl: "https://i.imgur.com/J8Yl00H.jpeg" },
        { nome: "Jack Sparrow", dicas: ["Ele é um pirata carismático, com um jeito de andar e falar únicos.", "Capitão do navio Pérola Negra, ele está sempre procurando tesouros e evitando a Companhia das Índias Orientais."], imagemUrl: "https://i.imgur.com/gK1kFpY.jpeg" },
        { nome: "Elsa", dicas: ["Ela é uma rainha que nasceu com poderes de gelo e neve.", "Sua música tema mais famosa é 'Let it Go', e seu castelo é feito de gelo."], imagemUrl: "https://i.imgur.com/39wF4y8.jpeg" },
        { nome: "Mulher Maravilha", dicas: ["Ela é uma princesa guerreira de Themyscira, uma ilha oculta.", "Seu principal acessório é o Laço da Verdade, que força as pessoas a dizerem a verdade."], imagemUrl: "https://i.imgur.com/z0J6t8Y.jpeg" },
        { nome: "SpongeBob SquarePants", dicas: ["É uma criatura amarela que mora em um abacaxi, no fundo do mar.", "Seu melhor amigo é uma estrela do mar, e ele trabalha no Siri Cascudo."], imagemUrl: "https://i.imgur.com/q7N6y0w.jpeg" },
        { nome: "Optimus Prime", dicas: ["Ele é o líder dos Autobots.", "Seu corpo se transforma em um caminhão, e sua frase mais famosa é 'Autobots, roll out!'."], imagemUrl: "https://i.imgur.com/p8b6Q1c.jpeg" },
    ],
    dificil: [
        { nome: "Frodo Bolseiro", dicas: ["Ele é um hobbit, uma criatura pequena que vive em um lugar chamado o Condado.", "Sua missão é destruir um anel mágico e poderoso em uma montanha de fogo."], imagemUrl: "https://i.imgur.com/QhXoB2i.jpeg" },
        { nome: "Luffy", dicas: ["Ele é o capitão do bando do Chapéu de Palha.", "Seu corpo se tornou de borracha após ele comer uma fruta do diabo."], imagemUrl: "https://i.imgur.com/p1zPq1L.jpeg" },
        { nome: "Link", dicas: ["Ele é um herói da série 'The Legend of Zelda'.", "Normalmente usa uma túnica verde e carrega uma espada e um escudo, sendo o portador da Triforce da Coragem."], imagemUrl: "https://i.imgur.com/3h8Q45z.jpeg" },
        { nome: "Sherlock Holmes", dicas: ["É um detetive particular britânico, conhecido por sua grande inteligência e observação.", "Vive na Rua Baker, 221B, em Londres, e é acompanhado por seu amigo Dr. Watson."], imagemUrl: "https://i.imgur.com/dK3f0bS.jpeg" },
        { nome: "Gandalf", dicas: ["Ele é um mago poderoso, membro da Ordem de Istari.", "Guia os hobbits, anões e humanos em uma missão para derrotar um grande mal."], imagemUrl: "https://i.imgur.com/lM3Lp8U.jpeg" },
        { nome: "Peter Pan", dicas: ["Ele é um menino que se recusa a crescer e mora em uma ilha mágica.", "Voa com a ajuda de pó de fada e é amigo de uma pequena fada chamada Sininho."], imagemUrl: "https://i.imgur.com/e2N6B4l.jpeg" },
    ]
};

const META_PONTOS = 30;
const TEMPO_MAXIMO = 60;

let personagemSecreto = {};
let tentativas = 0;
let pontuacao = 0;
let dicaAtual = -1;
let nomeJogador = "";
let tempoRestante = TEMPO_MAXIMO;
let timer;
let nivelDificuldade = "";
let sequenciaAcertos = 0;

// Elementos das telas
const startScreen = document.getElementById('start-screen');
const difficultyScreen = document.getElementById('difficulty-screen');
const gameScreen = document.getElementById('game-screen');
const endScreen = document.getElementById('end-screen');

// Elementos da tela de início
const startBtn = document.getElementById('start-btn');
const nameInput = document.getElementById('name-input');

// Elementos da tela de dificuldade
const easyBtn = document.getElementById('easy-btn');
const mediumBtn = document.getElementById('medium-btn');
const hardBtn = document.getElementById('hard-btn');

// Elementos da tela de jogo
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
const dificuldadeDisplay = document.getElementById('dificuldade-display');

// Elementos para o novo feedback visual
const dicaDots = [
    document.getElementById('dica1-dot'),
    document.getElementById('dica2-dot'),
    document.getElementById('dica3-dot')
];
const personagemFeedback = document.getElementById('personagem-feedback');
const feedbackIcon = document.getElementById('feedback-icon');

// Elementos da tela de fim de jogo
const endTitle = document.getElementById('end-title');
const endIcon = document.getElementById('end-icon');
const endMessage = document.getElementById('end-message');
const endContainer = document.getElementById('end-container');
const playAgainBtn = document.getElementById('play-again-btn');

// Efeitos Sonoros
const somAcerto = document.getElementById('somAcerto');
const somErro = document.getElementById('somErro');
const somVitoria = document.getElementById('somVitoria');

function playSound(sound) {
    sound.currentTime = 0;
    sound.play().catch(e => console.error("Erro ao tocar áudio:", e));
}

// Função para atualizar o indicador de dicas visuais
function atualizarIndicadorDicas() {
    dicaDots.forEach((dot, index) => {
        dot.classList.remove('used', 'active');
        if (index < dicaAtual) {
            dot.classList.add('used');
        } else if (index === dicaAtual) {
            dot.classList.add('active');
        }
    });
}

function iniciarNovaRodada() {
    const personagensDoNivel = personagens[nivelDificuldade];
    const indiceAleatorio = Math.floor(Math.random() * personagensDoNivel.length);
    personagemSecreto = personagensDoNivel[indiceAleatorio];

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
    feedbackIcon.classList.add('hidden');
    atualizarIndicadorDicas();
    playerNameDisplay.textContent = `Olá, ${nomeJogador}!`;
    dificuldadeDisplay.textContent = `Nível: ${nivelDificuldade.charAt(0).toUpperCase() + nivelDificuldade.slice(1)}`;
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
        const bonusTempo = calcularBonusTempo(tempoRestante);

        // Aumenta a sequência de acertos
        sequenciaAcertos++;
        let bonusSequencia = 0;
        let mensagemSequencia = "";

        if (sequenciaAcertos >= 3) {
            bonusSequencia = 10 * sequenciaAcertos;
            mensagemSequencia = `Você está em uma sequência de ${sequenciaAcertos} acertos e ganhou um bônus de ${bonusSequencia} pontos!`;
        }
        
        const totalPontos = pontosGanhos + bonusTempo + bonusSequencia;
        
        atualizarPontuacao(totalPontos);
        
        mensagem.innerHTML = `Parabéns, ${nomeJogador}! Você acertou em ${tentativas} tentativa(s) e ganhou ${pontosGanhos} pontos.<br>Bônus de tempo: ${bonusTempo} pontos!`;
        
        // Adiciona a mensagem do bônus de sequência se houver
        if (bonusSequencia > 0) {
            mensagem.innerHTML += `<br>${mensagemSequencia}`;
        }

        mensagem.innerHTML += `<br>Total: ${totalPontos} pontos.`;
        mensagem.className = 'win-message';
        playSound(somAcerto);
        
        // Adiciona feedback visual de acerto
        feedbackIcon.classList.remove('hidden', 'incorrect');
        feedbackIcon.classList.add('correct', 'fa-check');
        personagemImagem.src = personagemSecreto.imagemUrl;
        personagemImagem.classList.remove('hidden');

        fimDeRodada();
    } else {
        mensagem.textContent = 'Incorreto. Tente novamente!';
        mensagem.className = 'lose-message shake';
        playSound(somErro);

        // Reseta a sequência de acertos
        sequenciaAcertos = 0;
        
        // Adiciona feedback visual de erro
        feedbackIcon.classList.remove('hidden', 'correct');
        feedbackIcon.classList.add('incorrect', 'fa-times');

        setTimeout(() => {
            mensagem.classList.remove('shake');
        }, 500);

        if (tentativas >= 3) {
            mensagem.textContent = `Você errou 3 vezes, ${nomeJogador}. O personagem era "${personagemSecreto.nome}".`;
            mensagem.className = 'lose-message';
            
            // Mostra a imagem mesmo se o jogador errar 3 vezes
            personagemImagem.src = personagemSecreto.imagemUrl;
            personagemImagem.classList.remove('hidden');

            fimDeRodada();
        }
    }
}

function mostrarDica() {
    dicaAtual++;
    if (dicaAtual < personagemSecreto.dicas.length) {
        divDica.innerHTML = `<p>${personagemSecreto.dicas[dicaAtual]}</p>`;
        atualizarIndicadorDicas();
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

// Função para calcular o bônus de pontos com base no tempo restante
function calcularBonusTempo(tempo) {
    if (tempo >= 50) {
        return 10;
    } else if (tempo >= 40) {
        return 8;
    } else if (tempo >= 30) {
        return 5;
    } else if (tempo >= 20) {
        return 3;
    } else if (tempo >= 10) {
        return 1;
    } else {
        return 0;
    }
}

function fimDeRodada() {
    btnEnviar.disabled = true;
    btnPedirDica.disabled = true;
    btnPedirDica.style.display = 'none';
    btnReiniciar.classList.remove('hidden');

    if (pontuacao >= META_PONTOS) {
        fimDeJogoTotal("vitoria");
    } else if (tentativas >= 3) {
        fimDeJogoTotal("derrota");
    } else {
        btnReiniciar.textContent = 'Próximo Personagem';
    }
}

function fimDeJogoTotal(resultado) {
    clearInterval(timer);
    gameScreen.classList.add('hidden');
    endScreen.classList.remove('hidden');
    
    endContainer.classList.remove('win', 'lose');
    endIcon.classList.remove('fa-trophy', 'fa-sad-cry');

    if (resultado === "vitoria") {
        endTitle.textContent = "Parabéns, Você Venceu!";
        endIcon.classList.add('fa-trophy', 'win');
        endContainer.classList.add('win');
        endMessage.textContent = `Você atingiu a meta de ${META_PONTOS} pontos e terminou com ${pontuacao} pontos.`;
        playSound(somVitoria);
        for (let i = 0; i < 50; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti-piece');
            confetti.style.left = `${Math.random() * 100}vw`;
            confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
            confetti.style.animationDelay = `${Math.random() * 5}s`;
            endScreen.appendChild(confetti);
        }
    } else {
        endTitle.textContent = "Fim de Jogo!";
        endIcon.classList.add('fa-sad-cry', 'lose');
        endContainer.classList.add('lose');
        endMessage.textContent = `O personagem era "${personagemSecreto.nome}". Você terminou com ${pontuacao} pontos. Tente novamente!`;
        btnReiniciar.textContent = "Reiniciar Jogo";
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
    difficultyScreen.classList.remove('hidden');
});

easyBtn.addEventListener('click', () => {
    nivelDificuldade = 'facil';
    difficultyScreen.classList.add('hidden');
    gameScreen.classList.remove('hidden');
    iniciarNovoJogoCompleto();
});

mediumBtn.addEventListener('click', () => {
    nivelDificuldade = 'medio';
    difficultyScreen.classList.add('hidden');
    gameScreen.classList.remove('hidden');
    iniciarNovoJogoCompleto();
});

hardBtn.addEventListener('click', () => {
    nivelDificuldade = 'dificil';
    difficultyScreen.classList.add('hidden');
    gameScreen.classList.remove('hidden');
    iniciarNovoJogoCompleto();
});

function iniciarNovoJogoCompleto() {
    pontuacao = 0;
    sequenciaAcertos = 0;
    metaTexto.textContent = `Meta: ${META_PONTOS}`;
    pontuacaoTexto.textContent = `Pontos: ${pontuacao}`;
    iniciarNovaRodada();
    iniciarCronometro();
}

btnReiniciar.addEventListener('click', () => {
    if (btnReiniciar.textContent === 'Reiniciar Jogo') {
        endScreen.classList.add('hidden');
        difficultyScreen.classList.remove('hidden');
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

playAgainBtn.addEventListener('click', () => {
    endScreen.classList.add('hidden');
    startScreen.classList.remove('hidden');
});