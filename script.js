// ===============================================
// CONSTANTES E VARIÁVEIS GLOBAIS
// ===============================================

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
        { nome: "Gandalf", dicas: ["Ele é um mago poderoso, membro da Ordem de Istari.", "Guia os hobbits, anões e humanos em uma missão para derrotar um grande mal."], imagemUrl: "https://i.imgur.com/lM3Lp8G.jpeg" },
        { nome: "Peter Pan", dicas: ["Ele é um menino que se recusa a crescer e mora em uma ilha mágica.", "Voa com a ajuda de pó de fada e é amigo de uma pequena fada chamada Sininho."], imagemUrl: "https://i.imgur.com/e2N6B4l.jpeg" },
        { nome: "Kratos", dicas: ["Ele é um guerreiro espartano que se tornou o Deus da Guerra.", "Originalmente, ele buscava vingança contra os deuses gregos, usando as Lâminas do Caos."], imagemUrl: "https://i.imgur.com/K0g9n0N.jpeg" },
        { nome: "Ellen Ripley", dicas: ["É uma sobrevivente e tenente que se tornou heroína em um filme de ficção científica espacial.", "Ela é conhecida por lutar contra criaturas alienígenas hostis usando um Power Loader."], imagemUrl: "https://i.imgur.com/4qJgL3e.jpeg" },
        { nome: "Geralt de Rivia", dicas: ["Ele é um mutante conhecido como Lobo Branco, que caça monstros por dinheiro.", "Ele carrega duas espadas nas costas, uma de aço e outra de prata, e usa 'Sinais' (magias).."], imagemUrl: "https://i.imgur.com/Xw0z2gA.jpeg" },
        { nome: "Aloy", dicas: ["Ela é uma caçadora pária em um mundo pós-apocalíptico dominado por máquinas animais.", "Ela usa um dispositivo chamado 'Foco' para escanear inimigos e é uma arqueira habilidosa."], imagemUrl: "https://i.imgur.com/7j8Gz2d.jpeg" },
        { nome: "Coragem", dicas: ["Ele é um cachorro rosa e medroso que mora com seus donos em um lugar chamado 'Lugar Nenhum'.", "Apesar do medo, ele sempre salva seus donos de ameaças sobrenaturais."], imagemUrl: "https://i.imgur.com/2s3F4uI.jpeg" },
        { nome: "T-800", dicas: ["É um ciborgue assassino com esqueleto de metal e coberto por tecido vivo.", "Sua missão original era exterminar uma mulher chamada Sarah Connor. Sua frase de efeito é 'I'll be back'."], imagemUrl: "https://i.imgur.com/uF9dJ7v.jpeg" },
    ]
};

// NOVO: Objeto de Configuração Centralizada
const CONFIG_DIFICULDADE = {
    facil: { 
        tempo: 60, 
        multiplicadorPontos: 1.0, 
        penalidadeDica: 3, 
        nomeDisplay: "Fácil (Planeta Verde)" 
    },
    medio: { 
        tempo: 45, 
        multiplicadorPontos: 1.5, 
        penalidadeDica: 5, 
        nomeDisplay: "Médio (Nebulosa Amarela)" 
    },
    dificil: { 
        tempo: 30, 
        multiplicadorPontos: 2.0, 
        penalidadeDica: 8, 
        nomeDisplay: "Difícil (Buraco Negro)" 
    }
};

const META_PONTOS = 100;
const PENALIDADE_PULAR = 5; 

let personagemSecreto = {};
let tentativas = 0;
let pontuacao = 0;
let dicaAtual = -1;
let nomeJogador = "";
let tempoRestante = 0;
let timer;
let nivelDificuldade = "";
let sequenciaAcertos = 0;
let maiorSequencia = 0;

let personagensDisponiveis = {}; 
let personagensUsados = {}; 

// Mock de Áudio 
const somAcerto = { play: () => console.log("Sound: Acerto"), currentTime: 0 };
const somErro = { play: () => console.log("Sound: Erro"), currentTime: 0 };
const somVitoria = { play: () => console.log("Sound: Vitória"), currentTime: 0 };
const somTimerAcelerado = { play: () => console.log("Sound: Timer Acelerado"), currentTime: 0 };
const somSequencia = { play: () => console.log("Sound: Sequência"), currentTime: 0 };


// ===============================================
// ELEMENTOS DO DOM
// ===============================================

// Elementos das telas
const startScreen = document.getElementById('start-screen');
const difficultyScreen = document.getElementById('difficulty-screen');
const gameScreen = document.getElementById('game-screen');
const endScreen = document.getElementById('end-screen');

// Elementos da tela de início
const startBtn = document.getElementById('start-btn');
const nameInput = document.getElementById('player-name-input');
const difficultyOptions = document.querySelectorAll('.difficulty-card');

// Elementos da tela de dificuldade
const selectDifficultyBtn = document.getElementById('select-difficulty-btn');

// Elementos da tela de jogo
const guessInput = document.getElementById('guess-input'); 
const guessBtn = document.getElementById('guess-btn'); 
const mensagem = document.getElementById('mensagem');
const reiniciarBtn = document.getElementById('reiniciarBtn');
const pedirDicaBtn = document.getElementById('pedirDicaBtn');
const dicaDisplay = document.getElementById('dica');
const personagemImagem = document.getElementById('personagem-imagem');
const scoreDisplay = document.getElementById('score-display'); 
const metaDisplay = document.getElementById('meta-display'); 
// IDs ATUALIZADOS PARA O NOVO HUD
const playerNameDisplay = document.getElementById('player-name-text'); 
const difficultyDisplay = document.getElementById('difficulty-level-text'); 
const timerRing = document.getElementById('timer-ring');
const timerDisplay = document.getElementById('timer-display');
const pularBtn = document.getElementById('pularBtn');
const feedbackIcon = document.getElementById('feedback-icon');
const streakDisplay = document.getElementById('streak-display');
const streakFeedback = document.getElementById('streak-feedback'); 
const dicaDots = document.querySelectorAll('.progresso-dot');
const streakScoreItem = document.getElementById('streak-score-item'); 

// Elementos da tela de fim de jogo
const endTitle = document.getElementById('end-title');
const endIcon = document.querySelector('.end-icon');
const endMessage = document.getElementById('end-message');
const endContainer = document.querySelector('.end-container');
const finalScore = document.getElementById('final-score');
const finalStreak = document.getElementById('final-streak');
const playAgainBtn = document.getElementById('play-again-btn');
const changeDifficultyBtn = document.getElementById('change-difficulty-btn');


// ===============================================
// FUNÇÕES DE UTILIDADE
// ===============================================

function playSound(sound) {
    sound.currentTime = 0;
    try {
        // sound.play(); 
    } catch(e) {
        console.error("Erro ao tocar áudio (mock):", e);
    }
}

function atualizarIndicadorDicas() {
    // CORREÇÃO: Garante que o maxDicas use o array do personagem e não um valor fixo
    const maxDicas = personagemSecreto.dicas ? personagemSecreto.dicas.length : 0; 

    dicaDots.forEach((dot, index) => {
        dot.classList.remove('active', 'used');
        // CORREÇÃO: Garante que os pontos de progresso sejam exibidos corretamente
        dot.style.display = index < maxDicas ? 'inline-block' : 'none';

        if (index < dicaAtual) {
            dot.classList.add('used');
        } else if (index === dicaAtual) {
            dot.classList.add('active');
        }
    });

    // Desabilita o botão se não houver mais dicas
    pedirDicaBtn.disabled = dicaAtual >= (maxDicas - 1);
}

function mostrarDica() {
    if (!personagemSecreto.dicas || dicaAtual >= personagemSecreto.dicas.length - 1) return;

    // CORREÇÃO: Penalidade de tempo ao pedir dica (melhoria de UX/gameplay)
    tempoRestante = Math.max(1, tempoRestante - 5); 
    
    dicaAtual++;
    
    if (dicaAtual < personagemSecreto.dicas.length) {
        dicaDisplay.textContent = `Pista ${dicaAtual + 1}: ${personagemSecreto.dicas[dicaAtual]}`;
        atualizarIndicadorDicas();
    } 
}

// ===============================================
// LÓGICA DO JOGO PRINCIPAL
// ===============================================

function iniciarNovaRodada() {
    // 1. Controle de Repetição (Garante que todos os personagens sejam usados antes de repetir)
    if (!personagensDisponiveis[nivelDificuldade] || personagensDisponiveis[nivelDificuldade].length === 0) {
        // CORREÇÃO: A lógica estava sobrepondo, agora garante que se não houver mais, repopula a lista.
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
    guessInput.value = '';
    mensagem.textContent = '';
    mensagem.className = '';
    
    // 3. Reset de Visuais e Botões (Incluindo Input Feedback)
    guessBtn.classList.remove('hidden');
    reiniciarBtn.classList.add('hidden');
    guessBtn.disabled = false;
    
    // CORREÇÃO: Limpa classes de feedback do input para a nova rodada
    guessInput.classList.remove('input-correct', 'input-incorrect');
    guessInput.disabled = false; 
    
    pedirDicaBtn.style.display = 'block'; 
    pedirDicaBtn.disabled = false; 
    pularBtn.disabled = false; 
    
    dicaDisplay.textContent = 'Pista: Pressione "Pedir Dica" para iniciar a decodificação.';
    personagemImagem.src = '';
    personagemImagem.classList.add('hidden');
    
    feedbackIcon.classList.add('hidden');
    feedbackIcon.classList.remove('fa-check', 'fa-times', 'correct', 'incorrect');
    streakFeedback.classList.add('hidden');

    // 4. Atualização do Placar
    if (sequenciaAcertos >= 2) {
        streakScoreItem.classList.remove('hidden');
        streakDisplay.textContent = sequenciaAcertos;
    } else {
        streakScoreItem.classList.add('hidden');
        streakDisplay.textContent = '0';
    }
    
    // ATUALIZADO: Usando os novos IDs do HUD
    playerNameDisplay.textContent = nomeJogador;
    difficultyDisplay.textContent = CONFIG_DIFICULDADE[nivelDificuldade].nomeDisplay; 
    
    atualizarIndicadorDicas();
    guessInput.focus();
    iniciarCronometro();
}

function atualizarPontuacao(pontosGanhos) {
    pontuacao = Math.max(0, pontuacao + pontosGanhos);
    scoreDisplay.textContent = pontuacao;
}

function verificarPalpite() {
    // CORREÇÃO: Tratamento para o nome secreto, garantindo que o palpite do usuário seja sempre limpo.
    const nomeSecretoNormalizado = personagemSecreto.nome.toLowerCase().replace(/[^a-z0-9]/g, '');
    const palpiteNormalizado = guessInput.value.trim().toLowerCase().replace(/[^a-z0-9]/g, '');

    if (palpiteNormalizado === '') {
        mensagem.textContent = 'Por favor, digite um nome de personagem.';
        return;
    }

    feedbackIcon.classList.add('hidden'); 
    
    // CORREÇÃO: Garante que a classe 'shake' seja removida se o palpite anterior deu erro.
    mensagem.classList.remove('shake'); 
    guessInput.classList.remove('input-incorrect');
    guessInput.disabled = false; // Reabilita para a próxima tentativa (se for erro)

    if (palpiteNormalizado === nomeSecretoNormalizado) {
        const pontosGanhos = calcularPontos();
        const bonusTempo = calcularBonusTempo(tempoRestante);
        sequenciaAcertos++;
        maiorSequencia = Math.max(maiorSequencia, sequenciaAcertos);
        
        let bonusSequencia = 0;
        
        // Lógica de Pontuação Exponencial da Sequência (MANTIDA)
        if (sequenciaAcertos >= 2) {
            if (sequenciaAcertos === 2) {
                bonusSequencia = 15; 
            } else if (sequenciaAcertos === 3) {
                bonusSequencia = 40; 
            } else if (sequenciaAcertos === 4) {
                bonusSequencia = 70;
            } else { 
                bonusSequencia = 70 + (sequenciaAcertos - 4) * 30;
            }
        }
        
        const totalPontos = pontosGanhos + bonusTempo + bonusSequencia;
        atualizarPontuacao(totalPontos);
        
        mensagem.innerHTML = `Parabéns! Você acertou em ${tentativas + 1} tentativa(s) e ganhou ${pontosGanhos} pontos.`;
        if (bonusTempo > 0) { mensagem.innerHTML += `<br>Bônus de tempo: +${bonusTempo} pontos!`; }
        if (bonusSequencia > 0) {
            mensagem.innerHTML += `<br>**SEQUÊNCIA X${sequenciaAcertos}**: +${bonusSequencia} pontos!`;
            streakFeedback.textContent = `+${bonusSequencia} BÔNUS DE SEQUÊNCIA!`;
            streakFeedback.classList.remove('hidden');
            setTimeout(() => { streakFeedback.classList.add('hidden'); }, 1500);
            playSound(somSequencia);
        }
        
        mensagem.innerHTML += `<br>Total: **${totalPontos}** pontos.`;
        mensagem.className = 'win-message';
        playSound(somAcerto);
        
        feedbackIcon.classList.remove('hidden');
        feedbackIcon.classList.add('correct', 'fa-check');
        
        // Feedback visual do input
        guessInput.classList.add('input-correct');
        guessInput.disabled = true; 

        personagemImagem.src = personagemSecreto.imagemUrl;
        personagemImagem.classList.remove('hidden');

        fimDeRodada("acerto");
    } else {
        // Lógica para palpite incorreto
        tentativas++;
        sequenciaAcertos = 0; 
        streakScoreItem.classList.add('hidden');

        if (tentativas >= 3) {
            // Fim da rodada por esgotar tentativas
            mensagem.textContent = `Você esgotou suas 3 tentativas. O personagem era "${personagemSecreto.nome}".`;
            mensagem.className = 'lose-message';
            personagemImagem.src = personagemSecreto.imagemUrl;
            personagemImagem.classList.remove('hidden');
            feedbackIcon.classList.add('hidden');
            
            // Força o feedback visual de erro permanente na rodada final
            guessInput.classList.add('input-incorrect');
            guessInput.disabled = true; 

            fimDeRodada("erro"); 
        } else {
            // Palpite errado mas ainda tem tentativas
            mensagem.textContent = `Incorreto. Tentativa ${tentativas} de 3. Tente novamente!`;
            mensagem.className = 'lose-message shake';
            playSound(somErro);
            
            feedbackIcon.classList.remove('hidden');
            feedbackIcon.classList.add('incorrect', 'fa-times');
            
            // Feedback visual de erro temporário
            guessInput.classList.add('input-incorrect');
            guessInput.disabled = true; 

            setTimeout(() => {
                mensagem.classList.remove('shake');
                feedbackIcon.classList.add('hidden'); 
                guessInput.classList.remove('input-incorrect'); 
                guessInput.disabled = false;
                guessInput.focus();
            }, 800);
        }
    }
}

function calcularPontos() {
    const config = CONFIG_DIFICULDADE[nivelDificuldade]; 
    
    let pontosBase = 30; // Aumentei um pouco a base para ser mais recompensador.
    // CORREÇÃO: 'tentativas' começa em 0, mas conta o número de erros antes do acerto.
    // Se acertou na primeira vez, tentativas (erros) é 0. Penalidade baseada no número de dicas usadas.
    
    // A penalidade de tentativa só deve ser aplicada se houver erros antes do acerto.
    const penalidadeTentativa = (tentativas) * 5; 
    
    // Se a dica atual é -1 (nenhuma dica), (dicaAtual + 1) é 0.
    const penalidadeDica = (dicaAtual + 1) * config.penalidadeDica; 
    
    let pontos = Math.max(5, pontosBase - penalidadeTentativa - penalidadeDica);
    
    pontos *= config.multiplicadorPontos; 

    return Math.round(pontos);
}

function calcularBonusTempo(tempo) {
    const maxTempo = CONFIG_DIFICULDADE[nivelDificuldade].tempo; 
    // CORREÇÃO: Condições de bônus de tempo mais agressivas e alinhadas ao tema de "decifração rápida".
    if (tempo >= maxTempo * 0.9) return 15;
    if (tempo >= maxTempo * 0.7) return 10;
    if (tempo >= maxTempo * 0.5) return 5;
    return 0;
}

function fimDeRodada(resultado) {
    clearInterval(timer);
    guessBtn.disabled = true;
    pedirDicaBtn.disabled = true;
    pedirDicaBtn.style.display = 'none';
    pularBtn.disabled = true;
    
    // CORREÇÃO: Garante o fluxo de fim de jogo total após uma rodada com acerto/erro/pulo
    if (pontuacao >= META_PONTOS) {
        fimDeJogoTotal("vitoria");
        return; // Sai da função para evitar o fluxo de rodada
    } else if (resultado === "erro") {
        // Se a pontuação for insuficiente após esgotar tentativas, vai para o fim de jogo total
        fimDeJogoTotal("out-of-guesses");
        return;
    }

    // Fluxo de próxima rodada (acerto ou pulo)
    if (resultado === "acerto" || resultado === "pulado") {
        guessInput.disabled = true; 
        guessBtn.classList.add('hidden');
        reiniciarBtn.classList.remove('hidden');
        reiniciarBtn.textContent = 'PRÓXIMO MISTÉRIO';
    }
}

// FUNÇÃO ATUALIZADA: Lógica da Tela Final
function fimDeJogoTotal(resultado) {
    clearInterval(timer);
    gameScreen.classList.add('hidden');
    endScreen.classList.remove('hidden');
    
    endContainer.classList.remove('victory', 'time-out', 'out-of-guesses', 'defeat');
    endIcon.className = 'end-icon fas';
    
    finalScore.textContent = pontuacao;
    finalStreak.textContent = maiorSequencia; 

    if (resultado === "vitoria") {
        endTitle.textContent = "MISSSÃO CUMPRIDA! VITÓRIA!";
        endIcon.classList.add('fa-trophy', 'victory-icon');
        endContainer.classList.add('victory');
        endMessage.textContent = `Você decifrou o Mistério Cósmico e superou a meta de ${META_PONTOS} pontos! Parabéns, Agente!`;
        playSound(somVitoria);
    } 
    else if (resultado === "time-up") {
        endTitle.textContent = "TEMPO ESGOTADO! FALHA DE SINCRONIA.";
        endIcon.classList.add('fa-clock', 'time-out-icon');
        endContainer.classList.add('defeat', 'time-out');
        endMessage.textContent = `O tempo acabou. O Mistério Cósmico (personagem) era: "${personagemSecreto.nome}". Sua pontuação final foi de ${pontuacao} pontos.`;
        // Não é derrota por pontuação insuficiente, é por tempo.
    } 
    else if (resultado === "out-of-guesses") {
        endTitle.textContent = "TENTATIVAS ESGOTADAS! ERRO DE DECODIFICAÇÃO.";
        endIcon.classList.add('fa-bomb', 'out-of-guesses-icon'); 
        endContainer.classList.add('defeat', 'out-of-guesses');
        endMessage.textContent = `Você esgotou suas 3 tentativas. O Mistério Cósmico (personagem) era: "${personagemSecreto.nome}". Sua pontuação final foi de ${pontuacao} pontos.`;
    }
    else {
        // Derrota padrão (se o jogo for finalizado por outros motivos sem ter atingido a meta, ex: botão "mudar dificuldade")
        endTitle.textContent = "RELATÓRIO FINAL. PONTUAÇÃO INSUFICIENTE.";
        endIcon.classList.add('fa-sad-cry');
        endContainer.classList.add('defeat');
        endMessage.textContent = `Você não alcançou a meta de ${META_PONTOS} pontos. Tente novamente!`;
    }
}

function perderPorTempo() {
    clearInterval(timer);
    personagemImagem.src = personagemSecreto.imagemUrl;
    personagemImagem.classList.remove('hidden');
    guessInput.classList.add('input-incorrect');
    guessInput.disabled = true;
    fimDeJogoTotal("time-up"); 
}


// ===============================================
// LÓGICA DO CRONÔMETRO
// ===============================================

function atualizarCronometro() {
    tempoRestante--;
    
    const maxTempo = CONFIG_DIFICULDADE[nivelDificuldade].tempo; 
    const porcentagemUsada = ((maxTempo - tempoRestante) / maxTempo) * 100;
    const graus = porcentagemUsada * 3.6; 
    
    let corPrimaria = 'var(--tech-blue)'; 
    let corSecundaria = 'rgba(0, 0, 0, 0.4)'; 

    if (tempoRestante <= maxTempo * 0.3) {
        corPrimaria = 'var(--lose-color)'; 
        timerRing.classList.add('danger');
        
        if (tempoRestante === Math.floor(maxTempo * 0.3)) { 
             // CORREÇÃO: Evita chamar o som repetidamente. Toca quando o tempo entra na zona de perigo.
             playSound(somTimerAcelerado); 
        }
    } else {
        timerRing.classList.remove('danger');
    }
    
    // Aplica o gradiente cônico para o anel do cronômetro
    timerRing.style.background = `conic-gradient(
        ${corPrimaria} ${360 - graus}deg,
        ${corSecundaria} ${360 - graus}deg
    )`;

    timerDisplay.textContent = tempoRestante;

    if (tempoRestante <= 0) {
        perderPorTempo();
    }
}

function iniciarCronometro() {
    clearInterval(timer);
    const maxTempo = CONFIG_DIFICULDADE[nivelDificuldade].tempo; 
    tempoRestante = maxTempo;
    timerDisplay.textContent = tempoRestante;
    
    timerRing.style.background = `conic-gradient(var(--tech-blue) 360deg, rgba(0, 0, 0, 0.4) 360deg)`;
    
    timerRing.classList.remove('danger');
    timer = setInterval(atualizarCronometro, 1000);
}


// ===============================================
// INICIALIZAÇÃO E EVENT LISTENERS
// ===============================================

function iniciarNovoJogoCompleto() {
    pontuacao = 0;
    sequenciaAcertos = 0;
    maiorSequencia = 0;
    
    // Reinicializa as listas de personagens
    personagensDisponiveis = {};
    personagensUsados = {};
    personagensDisponiveis[nivelDificuldade] = [...personagens[nivelDificuldade]];
    
    scoreDisplay.textContent = pontuacao;
    streakDisplay.textContent = '0';
    metaDisplay.textContent = META_PONTOS; 
    
    iniciarNovaRodada();
}

// --- Tela Inicial ---
nameInput.addEventListener('input', () => {
    // Habilita o botão 'start-btn' apenas se houver texto
    startBtn.disabled = nameInput.value.trim().length === 0;
});

startBtn.addEventListener('click', () => {
    nomeJogador = nameInput.value.trim() || "Agente X";
    startScreen.classList.add('hidden');
    difficultyScreen.classList.remove('hidden');
    // Reinicia o estado de seleção da dificuldade, se já houve uma seleção.
    difficultyOptions.forEach(c => c.classList.remove('selected'));
    selectDifficultyBtn.disabled = true;
    nivelDificuldade = "";
});

// --- Tela de Dificuldade ---
difficultyOptions.forEach(card => {
    card.addEventListener('click', () => {
        difficultyOptions.forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        nivelDificuldade = card.getAttribute('data-difficulty');
        selectDifficultyBtn.disabled = false;
    });
});

selectDifficultyBtn.addEventListener('click', () => {
    if (!nivelDificuldade) return;
    difficultyScreen.classList.add('hidden');
    gameScreen.classList.remove('hidden');
    iniciarNovoJogoCompleto(); 
});


// --- Tela de Jogo ---
reiniciarBtn.addEventListener('click', iniciarNovaRodada);
guessBtn.addEventListener('click', verificarPalpite);
pedirDicaBtn.addEventListener('click', mostrarDica);

pularBtn.addEventListener('click', () => {
    clearInterval(timer);
    const pontosPerdidos = PENALIDADE_PULAR; 
    atualizarPontuacao(-pontosPerdidos);
    sequenciaAcertos = 0; 
    streakScoreItem.classList.add('hidden');
    
    personagemImagem.src = personagemSecreto.imagemUrl;
    personagemImagem.classList.remove('hidden');
    
    // Feedback visual do pulo (negativo)
    guessInput.classList.add('input-incorrect');
    guessInput.disabled = true;
    
    mensagem.textContent = `Rodada pulada! Penalidade de ${pontosPerdidos} pontos. O personagem era "${personagemSecreto.nome}".`;
    mensagem.className = 'lose-message';
    fimDeRodada("pulado"); 
});

// Suporte a ENTER no campo de palpite
guessInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        if (!reiniciarBtn.classList.contains('hidden')) {
            // Se o botão 'Próximo' estiver visível, clica nele
            reiniciarBtn.click(); 
        } 
        else if (!guessBtn.classList.contains('hidden') && !guessInput.disabled) {
            // Se o botão 'Adivinhar' estiver visível, verifica o palpite
            verificarPalpite();
        }
    }
});

// --- Tela Final ---
playAgainBtn.addEventListener('click', () => {
    endScreen.classList.add('hidden');
    // CORREÇÃO: Volta para a tela de dificuldade, mantendo o jogador no fluxo do jogo.
    difficultyScreen.classList.remove('hidden'); 
    
    // Reseta o estado da tela de dificuldade.
    difficultyOptions.forEach(c => c.classList.remove('selected'));
    selectDifficultyBtn.disabled = true;
    nivelDificuldade = "";

    // Não é necessário resetar pontuação/sequência aqui, pois isso é feito em iniciarNovoJogoCompleto()
});

changeDifficultyBtn.addEventListener('click', () => {
    endScreen.classList.add('hidden');
    // CORREÇÃO: Já voltando para a tela de dificuldade no 'playAgainBtn' e 'changeDifficultyBtn'
    difficultyScreen.classList.remove('hidden'); 
    
    // Reseta o estado da tela de dificuldade.
    difficultyOptions.forEach(c => c.classList.remove('selected'));
    selectDifficultyBtn.disabled = true;
    nivelDificuldade = "";

    // Não é necessário resetar pontuação/sequência aqui, pois isso é feito em iniciarNovoJogoCompleto()
});