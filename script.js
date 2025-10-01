// Dicionário de personagens por nível de dificuldade (Mantido)
const personagens = {
    facil: [
        { nome: "Mario", dicas: ["Ele é um encanador italiano do Reino Cogumelo.", "Ele pula em inimigos e come cogumelos para crescer."], imagemUrl: "https://i.imgur.com/7gK5J5S.jpeg" },
        { nome: "Homem de Ferro", dicas: ["Ele é um inventor e bilionário excêntrico.", "Usa uma armadura de alta tecnologia para combater o crime e salvar o mundo."], imagemUrl: "https://i.imgur.com/mRzR28g.jpeg" },
        { nome: "Goku", dicas: ["É um dos últimos Saiyajins, um guerreiro do Planeta Vegeta.", "Sua técnica principal é o Kamehameha, e ele pode se transformar em Super Saiyajin."], imagemUrl: "https://i.imgur.com/fVq6X0k.jpeg" },
        { nome: "Darth Vader", dicas: ["É um dos vilões mais icônicos do cinema, com uma respiração pesada e robótica.", "Ele é um Lorde Sith, conhecido por ser o principal executor do Império Galáctico."], imagemUrl: "https://i.imgur.com/rS2a88U.jpeg" },
        { nome: "Homem Aranha", dicas: ["Ele é um jovem fotógrafo que foi picado por um aracnídeo radioativo.", "Seus poderes incluem teias que ele atira dos pulsos e um 'sentido aranha' que o alerta sobre perigos."], imagemUrl: "https://i.imgur.com/bWkQ2oZ.jpeg" },
        { nome: "Batman", dicas: ["Ele é um bilionário que combate o crime em Gotham City.", "Não tem superpoderes, mas usa tecnologia e gadgets avançados."], imagemUrl: "https://i.imgur.com/Kx3u45L.jpeg" },
        { nome: "Mickey Mouse", dicas: ["Ele é um rato falante e o mascote principal da Disney.", "Sua namorada é a Minnie e ele é frequentemente visto com luvas brancas grandes."], imagemUrl: "https://i.imgur.com/8Q9l27o.jpeg" },
        { nome: "Pikachu", dicas: ["Ele é um rato elétrico de cor amarela, e a criatura mais famosa de sua franquia.", "Seu ataque mais conhecido é o Choque do Trovão."], imagemUrl: "https://i.imgur.com/qR8Wn9T.jpeg" },
        { nome: "Harry Potter", dicas: ["Ele é um bruxo que sobreviveu à Maldição da Morte quando bebê, deixando uma cicatriz em forma de raio.", "Ele estuda em Hogwarts e seu patrono é um cervo."], imagemUrl: "https://i.imgur.com/7y3x8pY.jpeg" },
        { nome: "Homer Simpson", dicas: ["Ele é um pai de família gordo e careca, que trabalha em uma usina nuclear.", "Suas frases mais famosas são 'D'oh!' e 'Mmm, donuts...'."], imagemUrl: "https://i.imgur.com/d9j3L5x.jpeg" },
        { nome: "Superman", dicas: ["Ele é um alienígena do planeta Krypton que usa uma capa vermelha e uma roupa azul.", "Seus poderes incluem voar, super força e visão de calor."], imagemUrl: "https://i.imgur.com/w2Yv19X.jpeg" },
        { nome: "Woody", dicas: ["Ele é um caubói de brinquedo com uma cordinha nas costas.", "Ele é o brinquedo favorito de Andy e sempre lidera os outros brinquedos."], imagemUrl: "https://i.imgur.com/0iK0Z5r.jpeg" },
    ],
    medio: [
        { nome: "Capitão América", dicas: ["Ele é um super-soldado da Segunda Guerra Mundial, que foi congelado no tempo.", "Seu principal acessório é um escudo indestrutível feito de vibranium."], imagemUrl: "https://i.imgur.com/J8Yl00H.jpeg" },
        { nome: "Jack Sparrow", dicas: ["Ele é um pirata carismático, com um jeito de andar e falar únicos.", "Capitão do navio Pérola Negra, ele está sempre procurando tesouros e evitando a Companhia das Índias Orientais."], imagemUrl: "https://i.imgur.com/gK1kFpY.jpeg" },
        { nome: "Elsa", dicas: ["Ela é uma rainha que nasceu com poderes de gelo e neve.", "Sua música tema mais famosa é 'Let it Go', e seu castelo é feito de gelo."], imagemUrl: "https://i.imgur.com/39wF4y8.jpeg" },
        { nome: "Mulher Maravilha", dicas: ["Ela é uma princesa guerreira de Themyscira, uma ilha oculta.", "Seu principal acessório é o Laço da Verdade, que força as pessoas a dizerem a verdade."], imagemUrl: "https://i.imgur.com/z0J6t8Y.jpeg" },
        { nome: "SpongeBob SquarePants", dicas: ["É uma criatura amarela que mora em um abacaxi, no fundo do mar.", "Seu melhor amigo é uma estrela do mar, e ele trabalha no Siri Cascudo."], imagemUrl: "https://i.imgur.com/q7N6y0w.jpeg" },
        { nome: "Optimus Prime", dicas: ["Ele é o líder dos Autobots.", "Seu corpo se transforma em um caminhão, e sua frase mais famosa é 'Autobots, roll out!'."], imagemUrl: "https://i.imgur.com/p8b6Q1c.jpeg" },
        { nome: "Lara Croft", dicas: ["Ela é uma arqueóloga britânica aventureira.", "Frequentemente usa duas pistolas e explora tumbas perigosas ao redor do mundo."], imagemUrl: "https://i.imgur.com/A6j4X4G.jpeg" },
        { nome: "Sonic", dicas: ["Ele é um ouriço azul super-rápido.", "Seu objetivo principal é deter o Dr. Eggman e coletar anéis de ouro."], imagemUrl: "https://i.imgur.com/B9tE9lP.jpeg" },
        { nome: "Deadpool", dicas: ["Ele é um anti-herói mercenário com um uniforme vermelho e preto, que fala sem parar.", "Ele tem a capacidade de quebrar a quarta parede e tem um fator de cura regenerativo."], imagemUrl: "https://i.imgur.com/gO0w1yL.jpeg" },
        { nome: "Zelda", dicas: ["Ela é a princesa do Reino de Hyrule, frequentemente alvo do vilão Ganon.", "Ela usa a Triforce da Sabedoria, e muitas vezes é quem orienta o herói Link."], imagemUrl: "https://i.imgur.com/n1x2u8M.jpeg" },
        { nome: "Sub-Zero", dicas: ["Ele é um lutador de Mortal Kombat, conhecido por sua roupa azul e por ter poderes gélidos.", "Seu ataque mais famoso é congelar seus oponentes."], imagemUrl: "https://i.imgur.com/5J3k8wP.jpeg" },
        { nome: "Buzz Lightyear", dicas: ["Ele é um patrulheiro espacial de brinquedo que inicialmente pensava ser real.", "Sua frase de efeito é 'Ao infinito e além!'."], imagemUrl: "https://i.imgur.com/q8y4R1P.jpeg" },
    ],
    dificil: [
        { nome: "Frodo Bolseiro", dicas: ["Ele é um hobbit, uma criatura pequena que vive em um lugar chamado o Condado.", "Sua missão é destruir um anel mágico e poderoso em uma montanha de fogo."], imagemUrl: "https://i.imgur.com/QhXoB2i.jpeg" },
        { nome: "Luffy", dicas: ["Ele é o capitão do bando do Chapéu de Palha.", "Seu corpo se tornou de borracha após ele comer uma fruta do diabo."], imagemUrl: "https://i.imgur.com/p1zPq1L.jpeg" },
        { nome: "Link", dicas: ["Ele é um herói da série 'The Legend of Zelda'.", "Normalmente usa uma túnica verde e carrega uma espada e um escudo, sendo o portador da Triforce da Coragem."], imagemUrl: "https://i.imgur.com/3h8Q45z.jpeg" },
        { nome: "Sherlock Holmes", dicas: ["É um detetive particular britânico, conhecido por sua grande inteligência e observação.", "Vive na Rua Baker, 221B, em Londres, e é acompanhado por seu amigo Dr. Watson."], imagemUrl: "https://i.imgur.com/dK3f0bS.jpeg" },
        { nome: "Gandalf", dicas: ["Ele é um mago poderoso, membro da Ordem de Istari.", "Guia os hobbits, anões e humanos em uma missão para derrotar um grande mal."], imagemUrl: "https://i.imgur.com/lM3Lp8U.jpeg" },
        { nome: "Peter Pan", dicas: ["Ele é um menino que se recusa a crescer e mora em uma ilha mágica.", "Voa com a ajuda de pó de fada e é amigo de uma pequena fada chamada Sininho."], imagemUrl: "https://i.imgur.com/e2N6B4l.jpeg" },
        { nome: "Kratos", dicas: ["Ele é um guerreiro espartano que se tornou o Deus da Guerra.", "Originalmente, ele buscava vingança contra os deuses gregos, usando as Lâminas do Caos."], imagemUrl: "https://i.imgur.com/K0g9n0N.jpeg" },
        { nome: "Ellen Ripley", dicas: ["É uma sobrevivente e tenente que se tornou heroína em um filme de ficção científica espacial.", "Ela é conhecida por lutar contra criaturas alienígenas hostis usando um Power Loader."], imagemUrl: "https://i.imgur.com/4qJgL3e.jpeg" },
        { nome: "Geralt de Rivia", dicas: ["Ele é um mutante conhecido como Lobo Branco, que caça monstros por dinheiro.", "Ele carrega duas espadas nas costas, uma de aço e outra de prata, e usa 'Sinais' (magias)."], imagemUrl: "https://i.imgur.com/Xw0z2gA.jpeg" },
        { nome: "Aloy", dicas: ["Ela é uma caçadora pária em um mundo pós-apocalíptico dominado por máquinas animais.", "Ela usa um dispositivo chamado 'Foco' para escanear inimigos e é uma arqueira habilidosa."], imagemUrl: "https://i.imgur.com/7j8Gz2d.jpeg" },
        { nome: "Coragem", dicas: ["Ele é um cachorro rosa e medroso que mora com seus donos em um lugar chamado 'Lugar Nenhum'.", "Apesar do medo, ele sempre salva seus donos de ameaças sobrenaturais."], imagemUrl: "https://i.imgur.com/2s3F4qI.jpeg" },
        { nome: "T-800", dicas: ["É um ciborgue assassino com esqueleto de metal e coberto por tecido vivo.", "Sua missão original era exterminar uma mulher chamada Sarah Connor. Sua frase de efeito é 'I'll be back'."], imagemUrl: "https://i.imgur.com/uF9dJ7v.jpeg" },
    ]
};

const META_PONTOS = 100;
const TEMPO_MAXIMO = 60;
const PENALIDADE_PULAR = 10; 

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
const btnEnviar = document.getElementById('enviarPalpiteBtn'); // Botão Adivinhar
const mensagem = document.getElementById('mensagem');
const btnReiniciar = document.getElementById('reiniciarBtn'); // Botão Próximo Personagem
const btnPedirDica = document.getElementById('pedirDicaBtn');
const divDica = document.getElementById('dica');
const personagemImagem = document.getElementById('personagem-imagem');
const pontuacaoTexto = document.getElementById('pontuacao');
const metaTexto = document.getElementById('meta');
const playerNameDisplay = document.getElementById('player-name-display');

// ELEMENTOS DE INTERAÇÃO NOVOS/MELHORADOS
const circularTimer = document.getElementById('circular-timer');
const timerDisplay = document.getElementById('timer-display'); 
const dificuldadeDisplay = document.getElementById('dificuldade-display');
const pularBtn = document.getElementById('pularBtn'); 
const streakIcon = document.getElementById('streak-icon'); 
const streakFeedback = document.getElementById('streak-feedback'); 
// NOVO: Exibir contagem numérica de sequência de acertos
const sequenciaVitoriasDisplay = document.getElementById('sequencia-vitorias-display');

// Elementos para o novo feedback visual
const dicaDots = [
    document.getElementById('dica1-dot'),
    document.getElementById('dica2-dot'),
    document.getElementById('dica3-dot')
];
const feedbackIcon = document.getElementById('feedback-icon');

// Elementos da tela de fim de jogo
const endTitle = document.getElementById('end-title');
const endIcon = document.getElementById('end-icon');
const endMessage = document.getElementById('end-message');
const endContainer = document.getElementById('end-container');
const playAgainBtn = document.getElementById('play-again-btn');
const changeDifficultyBtn = document.getElementById('change-difficulty-btn'); // O botão é pego do HTML
// O botão de dificuldade já foi adicionado no HTML, então não precisamos criá-lo aqui

// Efeitos Sonoros
const somAcerto = document.getElementById('somAcerto');
const somErro = document.getElementById('somErro');
const somVitoria = document.getElementById('somVitoria');
const somTimerAcelerado = document.getElementById('somTimerAcelerado'); 
const somSequencia = document.getElementById('somSequencia'); 


function playSound(sound) {
    sound.currentTime = 0;
    sound.play().catch(e => console.error("Erro ao tocar áudio:", e)); 
}

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
    
    // NOVO: Esconde o botão de Próximo e mostra o de Adivinhar
    btnEnviar.classList.remove('hidden');
    btnReiniciar.classList.add('hidden');
    
    btnEnviar.disabled = false;
    btnPedirDica.style.display = 'inline-block';
    btnPedirDica.disabled = false;
    
    pularBtn.disabled = false; 
    divDica.innerHTML = '<p>Toque em "Pedir Dica" para começar!</p>';
    personagemImagem.src = '';
    personagemImagem.classList.add('hidden');
    
    feedbackIcon.classList.add('hidden');
    feedbackIcon.classList.remove('fa-check', 'fa-times', 'correct', 'incorrect');

    if (sequenciaAcertos >= 2) {
        streakIcon.classList.remove('hidden');
        streakIcon.textContent = `🔥 x${sequenciaAcertos}`;
    } else {
        streakIcon.classList.add('hidden');
    }
    
    // ATUALIZADO: Exibe a sequência de acertos atualizada no placar
    sequenciaVitoriasDisplay.textContent = `Sequência: ${sequenciaAcertos}`; 

    atualizarIndicadorDicas();
    playerNameDisplay.textContent = `Olá, ${nomeJogador}!`;
    dificuldadeDisplay.textContent = `Nível: ${nivelDificuldade.charAt(0).toUpperCase() + nivelDificuldade.slice(1)}`;
    inputPalpite.focus();
    iniciarCronometro();
}

function atualizarPontuacao(pontosGanhos) {
    pontuacao = Math.max(0, pontuacao + pontosGanhos);
    pontuacaoTexto.textContent = `Pontos: ${pontuacao}`;
}

function verificarPalpite() {
    const palpite = inputPalpite.value.trim().toLowerCase();
    inputPalpite.value = '';

    if (palpite === '') {
        mensagem.textContent = 'Por favor, digite um nome de personagem.';
        return;
    }

    feedbackIcon.classList.add('hidden'); 
    feedbackIcon.classList.remove('fa-check', 'fa-times', 'correct', 'incorrect');

    tentativas++;

    if (palpite === personagemSecreto.nome.toLowerCase()) {
        const pontosGanhos = calcularPontos();
        const bonusTempo = calcularBonusTempo(tempoRestante);
        sequenciaAcertos++;
        let bonusSequencia = 0;
        let mensagemSequencia = "";

        if (sequenciaAcertos >= 2) {
            bonusSequencia = 5 * sequenciaAcertos;
            mensagemSequencia = `Você está em uma sequência de ${sequenciaAcertos} acertos! Bônus: ${bonusSequencia} pontos.`;
        }
        
        const totalPontos = pontosGanhos + bonusTempo + bonusSequencia;
        
        atualizarPontuacao(totalPontos);
        
        // ATUALIZADO: Atualiza a contagem no placar após um acerto
        sequenciaVitoriasDisplay.textContent = `Sequência: ${sequenciaAcertos}`; 

        mensagem.innerHTML = `Parabéns, ${nomeJogador}! Você acertou em ${tentativas} tentativa(s) e ganhou ${pontosGanhos} pontos.`;
        
        if (bonusTempo > 0) {
            mensagem.innerHTML += `<br>Bônus de tempo: ${bonusTempo} pontos!`;
        }
        
        if (bonusSequencia > 0) {
            mensagem.innerHTML += `<br>${mensagemSequencia}`;
            streakFeedback.textContent = "ÓTIMO ACERTO!";
            streakFeedback.classList.remove('hidden');
            setTimeout(() => { streakFeedback.classList.add('hidden'); }, 1500);
            playSound(somSequencia);
        }
        
        mensagem.innerHTML += `<br>Total: ${totalPontos} pontos.`;
        mensagem.className = 'win-message';
        playSound(somAcerto);
        
        feedbackIcon.classList.remove('hidden');
        feedbackIcon.classList.add('correct', 'fa-check');

        personagemImagem.src = personagemSecreto.imagemUrl;
        personagemImagem.classList.remove('hidden');

        fimDeRodada("acerto");
    } else {
        mensagem.textContent = 'Incorreto. Tente novamente!';
        mensagem.className = 'lose-message shake';
        playSound(somErro);
        sequenciaAcertos = 0; 
        
        // ATUALIZADO: Zera a contagem no placar após um erro
        sequenciaVitoriasDisplay.textContent = `Sequência: 0`; 
        
        streakIcon.classList.add('hidden');
        
        feedbackIcon.classList.remove('hidden');
        feedbackIcon.classList.add('incorrect', 'fa-times');

        setTimeout(() => {
            mensagem.classList.remove('shake');
            feedbackIcon.classList.add('hidden'); 
            feedbackIcon.classList.remove('incorrect', 'fa-times');
        }, 800);

        if (tentativas >= 3) {
            mensagem.textContent = `Você esgotou suas 3 tentativas. O personagem era "${personagemSecreto.nome}".`;
            mensagem.className = 'lose-message';
            personagemImagem.src = personagemSecreto.imagemUrl;
            personagemImagem.classList.remove('hidden');
            feedbackIcon.classList.add('hidden');
            feedbackIcon.classList.remove('incorrect', 'fa-times');
            fimDeRodada("erro");
        }
    }
}

function mostrarDica() {
    dicaAtual++;
    
    feedbackIcon.classList.add('hidden');
    feedbackIcon.classList.remove('fa-check', 'fa-times', 'correct', 'incorrect');
    
    if (dicaAtual < personagemSecreto.dicas.length) {
        divDica.innerHTML = `<p>${personagemSecreto.dicas[dicaAtual]}</p>`;
        atualizarIndicadorDicas();
    } else {
        divDica.innerHTML = '';
        personagemImagem.src = personagemSecreto.imagemUrl;
        personagemImagem.classList.remove('hidden');
        personagemImagem.onerror = function() {
            this.src = 'https://i.imgur.com/kYq3Q0L.jpeg';
            mensagem.textContent = "A imagem não foi carregada. Tente adivinhar com as dicas!";
        };
        btnPedirDica.disabled = true;
        mensagem.textContent = 'Última dica, agora é sua chance!';
        mensagem.className = '';
    }
}

function calcularPontos() {
    let pontos = 0;
    if (tentativas === 1) {
        pontos = 10;
    } else if (tentativas === 2) {
        pontos = 5;
    } else if (tentativas >= 3) {
        pontos = 2;
    }
    
    const penalidadeDica = dicaAtual * 2;
    pontos = Math.max(0, pontos - penalidadeDica);
    
    if (nivelDificuldade === 'medio') pontos *= 1.5;
    if (nivelDificuldade === 'dificil') pontos *= 2;

    return Math.round(pontos);
}

function calcularBonusTempo(tempo) {
    if (tempo >= 50) return 10;
    if (tempo >= 40) return 8;
    if (tempo >= 30) return 5;
    if (tempo >= 20) return 3;
    if (tempo >= 10) return 1;
    return 0;
}

function fimDeRodada(resultado) {
    clearInterval(timer);
    btnEnviar.disabled = true;
    btnPedirDica.disabled = true;
    btnPedirDica.style.display = 'none';
    pularBtn.disabled = true;

    // NOVO: Esconde o botão de Adivinhar e mostra o de Próximo
    btnEnviar.classList.add('hidden');
    btnReiniciar.classList.remove('hidden');

    streakIcon.classList.add('hidden'); 

    if (pontuacao >= META_PONTOS) {
        fimDeJogoTotal("vitoria");
    } else if (resultado === "erro" && tentativas >= 3) {
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
    endIcon.classList.remove('fa-trophy', 'fa-sad-cry', 'fa-clock');
    
    document.querySelectorAll('.confetti-piece').forEach(confetti => confetti.remove());

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
        
        if (resultado === "time-up") {
            endTitle.innerHTML = `Tempo Esgotado! <i class="fas fa-hourglass-end time-up-icon"></i>`;
            endIcon.classList.remove('fa-sad-cry');
            endIcon.classList.add('fa-clock', 'lose'); 
            
            const iconHTML = `<i class="fas fa-clock time-up-icon"></i><i class="fas fa-hourglass-half time-up-icon"></i>`;
            endMessage.innerHTML = `${iconHTML} O relógio não perdoa! Você não conseguiu adivinhar a tempo. O personagem era "${personagemSecreto.nome}". ${iconHTML} Você terminou com ${pontuacao} pontos.`;
        }
    }
}

function perderPorTempo() {
    clearInterval(timer);
    personagemImagem.src = personagemSecreto.imagemUrl;
    personagemImagem.classList.remove('hidden');
    feedbackIcon.classList.add('hidden');
    
    mensagem.textContent = `Acelera, ${nomeJogador}! O tempo esgotou antes que você conseguisse adivinhar. O personagem era "${personagemSecreto.nome}".`;
    mensagem.className = 'lose-message';
    
    fimDeJogoTotal("time-up"); 
}


// --- LÓGICA DO TIMER CIRCULAR (Mantida) ---
function atualizarCronometro() {
    tempoRestante--;
    
    const porcentagemUsada = ((TEMPO_MAXIMO - tempoRestante) / TEMPO_MAXIMO) * 100;
    const graus = porcentagemUsada * 3.6; 
    
    let corPrimaria = '#b11010'; 
    let corSecundaria = '#303030'; 

    if (tempoRestante <= 10) {
        corPrimaria = '#ff0000'; 
        circularTimer.classList.add('danger');
        
        if (tempoRestante === 9) { 
            playSound(somTimerAcelerado);
        }
    } else {
        circularTimer.classList.remove('danger');
    }

    circularTimer.style.background = `conic-gradient(
        ${corSecundaria} ${graus}deg,
        ${corPrimaria} ${graus}deg
    )`;

    timerDisplay.textContent = tempoRestante;

    if (tempoRestante <= 0) {
        perderPorTempo();
    }
}

function iniciarCronometro() {
    clearInterval(timer);
    tempoRestante = TEMPO_MAXIMO;
    timerDisplay.textContent = tempoRestante;
    
    circularTimer.style.background = `conic-gradient(
        #303030 0deg,
        #b11010 0deg
    )`;
    
    circularTimer.classList.remove('danger');
    timer = setInterval(atualizarCronometro, 1000);
}

// --- Event Listeners ---
startBtn.addEventListener('click', () => {
    nomeJogador = nameInput.value.trim() || "Jogador";
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
    // ATUALIZADO: Resetar a sequência no placar ao iniciar um jogo novo
    sequenciaVitoriasDisplay.textContent = `Sequência: 0`; 
    iniciarNovaRodada();
}

// BOTÃO REINICIAR/PRÓXIMO PERSONAGEM agora chama iniciarNovaRodada
btnReiniciar.addEventListener('click', () => {
    iniciarNovaRodada();
});

btnEnviar.addEventListener('click', verificarPalpite);
btnPedirDica.addEventListener('click', mostrarDica);

// CORREÇÃO: LÓGICA DO BOTÃO PULAR RODADA
pularBtn.addEventListener('click', () => {
    if (timer) {
        clearInterval(timer);
    }
    
    const pontosPerdidos = PENALIDADE_PULAR; 
    
    atualizarPontuacao(-pontosPerdidos);
    sequenciaAcertos = 0; 
    streakIcon.classList.add('hidden');
    
    // ATUALIZADO: Zera a contagem no placar após pular
    sequenciaVitoriasDisplay.textContent = `Sequência: 0`; 
    
    personagemImagem.src = personagemSecreto.imagemUrl;
    personagemImagem.classList.remove('hidden');
    
    mensagem.textContent = `Rodada pulada! Você perdeu ${pontosPerdidos} pontos. O personagem era "${personagemSecreto.nome}".`;
    mensagem.className = 'lose-message';
    
    btnReiniciar.textContent = 'Próximo Personagem';
    fimDeRodada("pulado"); 
});


inputPalpite.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        // Se o botão 'Próximo Personagem' estiver visível (após acerto/erro), clique nele
        if (!btnReiniciar.classList.contains('hidden')) {
            btnReiniciar.click(); 
        } 
        // Se o botão 'Adivinhar' estiver visível, chame a função verificarPalpite
        else if (!btnEnviar.classList.contains('hidden')) {
            verificarPalpite();
        }
    }
});

playAgainBtn.addEventListener('click', () => {
    endScreen.classList.add('hidden');
    startScreen.classList.remove('hidden');
    pontuacao = 0;
    sequenciaAcertos = 0;
});

changeDifficultyBtn.addEventListener('click', () => {
    endScreen.classList.add('hidden');
    difficultyScreen.classList.remove('hidden');
    pontuacao = 0;
    sequenciaAcertos = 0;
});