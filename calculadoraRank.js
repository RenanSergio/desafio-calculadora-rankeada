// Função que calcula o saldo de vitórias e o nível com base nas vitórias e derrotas
function calcularRankeadas(vitorias, derrotas) {
  var saldoVitorias = vitorias - derrotas; // Calcula o saldo de vitórias subtraindo as derrotas das vitórias
  var nivel; // Variável para armazenar o nível

  // Verifica em qual faixa de vitórias o jogador se encontra e define o nível correspondente
  if (vitorias < 10) {
    nivel = 'Ferro';
  } else if (vitorias >= 10 && vitorias <= 20) {
    nivel = 'Bronze';
  } else if (vitorias >= 21 && vitorias <= 50) {
    nivel = 'Prata';
  } else if (vitorias >= 51 && vitorias <= 80) {
    nivel = 'Ouro';
  } else if (vitorias >= 81 && vitorias <= 90) {
    nivel = 'Diamante';
  } else if (vitorias >= 91 && vitorias <= 100) {
    nivel = 'Lendário';
  } else {
    nivel = 'Imortal';
  }

  // Retorna um objeto com o saldo de vitórias e o nível
  return { saldoVitorias, nivel };
}

// Chama a função calcularRankeadas com as vitórias e derrotas especificadas (85 vitórias, 20 derrotas)
var resultado = calcularRankeadas(85, 20);

// Exibe uma mensagem com o saldo de vitórias e o nível do herói
console.log(`O Herói tem saldo de ${resultado.saldoVitorias} está no nível de ${resultado.nivel}`);



/*
// Importa o módulo readline do Node.js
const readline = require('readline');

// Cria uma interface readline para leitura e escrita
const rl = readline.createInterface({
  input: process.stdin, // Define a entrada como o terminal (stdin)
  output: process.stdout // Define a saída como o terminal (stdout)
});

// Função que calcula o saldo de vitórias e o nível com base nas vitórias e derrotas
function calcularRankeadas(nomeHeroi, vitorias, derrotas) {
  var saldoVitorias = vitorias - derrotas; // Calcula o saldo de vitórias subtraindo as derrotas das vitórias
  var nivel; // Variável para armazenar o nível

  // Verifica em qual faixa de vitórias o jogador se encontra e define o nível correspondente
  if (vitorias < 10) {
    nivel = 'Ferro';
  } else if (vitorias >= 10 && vitorias <= 20) {
    nivel = 'Bronze';
  } else if (vitorias >= 21 && vitorias <= 50) {
    nivel = 'Prata';
  } else if (vitorias >= 51 && vitorias <= 80) {
    nivel = 'Ouro';
  } else if (vitorias >= 81 && vitorias <= 90) {
    nivel = 'Diamante';
  } else if (vitorias >= 91 && vitorias <= 100) {
    nivel = 'Lendário';
  } else {
    nivel = 'Imortal';
  }

  // Retorna um objeto com o nome do herói, saldo de vitórias e o nível
  return { nomeHeroi, saldoVitorias, nivel };
}

// Pergunta ao usuário o nome do herói
rl.question('Digite o nome do herói: ', function(nomeHeroi) {
  // Pergunta ao usuário a quantidade de vitórias
  rl.question('Digite a quantidade de vitórias: ', function(vitorias) {
    // Pergunta ao usuário a quantidade de derrotas
    rl.question('Digite a quantidade de derrotas: ', function(derrotas) {
      // Chama a função calcularRankeadas com os valores digitados pelo usuário
      var resultado = calcularRankeadas(nomeHeroi, parseInt(vitorias), parseInt(derrotas));

      // Exibe uma mensagem com o nome do herói, o saldo de vitórias e o nível
      console.log(`O herói ${resultado.nomeHeroi} tem saldo de ${resultado.saldoVitorias} está no nível de ${resultado.nivel}`);

      // Encerra a interface readline
      rl.close();
    });
  });
})
*/