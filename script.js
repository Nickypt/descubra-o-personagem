// ===============================================
// CONSTANTES E CONFIGURAÇÕES
// ===============================================
const CONFIG_DIFICULDADE = {
    facil: { nomeDisplay: 'Nebulosa', penalidadeDicaTempo: 5, pontuacaoBase: 20 },
    medio: { nomeDisplay: 'Constelação', penalidadeDicaTempo: 10, pontuacaoBase: 15 },
    dificil: { nomeDisplay: 'Buraco Negro', penalidadeDicaTempo: 15, pontuacaoBase: 10 }
};

const MAX_ERROS = 5; // O jogador perde se errar esta quantidade de vezes
const META_PONTOS = 100; // Pontuação para ganhar o jogo

// Banco de Personagens Expandido
const personagens = {
    facil: [
        { nome: "mario", dicas: ["Ele usa um boné vermelho.", "É encanador e vive no Reino Cogumelo.", "Tem um irmão chamado Luigi."], imagemUrl: "mario.jpg" },
        { nome: "pikachu", dicas: ["É um pokémon elétrico.", "Seu treinador é o Ash.", "Seu grito é o seu nome."], imagemUrl: "pikachu.jpg" },
        { nome: "homem-aranha", dicas: ["Ele foi mordido por uma aranha radioativa.", "Seu lema é 'Com grandes poderes...'", "Seu alter ego é Peter Parker."], imagemUrl: "homem-aranha.jpg" },
        { nome: "buzz lightyear", dicas: ["Ele é um patrulheiro espacial.", "Seu lema é 'Ao infinito e além!'", "Ele não é um brinquedo."], imagemUrl: "buzz.jpg" },
        { nome: "batman", dicas: ["Ele é um vigilante de Gotham.", "Não tem superpoderes, mas é muito rico.", "Seu principal veículo é o Batmóvel."], imagemUrl: "batman.jpg" },
        { nome: "minion", dicas: ["É uma criatura amarela e pequena.", "Fala uma linguagem misturada e engraçada.", "Serve a um vilão chamado Gru."], imagemUrl: "minion.jpg" },
        { nome: "elsa", dicas: ["É uma rainha com poderes de gelo.", "Canta 'Let It Go'.", "Sua irmã se chama Anna."], imagemUrl: "elsa.jpg" },
        { nome: "spongebob", dicas: ["Ele vive numa casa de abacaxi no fundo do mar.", "Trabalha no Siri Cascudo.", "É amigo de Patrick."], imagemUrl: "spongebob.jpg" },
    ],
    medio: [
        { nome: "link", dicas: ["Ele é um herói élfico.", "Ele carrega uma Master Sword.", "Seu mundo é Hyrule."], imagemUrl: "link.jpg" },
        { nome: "sonic", dicas: ["É um ouriço azul.", "Seu inimigo é o Dr. Robotnik.", "Ele corre em super velocidade."], imagemUrl: "sonic.jpg" },
        { nome: "goku", dicas: ["Ele é um alienígena da raça Saiyajin.", "Ele busca esferas mágicas.", "Sua técnica principal é o Kamehameha."], imagemUrl: "goku.jpg" },
        { nome: "master chief", dicas: ["Ele é um supersoldado Spartan.", "Usa um capacete verde icônico.", "Ele luta contra o Covenant."], imagemUrl: "master-chief.jpg" },
        { nome: "aloy", dicas: ["Ela é uma caçadora de máquinas em um mundo pós-apocalíptico.", "É da tribo Nora.", "Usa um Focus para escanear a área."], imagemUrl: "aloy.jpg" },
        { nome: "luffy", dicas: ["Ele é um pirata com um chapéu de palha.", "Seu corpo é feito de borracha.", "Seu sonho é ser o Rei dos Piratas."], imagemUrl: "luffy.jpg" },
        { nome: "doomguy", dicas: ["Ele é um fuzileiro solitário e furioso.", "Luta contra demónios em Marte e no Inferno.", "Usa a motosserra e a BFG-9000."], imagemUrl: "doomguy.jpg" },
        { nome: "leia organa", dicas: ["Ela é uma princesa, general e senadora.", "Lidera a Aliança Rebelde.", "É irmã de Luke Skywalker."], imagemUrl: "leia.jpg" },
        { nome: "ezio auditore", dicas: ["Ele é um assassino italiano do Renascimento.", "Seu lema é 'Nada é verdade, tudo é permitido'.", "Usa uma lâmina oculta."], imagemUrl: "ezio.jpg" },
    ],
    dificil: [
        { nome: "samus", dicas: ["Ela usa um traje de poder futurista.", "Ela caça parasitas perigosos.", "Seu nome completo é Aran."], imagemUrl: "samus.jpg" },
        { nome: "kratos", dicas: ["Ele é o Fantasma de Esparta.", "Ele usa as Lâminas do Caos.", "Ele matou o deus da Guerra."], imagemUrl: "kratos.jpg" },
        { nome: "sub-zero", dicas: ["Ele é um ninja criomante.", "Ele pode congelar seus inimigos.", "Seu nome real é Bi-Han ou Kuai Liang."], imagemUrl: "sub-zero.jpg" },
        { nome: "ciri", dicas: ["Ela é uma princesa de Cintra.", "Tem o poder de viajar no espaço e tempo.", "Sua espada é chamada Zireael."], imagemUrl: "ciri.jpg" },
  { nome: "geralt de rivia", dicas: ["Ele é um 'Bruxo' caçador de monstros.", "Seus olhos são de gato (mutação).", "Bebe poções e usa sinais mágicos."], imagemUrl: "geralt.jpg" },
        { nome: "master yoda", dicas: ["Ele é um mestre Jedi.", "É pequeno e muito, muito velho.", "Sua forma de falar é incomum."], imagemUrl: "yoda.jpg" },
        { nome: "chell", dicas: ["Ela é uma cobaia humana numa instalação de testes.", "Usa um dispositivo que cria portais.", "Luta contra uma IA chamada GLaDOS."], imagemUrl: "chell.jpg" },
        { nome: "arthas menethil", dicas: ["Ele foi um paladino que se tornou um necromante.", "Empunha a espada Frostmourne.", "Seu título final é o Rei Lich."], imagemUrl: "arthas.jpg" },
        { nome: "sephiroth", dicas: ["Ele era o SOLDIER mais poderoso da Shinra.", "Sua espada é uma Masamune.", "É o principal antagonista de Cloud."], imagemUrl: "sephiroth.jpg" },
    ]
};

// ===============================================
// VARIÁVEIS GLOBAIS DE ESTADO
// ===============================================
let pontuacao = 0;
let sequenciaAcertos = 0;
let nivelDificuldade = 'facil'; 
let personagemSecreto = null;
let errosCometidos = 0; 
let dicaAtual = -1; 
let tempoRestante = 60;
let cronometroInterval = null;
let nomeJogador = ''; 

const personagensDisponiveis = { 
    facil: [...personagens.facil], 
    medio: [...personagens.medio], 
    dificil: [...personagens.dificil] 
};
const personagensUsados = { facil: [], medio: [], dificil: [] };

// ===============================================
// VARIÁVEIS DO DOM
// ===============================================
const telaBemVindo = document.getElementById('tela-bem-vindo');
const telaDificuldade = document.getElementById('tela-dificuldade');
const telaJogo = document.getElementById('tela-jogo');
const telaFimDeJogo = document.getElementById('tela-fim-de-jogo'); 
const telaVitoria = document.getElementById('tela-vitoria'); 

const playerNameInput = document.getElementById('player-name-input');
const startNameBtn = document.getElementById('start-name-btn');
const difficultyBtns = document.querySelectorAll('.difficulty-btn');

const timerDisplay = document.getElementById('timer-display');
const tentativasDisplay = document.getElementById('tentativas-display'); 
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

const scoreDisplay = document.getElementById('score-display');
// Elementos das telas finais
const finalPlayerNameVitoria = document.getElementById('final-player-name-vitoria');
const finalScoreVitoria = document.getElementById('final-score-vitoria');
const finalPlayerNameDerrota = document.getElementById('final-player-name-derrota');
const finalScoreDerrota = document.getElementById('final-score-derrota');
const finalMessageDerrota = document.getElementById('final-message-derrota');


// ===============================================
// FUNÇÕES DE FLUXO DE JOGO
// ===============================================

function trocarTela(hideScreen, showScreen) {
    hideScreen.classList.remove('active');
    hideScreen.classList.add('hidden');

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
    timerDisplay.innerHTML = `<i class="far fa-hourglass-half"></i> ${tempoRestante}`; 
    
    cronometroInterval = setInterval(() => {
        tempoRestante--;
        timerDisplay.innerHTML = `<i class="far fa-hourglass-half"></i> ${tempoRestante}`;

        if (tempoRestante <= 0) {
            clearInterval(cronometroInterval);
            encerrarJogo('tempo'); // Derrota por tempo
        }
    }, 1000);
}

function limparFeedbackRodada() {
    guessInput.value = '';
    mensagem.textContent = '';
    mensagem.className = 'message'; 
    guessInput.classList.remove('input-correct', 'input-incorrect');
    guessInput.disabled = false;
    // Remove o feedback do ícone (mantido na versão anterior)
    const feedbackIcon = document.getElementById('feedback-icon'); 
    if (feedbackIcon) {
        feedbackIcon.classList.add('hidden');
        feedbackIcon.classList.remove('fa-check-circle', 'fa-times-circle', 'correct', 'incorrect');
    }
}


function atualizarIndicadorDicas() {
    const maxDicas = personagemSecreto.dicas ? personagemSecreto.dicas.length : 0; 
    const config = CONFIG_DIFICULDADE[nivelDificuldade] || CONFIG_DIFICULDADE.facil;
    
    if (dicaAtual === -1) {
        dicaCostDisplay.textContent = 'GRÁTIS';
        dicaCostDisplay.classList.add('free'); 
    } else {
        dicaCostDisplay.textContent = `-${config.penalidadeDicaTempo}s`;
        dicaCostDisplay.classList.remove('free');
    }

    dicaDots.forEach((dot, index) => {
        dot.classList.remove('active', 'used');
        dot.style.display = index < maxDicas ? 'inline-block' : 'none'; 
        
        if (index <= dicaAtual) {
            dot.classList.add('used'); 
        }
        
        if (index === dicaAtual + 1 && index < maxDicas) {
            dot.classList.add('active'); 
        }
    });

    pedirDicaBtn.disabled = dicaAtual >= (maxDicas - 1);
}

function mostrarDica() {
    if (!personagemSecreto.dicas || dicaAtual >= personagemSecreto.dicas.length - 1) return;

    const config = CONFIG_DIFICULDADE[nivelDificuldade];
    
    if (dicaAtual >= 0) { 
        tempoRestante = Math.max(1, tempoRestante - config.penalidadeDicaTempo); 
        timerDisplay.innerHTML = `<i class="far fa-hourglass-half"></i> ${tempoRestante}`;
    }
    
    dicaAtual++;
    
    if (dicaAtual < personagemSecreto.dicas.length) {
        dicaDisplay.innerHTML = `<i class="fas fa-microchip"></i> Pista ${dicaAtual + 1}: ${personagemSecreto.dicas[dicaAtual]}`;
        
        personagemImagem.src = personagemSecreto.imagemUrl;
        personagemImagem.classList.remove('hidden', 'clue-level-1', 'clue-level-2', 'clue-level-3', 'reveal');
        
        if (!personagemImagem.classList.contains('visual-clue')) {
             personagemImagem.classList.add('visual-clue'); 
        }
        
        personagemImagem.classList.remove('clue-level-1', 'clue-level-2', 'clue-level-3');
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

function finalizarRodada(acertou, mensagemFinal) {
    clearInterval(cronometroInterval);

    guessInput.disabled = true;
    guessBtn.disabled = true;
    pedirDicaBtn.disabled = true;
    pularBtn.disabled = true;
    
    reiniciarBtn.classList.remove('hidden');

    personagemImagem.classList.add('reveal');
    personagemImagem.classList.remove('visual-clue', 'clue-level-1', 'clue-level-2', 'clue-level-3');
    personagemImagem.classList.remove('hidden'); 

    if (acertou) {
        const config = CONFIG_DIFICULDADE[nivelDificuldade];
        let pontosGanhos = config.pontuacaoBase + Math.floor(tempoRestante / 10);
        
        if (sequenciaAcertos >= 1) {
            pontosGanhos += 5 * sequenciaAcertos; 
        }
        
        pontuacao += pontosGanhos;
        sequenciaAcertos++;
        errosCometidos = 0; 
        
        mensagem.classList.add('correct');
        mensagem.innerHTML = `<i class="fas fa-check-circle"></i> SUCESSO! ${mensagemFinal} (+${pontosGanhos} pts)`;
        
        if (pontuacao >= META_PONTOS) {
            setTimeout(() => {
                encerrarJogo('vitoria');
            }, 2000); 
            return;
        }

    } else {
        sequenciaAcertos = 0;
        mensagem.classList.add('incorrect');
        mensagem.innerHTML = `<i class="fas fa-times-circle"></i> FALHA! ${mensagemFinal}`;
    }
    
    scoreDisplay.textContent = pontuacao;
    // O item streak score está escondido ou visível conforme a lógica (não incluída aqui, mas pode ser adicionada se necessário)
    const streakScoreItem = document.getElementById('streak-score-item');
    if(streakScoreItem) streakScoreItem.classList.toggle('hidden', sequenciaAcertos < 2);
    
    const streakDisplay = document.getElementById('streak-display');
    if(streakDisplay) streakDisplay.textContent = sequenciaAcertos;
    
    tentativasDisplay.textContent = `Tentativas Erradas: ${errosCometidos}/${MAX_ERROS}`;
}

function encerrarJogo(tipo) {
    clearInterval(cronometroInterval);
    trocarTela(telaJogo, (tipo === 'vitoria' ? telaVitoria : telaFimDeJogo));

    if (tipo === 'vitoria') {
        finalPlayerNameVitoria.textContent = nomeJogador;
        finalScoreVitoria.textContent = pontuacao;
        
    } else {
        finalPlayerNameDerrota.innerHTML = `Cadete <span style="color: #e74c3c;">${nomeJogador}</span>`;
        finalScoreDerrota.textContent = pontuacao;

        if (tipo === 'tempo') {
            finalMessageDerrota.textContent = 'O cronômetro do sistema expirou! Você falhou em identificar o alvo a tempo.';
        } else if (tipo === 'erros') {
            finalMessageDerrota.textContent = `Você excedeu o limite de ${MAX_ERROS} tentativas incorretas. Sua codificação foi comprometida.`;
        }
    }
}

function iniciarNovaRodada() {
    const personagensDoNivel = personagens[nivelDificuldade];
    if (personagensDisponiveis[nivelDificuldade].length === 0) {
        personagensDisponiveis[nivelDificuldade] = [...personagensDoNivel];
        personagensUsados[nivelDificuldade] = [];
    }

    const disponiveis = personagensDisponiveis[nivelDificuldade];
    const indiceAleatorio = Math.floor(Math.random() * disponiveis.length);
    personagemSecreto = disponiveis.splice(indiceAleatorio, 1)[0];
    personagensUsados[nivelDificuldade].push(personagemSecreto);

    dicaAtual = -1; 
    limparFeedbackRodada(); 
    
    reiniciarBtn.classList.add('hidden');
    pedirDicaBtn.disabled = false; 
    pularBtn.disabled = false; 
    
    dicaDisplay.innerHTML = `<i class="fas fa-microchip"></i> Transmissão: Pressione "Pedir Decodificação" para obter a primeira pista.`;
    tentativasDisplay.textContent = `Tentativas Erradas: ${errosCometidos}/${MAX_ERROS}`;
    
    personagemImagem.src = personagemSecreto.imagemUrl;
    personagemImagem.classList.add('hidden', 'visual-clue'); 
    personagemImagem.classList.remove('clue-level-1', 'clue-level-2', 'clue-level-3', 'reveal'); 
    
    const playerNameDisplay = document.getElementById('player-name-display');
    const difficultyDisplay = document.getElementById('difficulty-display');
    if(playerNameDisplay) playerNameDisplay.textContent = nomeJogador;
    if(difficultyDisplay) difficultyDisplay.textContent = CONFIG_DIFICULDADE[nivelDificuldade].nomeDisplay; 
    
    scoreDisplay.textContent = pontuacao;
    
    atualizarIndicadorDicas(); 
    guessInput.focus();
    iniciarCronometro();
}

// ===============================================
// INICIALIZAÇÃO DOS EVENTOS
// ===============================================

playerNameInput.addEventListener('input', () => {
    startNameBtn.disabled = playerNameInput.value.trim().length === 0;
});

startNameBtn.addEventListener('click', () => {
    nomeJogador = playerNameInput.value.trim();
    if (nomeJogador) {
        trocarTela(telaBemVindo, telaDificuldade);
    }
});

difficultyBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        nivelDificuldade = e.target.dataset.level;
        trocarTela(telaDificuldade, telaJogo);
        iniciarNovaRodada();
    });
});

pedirDicaBtn.addEventListener('click', mostrarDica);
reiniciarBtn.addEventListener('click', iniciarNovaRodada);
pularBtn.addEventListener('click', () => {
    finalizarRodada(false, `Missão abortada. O alvo era ${personagemSecreto.nome}.`);
});


guessBtn.addEventListener('click', () => {
    const palpite = guessInput.value.trim().toLowerCase();
    
    if (palpite.length === 0) return;

    const nomeSecreto = personagemSecreto.nome.toLowerCase();

    const feedbackIcon = document.getElementById('feedback-icon');

    if (palpite === nomeSecreto) {
        feedbackIcon.classList.remove('hidden', 'fa-times-circle', 'incorrect');
        feedbackIcon.classList.add('fa-check-circle', 'correct');
        guessInput.classList.add('input-correct');
        
        finalizarRodada(true, `Alvo ${personagemSecreto.nome} identificado!`);
    } else {
        errosCometidos++; 
        
        if (errosCometidos >= MAX_ERROS) {
            setTimeout(() => {
                encerrarJogo('erros');
            }, 500); 
            return;
        }

        feedbackIcon.classList.remove('hidden', 'fa-check-circle', 'correct');
        feedbackIcon.classList.add('fa-times-circle', 'incorrect');
        guessInput.classList.add('input-incorrect');
        
        mensagem.textContent = 'Palpite incorreto. Reavalie a decodificação ou solicite mais dados.';
        tentativasDisplay.textContent = `Tentativas Erradas: ${errosCometidos}/${MAX_ERROS}`;

        setTimeout(() => {
            guessInput.classList.remove('input-incorrect');
            feedbackIcon.classList.add('hidden');
        }, 800);
    }
    guessInput.value = '';
    guessInput.focus();
});