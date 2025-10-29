// ===============================================
// CONSTANTES E CONFIGURAÇÕES
// ===============================================
const CONFIG_DIFICULDADE = {
    facil: { nomeDisplay: 'Fácil', penalidadeDicaTempo: 5, pontuacaoBase: 20 },
    medio: { nomeDisplay: 'Médio', penalidadeDicaTempo: 10, pontuacaoBase: 15 },
    dificil: { nomeDisplay: 'Difícil', penalidadeDicaTempo: 15, pontuacaoBase: 10 }
};

const META_PONTOS = 100;

// Exemplo de Banco de Dados de Personagens (Você deve expandir este array)
const personagens = {
    facil: [
        { nome: "mario", dicas: ["Ele usa um boné vermelho.", "É encanador e vive no Reino Cogumelo.", "Tem um irmão chamado Luigi."], imagemUrl: "mario.jpg" },
    ],
    medio: [
        { nome: "link", dicas: ["Ele é um herói élfico.", "Ele carrega uma Master Sword.", "Seu mundo é Hyrule."], imagemUrl: "link.jpg" },
    ],
    dificil: [
        { nome: "samus", dicas: ["Ela usa um traje de poder futurista.", "Ela caça parasitas perigosos.", "Seu nome completo é Aran."], imagemUrl: "samus.jpg" },
    ]
};

// ===============================================
// VARIÁVEIS GLOBAIS DE ESTADO
// ===============================================
let pontuacao = 0;
let sequenciaAcertos = 0;
let nivelDificuldade = 'facil'; // Padrão
let personagemSecreto = null;
let tentativas = 0;
let dicaAtual = -1;
let tempoRestante = 60;
let cronometroInterval = null;
let nomeJogador = ''; // Definido na primeira tela

const personagensDisponiveis = { facil: [...personagens.facil], medio: [...personagens.medio], dificil: [...personagens.dificil] };
const personagensUsados = { facil: [], medio: [], dificil: [] };

// ===============================================
// VARIÁVEIS DO DOM (Elementos HTML)
// ===============================================
const telaBemVindo = document.getElementById('tela-bem-vindo');
const telaDificuldade = document.getElementById('tela-dificuldade');
const telaJogo = document.getElementById('tela-jogo');

const playerNameInput = document.getElementById('player-name-input');
const startNameBtn = document.getElementById('start-name-btn');
const difficultyBtns = document.querySelectorAll('.difficulty-btn');

const timerDisplay = document.getElementById('timer-display');
const dicaDisplay = document.getElementById('dica-display');
const personagemImagem = document.getElementById('personagem-imagem');
const guessInput = document.getElementById('guess-input');
const guessBtn = document.getElementById('guess-btn');
const pedirDicaBtn = document.getElementById('pedir-dica-btn');
const pularBtn = document.getElementById('pular-btn');
const reiniciarBtn = document.getElementById('reiniciar-btn');
const mensagem = document.getElementById('mensagem');
const dicaDots = document.querySelectorAll('.clue-progression .dot');
const dicaCostDisplay = document.getElementById('dica-cost');

const playerNameDisplay = document.getElementById('player-name-display');
const difficultyDisplay = document.getElementById('difficulty-display');
const scoreDisplay = document.getElementById('score-display');
const streakDisplay = document.getElementById('streak-display');
const streakScoreItem = document.getElementById('streak-score-item');
const feedbackIcon = document.getElementById('feedback-icon');

// ===============================================
// FUNÇÕES DE UTILIDADE E FLUXO
// ===============================================

/**
 * Funções de Controle de Tela
 */
function trocarTela(hideScreen, showScreen) {
    // 1. Esconde
    hideScreen.classList.remove('active');
    setTimeout(() => {
        hideScreen.classList.add('hidden');
    }, 400); 

    // 2. Mostra
    showScreen.classList.remove('hidden');
    setTimeout(() => {
        showScreen.classList.add('active');
        if (showScreen === telaJogo) {
            guessInput.focus();
        }
    }, 50); 
}

function iniciarCronometro() {
    clearInterval(cronometroInterval);
    tempoRestante = 60;
    timerDisplay.textContent = tempoRestante;
    
    cronometroInterval = setInterval(() => {
        tempoRestante--;
        timerDisplay.textContent = tempoRestante;

        if (tempoRestante <= 0) {
            clearInterval(cronometroInterval);
            finalizarRodada(false, 'O tempo esgotou! Tente mais uma vez.');
        }
    }, 1000);
}

function limparFeedbackRodada() {
    guessInput.value = '';
    mensagem.textContent = '';
    mensagem.className = '';
    guessInput.classList.remove('input-correct', 'input-incorrect');
    guessInput.disabled = false;
    feedbackIcon.classList.add('hidden');
    feedbackIcon.classList.remove('fa-check', 'fa-times', 'correct', 'incorrect');
}

/**
 * Atualiza o indicador visual de dicas (dots e custo).
 */
function atualizarIndicadorDicas() {
    const maxDicas = personagemSecreto.dicas ? personagemSecreto.dicas.length : 0; 
    const config = CONFIG_DIFICULDADE[nivelDificuldade] || CONFIG_DIFICULDADE.facil;
    
    // Lógica da Dica Gratuita (dicaAtual = -1 é o estado inicial, próxima dica é a 0)
    if (dicaAtual === -1) {
        dicaCostDisplay.textContent = 'GRÁTIS';
        dicaCostDisplay.classList.add('free'); 
    } else {
        dicaCostDisplay.textContent = `-${config.penalidadeDicaTempo}s`;
        dicaCostDisplay.classList.remove('free');
    }

    // Lógica dos Dots
    dicaDots.forEach((dot, index) => {
        dot.classList.remove('active', 'used');
        dot.style.display = index < maxDicas ? 'inline-block' : 'none'; 
        
        if (index <= dicaAtual) {
            dot.classList.add('used');
        } 
        // Desabilita o dot ativo, pois a dica atual já foi usada (vira 'used')
    });

    pedirDicaBtn.disabled = dicaAtual >= (maxDicas - 1);
}

/**
 * Função de Dica Completa (com penalidade e progressão visual)
 */
function mostrarDica() {
    if (!personagemSecreto.dicas || dicaAtual >= personagemSecreto.dicas.length - 1) return;

    const config = CONFIG_DIFICULDADE[nivelDificuldade];
    
    // --- Aplicação da Penalidade de Tempo ---
    // Penaliza o tempo a partir da **segunda** dica (dicaAtual >= 0)
    if (dicaAtual >= 0) { 
        tempoRestante = Math.max(1, tempoRestante - config.penalidadeDicaTempo); 
        timerDisplay.textContent = tempoRestante; 
    }
    
    dicaAtual++;
    
    if (dicaAtual < personagemSecreto.dicas.length) {
        dicaDisplay.textContent = `Pista ${dicaAtual + 1}: ${personagemSecreto.dicas[dicaAtual]}`;
        
        // Garante que a imagem esteja visível e com a URL correta
        personagemImagem.src = personagemSecreto.imagemUrl;
        personagemImagem.classList.remove('hidden', 'visual-clue', 'clue-level-1', 'clue-level-2', 'clue-level-3', 'reveal');

        // --- Progressão Visual da Pista ---
        personagemImagem.classList.add('visual-clue'); // Filtro base
        if (dicaAtual === 0) { 
            personagemImagem.classList.add('clue-level-1');
        } else if (dicaAtual === 1) { 
            personagemImagem.classList.add('clue-level-2');
        } else if (dicaAtual >= 2) { 
            personagemImagem.classList.add('clue-level-3');
        }
        
        atualizarIndicadorDicas(); 
    } 
}

// ===============================================
// LÓGICA DO JOGO PRINCIPAL
// ===============================================

function finalizarRodada(acertou, mensagemFinal) {
    clearInterval(cronometroInterval);

    guessInput.disabled = true;
    guessBtn.disabled = true;
    pedirDicaBtn.disabled = true;
    pularBtn.disabled = true;
    
    mensagem.textContent = mensagemFinal;
    reiniciarBtn.classList.remove('hidden');

    // Revela a imagem final
    personagemImagem.classList.add('reveal');
    personagemImagem.classList.remove('clue-level-1', 'clue-level-2', 'clue-level-3');

    if (acertou) {
        // Lógica de pontuação e sequência (Seu código original deve ser inserido aqui)
    } else {
        // Lógica de perda (Ex: zerar sequência)
        sequenciaAcertos = 0;
    }
    
    // Atualiza o HUD uma última vez
    scoreDisplay.textContent = pontuacao;
    streakDisplay.textContent = sequenciaAcertos;
}


function iniciarNovaRodada() {
    // 1. Controle de Repetição (Garante que sempre haja personagens)
    if (!personagensDisponiveis[nivelDificuldade] || personagensDisponiveis[nivelDificuldade].length === 0) {
        personagensDisponiveis[nivelDificuldade] = [...personagens[nivelDificuldade]];
        personagensUsados[nivelDificuldade] = [];
    }

    const personagensDoNivel = personagensDisponiveis[nivelDificuldade];
    const indiceAleatorio = Math.floor(Math.random() * personagensDoNivel.length);
    personagemSecreto = personagensDoNivel.splice(indiceAleatorio, 1)[0];
    personagensUsados[nivelDificuldade].push(personagemSecreto);

    // 2. Reset de Variáveis e UI
    tentativas = 0;
    dicaAtual = -1; 
    limparFeedbackRodada(); 
    
    guessBtn.classList.remove('hidden');
    reiniciarBtn.classList.add('hidden');
    pedirDicaBtn.style.display = 'block'; 
    pedirDicaBtn.disabled = false; 
    pularBtn.disabled = false; 
    
    dicaDisplay.textContent = 'Pista: Pressione "Pedir Dica" para iniciar a decodificação.';
    
    // --- Estado Inicial da Imagem ---
    personagemImagem.src = personagemSecreto.imagemUrl;
    personagemImagem.classList.add('hidden', 'visual-clue'); 
    personagemImagem.classList.remove('clue-level-1', 'clue-level-2', 'clue-level-3', 'reveal'); 
    
    // 3. ATUALIZAÇÃO DO PLACAR (HUD)
    if (sequenciaAcertos >= 2) {
        streakScoreItem.classList.remove('hidden');
    } else {
        streakScoreItem.classList.add('hidden');
    }
    streakDisplay.textContent = sequenciaAcertos;
    
    // Exibição de informações
    playerNameDisplay.textContent = nomeJogador;
    difficultyDisplay.textContent = CONFIG_DIFICULDADE[nivelDificuldade].nomeDisplay; 
    scoreDisplay.textContent = pontuacao;
    
    atualizarIndicadorDicas(); 
    guessInput.focus();
    iniciarCronometro();
}

// ===============================================
// INICIALIZAÇÃO DOS EVENTOS
// ===============================================

// TELA 1: Entrada do Nome
playerNameInput.addEventListener('input', () => {
    startNameBtn.disabled = playerNameInput.value.trim().length === 0;
});

startNameBtn.addEventListener('click', () => {
    nomeJogador = playerNameInput.value.trim();
    if (nomeJogador) {
        trocarTela(telaBemVindo, telaDificuldade);
    }
});

// TELA 2: Escolha de Dificuldade
difficultyBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        nivelDificuldade = e.target.dataset.level;
        trocarTela(telaDificuldade, telaJogo);
        iniciarNovaRodada();
    });
});

// Botões de Ação do Jogo
pedirDicaBtn.addEventListener('click', mostrarDica);
reiniciarBtn.addEventListener('click', iniciarNovaRodada);

// Exemplo de Ação de Adivinhar (A ser completada)
guessBtn.addEventListener('click', () => {
    const palpite = guessInput.value.trim().toLowerCase();
    const nomeSecreto = personagemSecreto.nome.toLowerCase();

    if (palpite === nomeSecreto) {
        finalizarRodada(true, `Parabéns, ${nomeJogador}! Você acertou! O personagem era ${personagemSecreto.nome}!`);
    } else {
        // Lógica de feedback de erro
        tentativas++;
        mensagem.textContent = 'Palpite incorreto. Tente novamente ou peça uma dica.';
        guessInput.classList.add('input-incorrect');
        setTimeout(() => guessInput.classList.remove('input-incorrect'), 500);
    }
    guessInput.value = '';
    guessInput.focus();
});