// Dicionário de personagens por nível de dificuldade (Mantido)
const personagens = {
// ... (Conteúdo do objeto personagens) ...
// ...
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

// NOVAS VARIÁVEIS PARA CONTROLE DE REPETIÇÃO
let personagensDisponiveis = {}; // Armazena a lista de personagens a serem usados
let personagensUsados = {};     // Armazena os personagens já usados (por nível)

// Elementos das telas
const startScreen = document.getElementById('start-screen');
// ... (Resto das variáveis de elementos) ...
const changeDifficultyBtn = document.getElementById('change-difficulty-btn'); 

// Efeitos Sonoros
// ... (Variáveis de áudio) ...

function playSound(sound) {
// ... (Conteúdo da função playSound) ...
}

function atualizarIndicadorDicas() {
// ... (Conteúdo da função atualizarIndicadorDicas) ...
}

function iniciarNovaRodada() {
    // --- LÓGICA DE NÃO REPETIÇÃO INÍCIO ---
    // 1. Verifica se há personagens disponíveis no nível atual
    if (personagensDisponiveis[nivelDificuldade].length === 0) {
        // Se a lista está vazia, move todos os usados de volta para disponíveis
        personagensDisponiveis[nivelDificuldade] = personagensUsados[nivelDificuldade];
        personagensUsados[nivelDificuldade] = [];
        console.log(`Lista de personagens recarregada para o nível ${nivelDificuldade}.`);
    }

    // 2. Seleção aleatória
    const personagensDoNivel = personagensDisponiveis[nivelDificuldade];
    const indiceAleatorio = Math.floor(Math.random() * personagensDoNivel.length);
    
    // 3. Pega o personagem e o remove da lista de disponíveis (splice retorna um array, pegamos o [0])
    personagemSecreto = personagensDoNivel.splice(indiceAleatorio, 1)[0];
    
    // 4. Adiciona o personagem selecionado à lista de usados
    personagensUsados[nivelDificuldade].push(personagemSecreto);
    // --- LÓGICA DE NÃO REPETIÇÃO FIM ---

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
// ... (Conteúdo da função atualizarPontuacao) ...
}

function verificarPalpite() {
// ... (Conteúdo da função verificarPalpite) ...
}

function mostrarDica() {
// ... (Conteúdo da função mostrarDica) ...
}

function calcularPontos() {
// ... (Conteúdo da função calcularPontos) ...
}

function calcularBonusTempo(tempo) {
// ... (Conteúdo da função calcularBonusTempo) ...
}

function fimDeRodada(resultado) {
// ... (Conteúdo da função fimDeRodada) ...
}

function fimDeJogoTotal(resultado) {
// ... (Conteúdo da função fimDeJogoTotal) ...
}

function perderPorTempo() {
// ... (Conteúdo da função perderPorTempo) ...
}

function atualizarCronometro() {
// ... (Conteúdo da função atualizarCronometro) ...
}

function iniciarCronometro() {
// ... (Conteúdo da função iniciarCronometro) ...
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
    iniciarNovoJogoCompleto(); // Chama a função que inicializa o controle de repetição
});

mediumBtn.addEventListener('click', () => {
    nivelDificuldade = 'medio';
    difficultyScreen.classList.add('hidden');
    gameScreen.classList.remove('hidden');
    iniciarNovoJogoCompleto(); // Chama a função que inicializa o controle de repetição
});

hardBtn.addEventListener('click', () => {
    nivelDificuldade = 'dificil';
    difficultyScreen.classList.add('hidden');
    gameScreen.classList.remove('hidden');
    iniciarNovoJogoCompleto(); // Chama a função que inicializa o controle de repetição
});

function iniciarNovoJogoCompleto() {
    pontuacao = 0;
    sequenciaAcertos = 0;
    
    // NOVO: RESETAR AS LISTAS DE PERSONAGENS E PREENCHER A LISTA DE DISPONÍVEIS
    personagensDisponiveis[nivelDificuldade] = [...personagens[nivelDificuldade]];
    personagensUsados[nivelDificuldade] = [];
    
    metaTexto.textContent = `Meta: ${META_PONTOS}`;
    pontuacaoTexto.textContent = `Pontos: ${pontuacao}`;
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
    
    // NOVO: Reseta o controle de repetição ao voltar para o início
    personagensDisponiveis = {};
    personagensUsados = {};
});

changeDifficultyBtn.addEventListener('click', () => {
    endScreen.classList.add('hidden');
    difficultyScreen.classList.remove('hidden');
    pontuacao = 0;
    sequenciaAcertos = 0;
    
    // NOVO: Reseta o controle de repetição ao mudar a dificuldade
    personagensDisponiveis = {};
    personagensUsados = {};
});