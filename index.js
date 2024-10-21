// CLASSIFICAÇÃO DE PARTIDAS RANKEADAS
// Desafio proposto pelo professor Felipe Aguiar, como parte do Bootcamp GFT Start 6 - Lógica de Programação

const PromptSync = require('prompt-sync') // Chamando o PromptSync

// Declarando as variáveis
let vitorias;
let derrotas;
let nivel_Heroi = "";
const prompt = PromptSync();

// Estabelecendo a quantidade de vitórias e derrotas
vitorias = prompt("Quantidade de vitórias: ");
derrotas = prompt("Quantidade de derrotas: ");

// Criando a função para calcular o saldo por vitórias - derrotas, as colocando numa variável. A função deve retornar o valor dessa mesma variável
function victory_sold(vitoria, derrota){
    let sold = vitoria - derrota;
    return sold;
}

// A função vai pegar os valores das variáveis vitórias e derrotas para fazer a operação de subtração e determinar o saldo
let saldo = victory_sold(vitorias, derrotas);

// Estrutura de repetição
do{
    // Com base no valor do saldo de vitórias (calculado na função victory_sold), enquanto ela for executada, ela executa as condições para determinar o nível do herói
    if (saldo < 10) {
        nivel_Heroi = "Ferro";
        break;
    } else if(saldo >= 11 && saldo <= 20){
        nivel_Heroi = "Bronze";
        break;
    } else if(saldo >= 21 && saldo <= 50){
        nivel_Heroi = "Prata";
        break;
    } else if(saldo >= 51 && saldo <= 80){
        nivel_Heroi = "Ouro";
        break;
    } else if(saldo >= 81 && saldo <= 90){
        nivel_Heroi = "Diamante";
        break;
    } else if(saldo >= 91 && saldo <= 100){
        nivel_Heroi = "Lendário";
        break;
    } else{
        nivel_Heroi = "Imortal";
        break;
    }
    
} while(vitorias > derrotas)
// Mensagem de saída
console.log(`O herói tem um saldo de ${saldo} e está no nível ${nivel_Heroi}`);