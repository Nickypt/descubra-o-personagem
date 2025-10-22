// ... (Seu código JavaScript anterior) ...

// ===============================================
// CONSTANTES E VARIÁVEIS GLOBAIS (AJUSTADAS)
// ===============================================

// ... (Restante das constantes e variáveis globais) ...

// NOVO: Adicionando elemento de custo da dica (do HTML)
// É crucial que você tenha um span com id="dica-cost" dentro do botão Pedir Dica no seu HTML.
const dicaCostDisplay = document.getElementById('dica-cost');

// ===============================================
// FUNÇÕES DE UTILIDADE E FLUXO (AJUSTADAS)
// ===============================================

function atualizarIndicadorDicas() {
    const maxDicas = personagemSecreto.dicas ? personagemSecreto.dicas.length : 0; 
    const config = CONFIG_DIFICULDADE[nivelDificuldade] || CONFIG_DIFICULDADE.facil;
    
    // --- NOVO: Lógica da Dica Gratuita (UX) ---
    // A primeira dica (dicaAtual = -1) é grátis.
    if (dicaAtual === -1) {
        // Atualiza o display do custo no botão para "GRÁTIS" ou '0s'
        if (dicaCostDisplay) {
            dicaCostDisplay.textContent = 'GRÁTIS';
            dicaCostDisplay.classList.add('free'); // Para possível estilização de "GRÁTIS"
        }
    } else {
        // A partir da segunda dica (dicaAtual >= 0), aplica o custo normal de tempo.
        if (dicaCostDisplay) {
            dicaCostDisplay.textContent = `-${config.penalidadeDicaTempo}s`;
            dicaCostDisplay.classList.remove('free');
        }
    }

    dicaDots.forEach((dot, index) => {
        dot.classList.remove('active', 'used');
        dot.style.display = index < maxDicas ? 'inline-block' : 'none';

        if (index < dicaAtual) {
            dot.classList.add('used');
        } else if (index === dicaAtual) {
            dot.classList.add('active');
        }
    });

    pedirDicaBtn.disabled = dicaAtual >= (maxDicas - 1);
}

function mostrarDica() {
    const config = CONFIG_DIFICULDADE[nivelDificuldade];
    
    if (!personagemSecreto.dicas || dicaAtual >= personagemSecreto.dicas.length - 1) return;

    // --- NOVO: Lógica da Dica Gratuita (Ação) ---
    // A primeira dica (dicaAtual = -1) não tem penalidade.
    if (dicaAtual >= 0) { 
        // Penaliza o tempo a partir da segunda dica
        tempoRestante = Math.max(1, tempoRestante - config.penalidadeDicaTempo); 
    }
    
    dicaAtual++;
    
    if (dicaAtual < personagemSecreto.dicas.length) {
        dicaDisplay.textContent = `Pista ${dicaAtual + 1}: ${personagemSecreto.dicas[dicaAtual]}`;
        
        // --- NOVO: Progressão Visual da Pista (Usando CSS do passo anterior) ---
        // A cada dica, melhora a imagem.
        personagemImagem.classList.remove('visual-clue', 'clue-level-1', 'clue-level-2', 'clue-level-3');
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

// ... (Restante das funções de utilidade) ...

// ===============================================
// LÓGICA DO JOGO PRINCIPAL (AJUSTADA)
// ===============================================

function iniciarNovaRodada() {
    // 1. Controle de Repetição (Mantido)
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
    dicaAtual = -1; // Começa antes da primeira dica.
    limparFeedbackRodada(); 
    
    // ... (Reset de Botões - Mantido) ...
    guessBtn.classList.remove('hidden');
    reiniciarBtn.classList.add('hidden');
    guessBtn.disabled = false;
    
    pedirDicaBtn.style.display = 'block'; 
    pedirDicaBtn.disabled = false; 
    pularBtn.disabled = false; 
    
    dicaDisplay.textContent = 'Pista: Pressione "Pedir Dica" para iniciar a decodificação.';
    
    // --- NOVO: Estado Inicial da Imagem (Totalmente Oculta/Filtrada) ---
    personagemImagem.src = '';
    personagemImagem.classList.add('hidden', 'visual-clue'); // Adiciona o filtro base
    personagemImagem.classList.remove('clue-level-1', 'clue-level-2', 'clue-level-3');
    
    // ... (Reset de Feedback - Mantido) ...

    // 3. ATUALIZAÇÃO DO PLACAR (HUD) (Reforçado)
    if (sequenciaAcertos >= 2) {
        streakScoreItem.classList.remove('hidden');
    } else {
        streakScoreItem.classList.add('hidden');
    }
    streakDisplay.textContent = sequenciaAcertos;
    
    // EXIBIÇÃO CORRETA DAS INFORMAÇÕES DO JOGADOR E NÍVEL
    playerNameDisplay.textContent = nomeJogador;
    difficultyDisplay.textContent = CONFIG_DIFICULDADE[nivelDificuldade].nomeDisplay; 
    scoreDisplay.textContent = pontuacao; // Garante que a pontuação atualizada seja exibida
    metaDisplay.textContent = META_PONTOS; // Garante que a meta seja exibida

    atualizarIndicadorDicas(); // Chamado aqui para configurar o botão de dica como "GRÁTIS"
    guessInput.focus();
    iniciarCronometro();
}

// ... (Restante do seu código) ...