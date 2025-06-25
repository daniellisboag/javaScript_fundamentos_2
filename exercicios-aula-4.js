// 1 - Utilize o método forEach para imprimir cada elemento de um array juntamente com seu índice.
const lista = ['Daniel', 'Lisboa', 24, 1.75, 67];

lista.forEach((array, indice) => {
  console.log(`Índice: ${indice} - Valor: ${array}`);
});

// 2 - Crie uma função chamada executaOperacaoEmArray que recebe dois parâmetros: um array e uma função de callback que executa alguma operação matemática. Essa função deve iterar por cada elemento do array e aplicar a função de callback em cada um dos elementos, imprimindo o resultado da operação no console.
let lista = [2, 4, 6, 8, 10];

function executaOperacaoEmArray(array, somaMais1) {
  for (let list of array) {
    somaMais1(list);
  }
}

function somaMais1(valor) {
  console.log(valor + 1);
}

executaOperacaoEmArray(lista, somaMais1);

// 3 - Você recebeu um array numeros contendo valores numéricos. Crie um programa que verifique se um número específico está presente nesse array. Se estiver, o programa deve retornar a posição (índice) desse número. Caso contrário, se o número não estiver presente, o programa deve retornar "-1".
const lista = [2, 4, 6, 8, 10, 4];

for (let indice = 0; indice < lista.length; indice++) {
  if (lista.includes(4)) {
    if (lista[indice] === 4) {
      console.log(indice);
    }
  } else {
    console.log('-1');
    break;
  }
}

/* 4 - Você recebeu dois arrays de nomes contendo os alunos da Turma A e da Turma B.

const nomesTurmaA = [
  'João Silva',
  'Maria Santos',
  'Pedro Almeida'
];

const nomesTurmaB = [
  'Carlos Oliveira',
  'Ana Souza',
  'Lucas Fernandes'
];
Utilize o método concat() para unir os arrays das turmas A e B em um único array chamado todasAsTurmas. Depois, utilize o método find() para buscar um aluno específico pelo nome no array todosAlunos. Exiba no console uma mensagem informando o nome do aluno procurado; caso não exista na lista, retorne uma mensagem de aviso, por exemplo Aluno não encontrado. */
const turmaA = ['João Silva', 'Maria Santos', 'Pedro Almeida'];
const turmaB = ['Carlos Oliveira', 'Ana Souza', 'Lucas Fernandes'];

const todasAsTurmas = turmaA.concat(turmaB);
const alunoProcurado = todasAsTurmas.find((aluno) => aluno === 'Carlos Oliveira');

console.log(alunoProcurado === 'Carlos Oliveira' ? 'Aluno encontrado: Carlos Oliveira' : 'Aluno não encontrado.');

/* 5 - Considere um array de números inteiros.

const numeros = [6, 9, 12, 15, 18, 21];
Utilize o método forEach() para multiplicar cada elemento do array por 3 e exibir no console o resultado de cada multiplicação. Depois, utilize o método findIndex() para encontrar o índice do número 18 no array original. */
const numeros = [6, 9, 12, 15, 18, 21];

console.log('Elementos multiplicados por 3: ');
numeros.forEach((valor) => console.log(valor * 3));

console.log('Índice do número 18 é:', numeros.findIndex((valor) => valor === 18));