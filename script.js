const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual dança é considerada um símbolo do Carnaval brasileiro?",

        alternativas: [
            {
                texto: "Samba",
                afirmacao: "Verdadeiro"
            },
            {
                texto: "Tango",
                afirmacao: "Falso"
            },
            {
                texto: "Flamenco",
                afirmacao: "Falso"
            },
            {
                texto: "Balé",
                afirmacao: "Falso"
            }
        ]
    },
    {
        enunciado: "Qual destes ritmos NÃO faz parte das danças de salão tradicionais?",
        alternativas: [
            {
                texto: "Bolero",
                afirmacao: "Falso"
            },
            {
                texto: "Capoeira",
                afirmacao: "Verdadeiro"
            },
            {
                texto: "Salsa",
                afirmacao: "Falso"
            },
            {
                texto: "Valsa",
                afirmacao: "Falso"
            }
        ]
    },
    {
        enunciado: "Qual dança é conhecida pelos movimentos rápidos dos pés e pela improvisação?",
        alternativas: [
            {
                texto: "Sapateado (Tap Dance)",
                afirmacao: "Verdadeiro"
            },
            {
                texto: "Balé",
                afirmacao: "Falso"
            },  
            {
                texto: "Dança do ventre",
                afirmacao: "Falso"
            },
            {
                texto: "Valsa",
                afirmacao: "Falso"
            }   
        ]
    },
    {
        enunciado: "O flamenco é uma dança tradicional de qual país?",
        alternativas: [
            {
                texto: "Itália",
                afirmacao: "Falso"
            },
            {
                texto: "Portugal",
                afirmacao: "Falso"
            },
            {
                texto: "México",
                afirmacao: "Falso"
            },
            {
                texto: "Espanha",
                afirmacao: "Verdadeiro"
            }
        ]
    },
    {
        enunciado: "No balé clássico, como é chamado o movimento de girar sobre o próprio eixo?",
        alternativas: [
            {
                texto: "Pirouette",
                afirmacao: "Verdadeiro"
            },
            {
                texto: "Jeté",
                afirmacao: "Falso"
            },
            {
                texto: "Chassé",
                afirmacao: "Falso"
            },
            {
                texto: "Plié",
                afirmacao: "Falso"
            }
        ]
    },
    {
        enunciado: "Qual dança surgiu nas ruas e faz parte da cultura hip-hop?",
        alternativas: [
            {
                texto: "Flamenco",
                afirmacao: "Falso"
            },
            {
                texto: "Breaking (Breakdance)",
                afirmacao: "Verdadeiro"
            },
            {
                texto: "Frevo",
                afirmacao: "Falso"
            },
            {
                texto: "Valsa",
                afirmacao: "Falso"
            }
        ]
    },
    {
        enunciado: "Qual destes elementos é essencial para a execução da maioria das coreografias em grupo?",
        alternativas: [
            {
                texto: "Sincronia entre os participantes",
                afirmacao: "Verdadeiro"
            },
            {
                texto: "Improvisação constante",
                afirmacao: "Falso"
            }, 
            {
                texto: "Velocidade máxima",
                afirmacao: "Falso"
            }, 
            {
                texto: "Silêncio durante a apresentação",
                afirmacao: "Falso"
            }   
        ]
    },
    {
        enunciado: "Qual dessas danças tem origem africana e exerceu grande influência na formação da cultura brasileira?",
        alternativas: [
            {
                texto: "Balé",
                afirmacao: "Falso"
            },
            {
                texto: "Samba",
                afirmacao: "Verdadeiro"
            },
            {
                texto: "Valsa",
                afirmacao: "Falso"
            },
            {
                texto: "Polca",
                afirmacao: "Falso"
            }
        ]
    },
    {
        enunciado: "Em qual estilo de dança os bailarinos costumam usar sapatilhas de ponta?",
        alternativas: [
            {
                texto: "Hip-hop",
                afirmacao: "Falso"
            },
            {
                texto: "Forró",
                afirmacao: "Falso"
            },
            {
                texto: "Salsa",
                afirmacao: "Falso"
            },
            {
                texto: "Balé",
                afirmacao: "Verdadeiro"
            }
        ]
    },
    {
        enunciado: "Qual dança é tradicional da Argentina?",
        alternativas: [
            {
                texto: "Samba",
                afirmacao: "Falso"
            },
            {
                texto: "Forró",
                afirmacao: "Falso"
            },
            {
                texto: "Tango",
                afirmacao: "Verdadeiro"
            },
            {
                texto: "Xote",
                afirmacao: "Falso"
            }
        ]
    }    
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPergunta();

let contagemAfirmacoes = {}; // Objeto para armazenar a contagem de cada afirmação

function respostaSelecionada(opcaoSelecionada) {
    const afirmacaoSelecionada = opcaoSelecionada.afirmacao;
    if (contagemAfirmacoes.hasOwnProperty(afirmacaoSelecionada)) {
        contagemAfirmacoes[afirmacaoSelecionada]++;
    } else {
        contagemAfirmacoes[afirmacaoSelecionada] = 1;
    }
    
    historiaFinal += afirmacaoSelecionada + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    if (Object.keys(contagemAfirmacoes).length > 0) {
        caixaPerguntas.innerHTML = '<a class="clique2" href="https://mafer009.github.io/mafer.2t.3b/">Reiniciar Teste</a> Parabéns pela tentativa. De 10 questões, você acertou: ';
        const numeroVerdadeiro = contagemAfirmacoes['Verdadeiro'] || 0;
        textoResultado.textContent = numeroVerdadeiro > 1 ? numeroVerdadeiro : 0;
        caixaAlternativas.textContent = "";
    } else {
        caixaPerguntas.innerHTML = '<a class="clique2" href="https://mafer009.github.io/mafer.2t.3b/">Reiniciar Teste</a> Parabéns pela tentativa. De 10 questões, você acertou: ';
        textoResultado.textContent = 0;
        caixaAlternativas.textContent = "";
    }
}