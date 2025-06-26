/* 1. Faça uma função que aceite vários arrays como argumentos e retorne um único array contendo todos os elementos dos arrays fornecidos, utilizando Spread Operator.
Dica: é possível usar o spread operator diretamente em um parâmetro de função para "espalhar" seu conteúdo, por exemplo `function funcaoExemplo(...params)`. */
const lista1 = [0, 2, 4, 6, 8];
const lista2 = [1, 3, 5, 7, 9];

function juntarArrays(...array) {
   return console.log([].concat(...array));
}

juntarArrays(lista1, lista2);

// 2. Crie um array de números chamado `valores`. Depois, escreva um programa que some todos os elementos deste array utilizando o método **reduce**.
const valores = [2, 4, 6, 8, 10];

const somarValores = valores.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
console.log('A soma dos valores é:', somarValores);

/* 3. Considere duas listas de cores:
`const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho']`
`const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul']`
Crie um programa que una essas duas listas, removendo cores duplicadas e exiba a lista final. */

const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho'];
const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul'];

const novaLista = [...new Set([...coresLista1, ...coresLista2])];
// const novaLista = coresLista1.concat(coresLista2);
// const novaListaFiltrada = new Set(novaLista);

console.log(novaLista);

// 4. Escreva uma função que receba um array de números e retorne um array contendo apenas os números pares.
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function numerosPares(array) {
   return array.filter((indice) => indice % 2 === 0);
}

const pares = numerosPares(numeros);
console.log(pares);

// 5. Crie uma função que filtre os números de um array que são múltiplos de 3 e maiores que 5.
const numeros = [3, 6, 9, 4, 12, 2, 7];

function filtrarNumeros(array) {
   return array.filter((indice) => indice % 3 === 0 && indice > 5);
}

const resultado = filtrarNumeros(numeros);
console.log(resultado);

// 6. Crie uma função que receba um array de números e retorne a soma de todos os elementos.
const numeros = [3, 6, 9, 4, 12, 2, 7];

function somaDosElementos(array) {
   return array.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
}

console.log(somaDosElementos(numeros));