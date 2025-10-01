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
        { nome: "Jack Sparrow", dicas: ["Ele é um pirata carismático, com um jeito de andar e falar únicos.", "Capitão do navio Pérola Negra, ele está sempre procurando tesouros e evitando a Companhia das Índias Orientais."], imagemUrl: "https://i.com/gK1kFpY.jpeg" },
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

// NOVO: CUSTO DAS DICAS (ponto de custo para cada dica)
// A primeira dica (dicaAtual=0) tem o custo da posição 0 no array, que é 0.
const CUSTO_DICAS = [0, 5, 15]; // Custo da 1ª, 2ª, 3ª dica

// NOVO: CONQUISTAS DO JOGO
const CONQUISTAS = {
    firstWin: { id: 'firstWin', nome: 'Primeira Vitória', descricao: 'Vencer o jogo pela primeira vez.', icon: '🏆' },
    speedster: { id: 'speedster', nome: 'Velocista', descricao: 'Acertar um personagem em 1 tentativa.', icon: '⚡' },
    streakMaster: { id: 'streakMaster', nome: 'Mestre da Sequência', descricao: 'Alcançar 3 ou mais acertos seguidos.', icon: '🔥' },
    hardcore: { id: 'hardcore', nome: 'Hardcore', descricao: 'Vencer o jogo na dificuldade Difícil.', icon: '💀' }
};

let personagemSecreto = {};
let tentativas = 0;
let pontuacao = 0;
let dicaAtual = -1;
let nomeJogador = "";
let tempoRestante = TEMPO_MAXIMO;
let timer;
let nivelDificuldade = "";
let sequenciaAcertos = 0;

// Variáveis para controle de repetição
let personagensDisponiveis = {};
let personagensUsados = {};

// NOVO: Variável para rastrear as conquistas desbloqueadas
let conquistasDesbloqueadas = {};


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

// ELEMENTOS DE INTERAÇÃO NOVOS/MELHORADOS
const circularTimer = document.getElementById('circular-timer');
const timerDisplay = document.getElementById('timer-display'); 
const dificuldadeDisplay = document.getElementById('dificuldade-display');
const pularBtn = document.getElementById('pularBtn'); 
const streakIcon = document.getElementById('streak-icon'); 
const streakFeedback = document.getElementById('streak-feedback'); 
const sequenciaVitoriasDisplay = document.getElementById('sequencia-vitorias-display');

// Novos elementos do Leaderboard e Conquistas
const leaderboardList = document.getElementById('leaderboard-list');
const badgesContainer = document.getElementById('badges-container');

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
const changeDifficultyBtn = document.getElementById('change-difficulty-btn'); 

// Efeitos Sonoros (Certifique-se de ter os arquivos)
const somAcerto = document.getElementById('somAcerto');
const somErro = document.getElementById('somErro');
const somVitoria = document.getElementById('somVitoria');
const somTimerAcelerado = document.getElementById('somTimerAcelerado'); 
const somSequencia = document.getElementById('somSequencia'); 


function playSound(sound) {
    // Tenta carregar e tocar o som, ignorando erros se o arquivo não existir
    sound.currentTime = 0;
    sound.play().catch(e => { /* console.error("Erro ao tocar áudio:", e); */ }); 
}

// --- FUNÇÕES DE UTENSÍLIO ---

// Algoritmo para verificar proximidade de palavras (Distância de Levenshtein)
function levenshteinDistance(a, b) {
    if (a.length === 0) return b.length;
    if (b.length === 0) return a.length;
    let matrix = [];
    for (let i = 0; i <= b.length; i++) {
        matrix[i] = [i];
    }
    for (let j = 0; j <= a.length; j++) {
        matrix[0][j] = j;
    }
    for (let i = 1; i <= b.length; i++) {
        for (let j = 1; j <= a.length; j++) {
            if (b.charAt(i - 1) === a.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(matrix[i - 1][j - 1] + 1, 
                                        Math.min(matrix[i][j - 1] + 1, 
                                                 matrix[i - 1][j] + 1));
            }
        }
    }
    return matrix[b.length][a.length];
}

// --- LÓGICA DE CONQUISTAS ---
function carregarConquistas() {
    try {
        const stored = localStorage.getItem('playerConquistas');
        conquistasDesbloqueadas = stored ? JSON.parse(stored) : {};
        renderizarConquistas();
    } catch (e) {
        conquistasDesbloqueadas = {};
    }
}

function desbloquearConquista(id) {
    if (!conquistasDesbloqueadas[id]) {
        conquistasDesbloqueadas[id] = true;
        localStorage.setItem('playerConquistas', JSON.stringify(conquistasDesbloqueadas));
        renderizarConquistas();
        alert(`🏆 CONQUISTA DESBLOQUEADA: ${CONQUISTAS[id].nome}!`);
    }
}

function renderizarConquistas() {
    // Garante que o elemento existe antes de tentar manipular
    if (!badgesContainer) return; 
    
    badgesContainer.innerHTML = '<h3>Suas Conquistas</h3>';
    let count = 0;
    for (const id in CONQUISTAS) {
        if (conquistasDesbloqueadas[id]) {
            const badge = document.createElement('span');
            badge.className = 'badge';
            badge.title = CONQUISTAS[id].descricao;
            // Usando ícone do Font Awesome, pois o HTML não renderiza emojis no alert
            badge.innerHTML = `<i class="fas fa-medal"></i> ${CONQUISTAS[id].nome}`; 
            badgesContainer.appendChild(badge);
            count++;
        }
    }
    if (count === 0) {
        badgesContainer.innerHTML += '<p style="font-size:0.9em; color:#aaa;">Nenhuma conquista ainda. Jogue para desbloquear!</p>';
    }
}

// --- LÓGICA DE LEADERBOARD ---
function carregarLeaderboard() {
    try {
        const stored = localStorage.getItem('gameLeaderboard');
        return stored ? JSON.parse(stored) : [];
    } catch (e) {
        return [];
    }
}

function salvarPontuacao(nome, pontos, dificuldade) {
    // Só salva pontuações positivas
    if (pontos <= 0) return; 
    
    let leaderboard = carregarLeaderboard();
    leaderboard.push({ nome, pontos, dificuldade, data: new Date().toLocaleDateString() });
    
    // Filtra e classifica por pontos (maior para menor)
    leaderboard.sort((a, b) => b.pontos - a.pontos);
    
    // Mantém apenas o Top 100 para evitar sobrecarregar o localStorage
    const topLeaderboard = leaderboard.slice(0, 100); 

    localStorage.setItem('gameLeaderboard', JSON.stringify(topLeaderboard));
}

function renderizarLeaderboard() {
    // Garante que o elemento existe antes de tentar manipular
    if (!leaderboardList) return; 
    
    const leaderboard = carregarLeaderboard();
    leaderboardList.innerHTML = '';
    
    // Top 5 global para exibição
    const top5 = leaderboard.slice(0, 5); 

    if (top5.length === 0) {
        leaderboardList.innerHTML = '<li>Nenhuma pontuação registrada ainda.</li>';
        return;
    }

    top5.forEach((item, index) => {
        const li = document.createElement('li');
        // Usa a primeira letra da dificuldade
        const diffChar = item.dificuldade.toUpperCase().charAt(0);
        li.innerHTML = `
            <span>#${index + 1} ${item.nome} (${diffChar})</span>
            <span>${item.pontos} PONTOS</span>
        `;
        leaderboardList.appendChild(li);
    });
}


// --- FUNÇÕES PRINCIPAIS DO JOGO ---

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
    // --- LÓGICA DE NÃO REPETIÇÃO INÍCIO ---
    if (!personagensDisponiveis[nivelDificuldade] || personagensDisponiveis[nivelDificuldade].length === 0) {
        personagensDisponiveis[nivelDificuldade] = personagensUsados[nivelDificuldade] || [];
        if (personagensDisponiveis[nivelDificuldade].length === 0) {
            personagensDisponiveis[nivelDificuldade] = [...personagens[nivelDificuldade]];
        }
        personagensUsados[nivelDificuldade] = [];
    }

    const personagensDoNivel = personagensDisponiveis[nivelDificuldade];
    const indiceAleatorio = Math.floor(Math.random() * personagensDoNivel.length);
    
    personagemSecreto = personagensDoNivel.splice(indiceAleatorio, 1)[0];
    personagensUsados[nivelDificuldade].push(personagemSecreto);
    // --- LÓGICA DE NÃO REPETIÇÃO FIM ---

    tentativas = 0;
    dicaAtual = -1;
    inputPalpite.value = '';
    
    // Limpeza de feedback visual
    inputPalpite.classList.remove('close-guess', 'correct-guess');
    mensagem.textContent = '';
    mensagem.className = '';
    
    btnEnviar.classList.remove('hidden');
    btnReiniciar.classList.add('hidden');
    btnEnviar.disabled = false;
    
    btnPedirDica.style.display = 'inline-block';
    btnPedirDica.disabled = false; // Reabilita o botão para a nova rodada
    
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
    const nomeSecreto = personagemSecreto.nome.toLowerCase();
    
    // Limpa classes de feedback de acerto/quase acerto
    inputPalpite.classList.remove('close-guess', 'correct-guess');

    if (palpite === '') {
        mensagem.textContent = 'Por favor, digite um nome de personagem.';
        return;
    }

    feedbackIcon.classList.add('hidden'); 
    feedbackIcon.classList.remove('fa-check', 'fa-times', 'correct', 'incorrect');

    tentativas++;

    if (palpite === nomeSecreto) {
        const pontosGanhos = calcularPontos();
        const bonusTempo = calcularBonusTempo(tempoRestante);
        sequenciaAcertos++;
        let bonusSequencia = 0;
        let mensagemSequencia = "";

        // --- NOVO: VERIFICAÇÃO DE CONQUISTAS (NO ACERTO) ---
        if (tentativas === 1) {
            desbloquearConquista('speedster');
        }
        if (sequenciaAcertos >= 3) {
            desbloquearConquista('streakMaster');
        }
        // --- FIM VERIFICAÇÃO DE CONQUISTAS ---

        if (sequenciaAcertos >= 2) {
            bonusSequencia = 5 * sequenciaAcertos;
            mensagemSequencia = `Você está em uma sequência de ${sequenciaAcertos} acertos! Bônus: ${bonusSequencia} pontos.`;
        }
        
        const totalPontos = pontosGanhos + bonusTempo + bonusSequencia;
        
        atualizarPontuacao(totalPontos);
        
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
        inputPalpite.classList.add('correct-guess'); // Feedback visual de acerto

        personagemImagem.src = personagemSecreto.imagemUrl;
        personagemImagem.classList.remove('hidden');
        
        inputPalpite.value = ''; // Limpa o input após o acerto

        fimDeRodada("acerto");
    } else {
        sequenciaAcertos = 0; 
        sequenciaVitoriasDisplay.textContent = `Sequência: 0`; 
        streakIcon.classList.add('hidden');
        
        feedbackIcon.classList.remove('hidden');
        feedbackIcon.classList.add('incorrect', 'fa-times');
        
        mensagem.textContent = 'Incorreto. Tente novamente!';
        mensagem.className = 'lose-message shake';
        playSound(somErro);

        // --- NOVO: EFEITO DE "DIGITE CERTO" (QUASE ACERTO) ---
        const distancia = levenshteinDistance(palpite, nomeSecreto);
        // Distância <= 2 E o nome deve ter pelo menos 4 letras para ser relevante
        if (distancia <= 2 && nomeSecreto.length > 3) { 
            mensagem.textContent = `Palpite Incorreto. Mas você está no caminho certo!`;
            inputPalpite.classList.add('close-guess');
        }
        // --- FIM EFEITO "DIGITE CERTO" ---

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
            inputPalpite.value = '';
            fimDeRodada("erro");
        }
    }
}

function mostrarDica() {
    
    // O próximo índice de dica é dicaAtual + 1. Se for 0, é a primeira (custo 0).
    const proximoIndiceDica = dicaAtual + 1;
    
    if (proximoIndiceDica >= CUSTO_DICAS.length) {
        btnPedirDica.disabled = true;
        mensagem.textContent = 'Todas as dicas foram usadas!';
        mensagem.className = 'lose-message';
        return;
    }
    
    // --- NOVO: VERIFICAÇÃO DE CUSTO ---
    const custo = CUSTO_DICAS[proximoIndiceDica];
    
    if (custo > 0 && pontuacao < custo) {
        mensagem.textContent = `Pontuação insuficiente! Você precisa de ${custo} pontos para a próxima dica.`;
        mensagem.className = 'lose-message';
        return;
    }
    
    if (custo > 0) {
        atualizarPontuacao(-custo); // Deduz o custo
        mensagem.textContent = `Dica comprada! ${custo} pontos deduzidos.`;
        mensagem.className = 'lose-message';
    }
    // --- FIM DA VERIFICAÇÃO DE CUSTO ---

    dicaAtual++;
    
    feedbackIcon.classList.add('hidden');
    feedbackIcon.classList.remove('fa-check', 'fa-times', 'correct', 'incorrect');
    
    if (dicaAtual < personagemSecreto.dicas.length) {
        divDica.innerHTML = `<p>${personagemSecreto.dicas[dicaAtual]}</p>`;
        atualizarIndicadorDicas();
        
        // Desabilita o botão se for a ÚLTIMA DICA E NÃO TIVER MAIS CUSTOS DEFINIDOS
        if (dicaAtual === personagemSecreto.dicas.length - 1 || proximoIndiceDica >= CUSTO_DICAS.length - 1) {
            btnPedirDica.disabled = true;
            mensagem.textContent = 'Última dica, agora é sua chance!';
            mensagem.className = '';
        } else {
             btnPedirDica.disabled = false;
        }

    } else {
        // Isso não deve ser atingido se a verificação de custo for bem feita, mas é um fallback
        divDica.innerHTML = '';
        btnPedirDica.disabled = true;
        mensagem.textContent = 'Nenhuma dica disponível.';
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
    
    // A penalidade é baseada em quantas DICAS foram reveladas (dicaAtual + 1)
    const penalidadeDica = (dicaAtual + 1) * 2; 
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

    btnEnviar.classList.add('hidden');
    btnReiniciar.classList.remove('hidden');
    
    // Remove o feedback visual do input
    inputPalpite.classList.remove('close-guess', 'correct-guess');

    streakIcon.classList.add('hidden'); 

    if (pontuacao >= META_PONTOS) {
        fimDeJogoTotal("vitoria");
    } else if (resultado === "erro" && tentativas >= 3) {
        btnReiniciar.textContent = 'Próximo Personagem';
    } else if (resultado === "acerto" || resultado === "pulado") {
         btnReiniciar.textContent = 'Próximo Personagem';
    } else {
        // Se pontuação não atingiu a meta e foi por tempo, chama fimDeJogoTotal
        fimDeJogoTotal("derrota");
    }
}

function fimDeJogoTotal(resultado) {
    clearInterval(timer);
    gameScreen.classList.add('hidden');
    endScreen.classList.remove('hidden');
    
    endContainer.classList.remove('win', 'lose');
    endIcon.classList.remove('fa-trophy', 'fa-sad-cry', 'fa-clock');
    
    document.querySelectorAll('.confetti-piece').forEach(confetti => confetti.remove());

    // --- NOVO: LÓGICA DE PLACAR E CONQUISTAS NA TELA FINAL ---
    salvarPontuacao(nomeJogador, pontuacao, nivelDificuldade);
    renderizarLeaderboard();

    if (resultado === "vitoria") {
        endTitle.textContent = "Parabéns, Você Venceu!";
        endIcon.classList.add('fa-trophy', 'win');
        endContainer.classList.add('win');
        endMessage.textContent = `Você atingiu a meta de ${META_PONTOS} pontos e terminou com ${pontuacao} pontos!`;
        playSound(somVitoria);
        
        // Desbloqueia a conquista de vitória
        desbloquearConquista('firstWin');
        if (nivelDificuldade === 'dificil') {
            desbloquearConquista('hardcore');
        }
        
        // Efeito Confetti
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
            
            const iconHTML = `<i class="fas fa-clock time-up-icon"></i>`;
            endMessage.innerHTML = `${iconHTML} O tempo esgotou! O personagem era "${personagemSecreto.nome}". ${iconHTML} Você terminou com ${pontuacao} pontos.`;
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


// --- LÓGICA DO TIMER CIRCULAR ---
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

function iniciarNovoJogoCompleto() {
    pontuacao = 0;
    sequenciaAcertos = 0;
    
    personagensDisponiveis[nivelDificuldade] = [...personagens[nivelDificuldade]];
    personagensUsados[nivelDificuldade] = [];
    
    metaTexto.textContent = `Meta: ${META_PONTOS}`;
    pontuacaoTexto.textContent = `Pontos: ${pontuacao}`;
    sequenciaVitoriasDisplay.textContent = `Sequência: 0`; 
    iniciarNovaRodada();
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

btnReiniciar.addEventListener('click', () => {
    iniciarNovaRodada();
});

btnEnviar.addEventListener('click', verificarPalpite);
btnPedirDica.addEventListener('click', mostrarDica);

// LÓGICA DO BOTÃO PULAR RODADA
pularBtn.addEventListener('click', () => {
    if (timer) {
        clearInterval(timer);
    }
    
    const pontosPerdidos = PENALIDADE_PULAR; 
    
    atualizarPontuacao(-pontosPerdidos);
    sequenciaAcertos = 0; 
    streakIcon.classList.add('hidden');
    
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
        if (!btnReiniciar.classList.contains('hidden')) {
            btnReiniciar.click(); 
        } 
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
    
    personagensDisponiveis = {};
    personagensUsados = {};
});

changeDifficultyBtn.addEventListener('click', () => {
    endScreen.classList.add('hidden');
    difficultyScreen.classList.remove('hidden');
    pontuacao = 0;
    sequenciaAcertos = 0;
    
    personagensDisponiveis = {};
    personagensUsados = {};
});


// Inicialização ao carregar o DOM
document.addEventListener('DOMContentLoaded', () => {
    // Carrega as conquistas salvas do jogador
    carregarConquistas();
    // Adiciona o listener para o feedback visual enquanto o usuário digita
    inputPalpite.addEventListener('input', () => {
        const palpite = inputPalpite.value.trim().toLowerCase();
        const nomeSecreto = personagemSecreto.nome ? personagemSecreto.nome.toLowerCase() : '';
        
        // Limpa a classe de acerto, pois o input mudou
        inputPalpite.classList.remove('correct-guess'); 

        if (nomeSecreto && palpite.length >= 2) {
            const distancia = levenshteinDistance(palpite, nomeSecreto);
            // Verifica se está muito próximo, mas ainda não acertou
            if (distancia <= 2 && palpite !== nomeSecreto) { 
                inputPalpite.classList.add('close-guess');
            } else {
                inputPalpite.classList.remove('close-guess');
            }
        } else {
            inputPalpite.classList.remove('close-guess');
        }
    });
});