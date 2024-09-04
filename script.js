/*
 1)	Observe o trecho de código abaixo: int INDICE = 13, SOMA = 0, K = 0; 
Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }
Imprimir(SOMA); 
Ao final do processamento, qual será o valor da variável SOMA? 
 */

let INDICE = 13, SOMA = 0, K = 0; 
while (K < INDICE) { 
    K = K + 1; 
    SOMA = SOMA + K; 
}
console.log(SOMA);


// ****************************************

/*
2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor
 sempre será a soma dos 2 valores 
 (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência. 
*/

function isFibonacci(num) {
    let a = 0, b = 1, c = 0;
    if (num === 0 || num === 1) return true;
    while (c < num) {
        c = a + b;
        a = b;
        b = c;
    }
    return c === num;
}

const num = 21; // Exemplo de número a verificar
if (isFibonacci(num)) {
    console.log(`${num} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${num} não pertence à sequência de Fibonacci.`);
}

// ***********************************

/*

3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne: 
• O menor valor de faturamento ocorrido em um dia do mês; 
• O maior valor de faturamento ocorrido em um dia do mês; 
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal. 
 */

// Exemplo de dados de faturamento diário em formato JSON
const faturamento = [
    {"dia": 1, "valor": 22174.1664},
    {"dia": 2, "valor": 24537.6698},
    {"dia": 3, "valor": 0.0}, // Fim de semana ou feriado
    {"dia": 4, "valor": 26139.6134},
    {"dia": 5, "valor": 0.0}, // Fim de semana ou feriado
    {"dia": 6, "valor": 26742.6612},
    {"dia": 7, "valor": 0.0}, // Fim de semana ou feriado
    {"dia": 8, "valor": 42889.2258},
    {"dia": 9, "valor": 46251.174},
    {"dia": 10, "valor": 11191.4722},
    {"dia": 11, "valor": 0.0}, // Fim de semana ou feriado
    {"dia": 12, "valor": 0.0}, // Fim de semana ou feriado
    {"dia": 13, "valor": 28492.4722},
    {"dia": 14, "valor": 0.0}, // Fim de semana ou feriado
    {"dia": 15, "valor": 27642.6612},
    {"dia": 16, "valor": 0.0}, // Fim de semana ou feriado
    {"dia": 17, "valor": 30916.7112},
    {"dia": 18, "valor": 37429.1064},
    {"dia": 19, "valor": 19849.5313},
    {"dia": 20, "valor": 14214.2213},
    {"dia": 21, "valor": 0.0}, // Fim de semana ou feriado
    {"dia": 22, "valor": 27028.5451},
    {"dia": 23, "valor": 37593.3892},
    {"dia": 24, "valor": 0.0}, // Fim de semana ou feriado
    {"dia": 25, "valor": 28748.6612},
    {"dia": 26, "valor": 28189.6612},
    {"dia": 27, "valor": 29089.7141},
    {"dia": 28, "valor": 0.0}, // Fim de semana ou feriado
    {"dia": 29, "valor": 14034.8293},
    {"dia": 30, "valor": 0.0}  // Fim de semana ou feriado
];

let menorValor = Infinity;
let maiorValor = -Infinity;
let soma = 0;
let contagemDias = 0;

// Calcular menor, maior valor e soma para calcular a média
for (let i = 0; i < faturamento.length; i++) {
    let valor = faturamento[i].valor;
    if (valor > 0) { // Ignorar dias sem faturamento
        if (valor < menorValor) menorValor = valor;
        if (valor > maiorValor) maiorValor = valor;
        soma += valor;
        contagemDias++;
    }
}

// Calcular a média mensal
const mediaMensal = soma / contagemDias;

let diasAcimaDaMedia = 0;

// Contar quantos dias tiveram faturamento acima da média
for (let i = 0; i < faturamento.length; i++) {
    let valor = faturamento[i].valor;
    if (valor > mediaMensal) {
        diasAcimaDaMedia++;
    }
}

// Exibir os resultados
console.log(`Menor valor de faturamento: ${menorValor.toFixed(2)}`);
console.log(`Maior valor de faturamento: ${maiorValor.toFixed(2)}`);
console.log(`Número de dias com faturamento acima da média: ${diasAcimaDaMedia}`);


// ******************************************

/*
4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado: 
•	SP – R$67.836,43 
•	RJ – R$36.678,66 
•	MG – R$29.229,88 
•	ES – R$27.165,48 
•	Outros – R$19.849,53 
Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.  
*/

const faturamentoPorEstado = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
};

const total = Object.values(faturamentoPorEstado).reduce((a, b) => a + b, 0);

for (const estado in faturamentoPorEstado) {
    const percentual = (faturamentoPorEstado[estado] / total) * 100;
    console.log(`${estado}: ${percentual.toFixed(2)}%`);
}


// *****************************************

/*
5) Escreva um programa que inverta os caracteres de um string. 
IMPORTANTE: 
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código; 
b) Evite usar funções prontas, como, por exemplo, reverse; 
 */

function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

const originalString = "Exemplo";
const reversedString = reverseString(originalString);
console.log(`Original: ${originalString}`);
console.log(`Invertida: ${reversedString}`);
