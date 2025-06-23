/* 1. Escreva um código que utilize o loop for/of para iterar e imprimir cada elemento de um array.
function exibirElemento(array) {
   for (let list of array) {
      console.log(list);
   }
}

let lista = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
exibirElemento(lista);

// 2. Crie uma função que receba uma array e imprima no console o número do índice e o elemento.
function exibirElemento(array) {
   for (let indice = 0; indice < array.length; indice++) {
      console.log(`Índice: ${indice} - Elemento: ${array[indice]}`);
   }
}

let lista = ['Daniel', 'Lisboa', 'Gonçalves'];
exibirElemento(lista);

// 3. Crie uma função que receba uma array de números inteiros e retorne a soma dos elementos.
let somaElementos = 0;

function somaNumerosInteiros(array) {
   for (let soma of array) {
      somaElementos += soma;
   }
}

let lista = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
somaNumerosInteiros(lista);
console.log('A soma dos elementos é:', somaElementos);

// 4. Crie uma função que receba uma array de números inteiros e retorne o menor valor e o maior valor da array, no seguinte formato: 'o menor número é X e o maior número é Y'.
let lista = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

let maior = lista[0];
let menor = lista[0];

function maiorMenor(array) {
   for (let indice = 0; indice < array.length; indice++) {
      if (array[indice] > maior) {
         maior = array[indice];
      }
      if (array[indice] < menor) {
         menor = array[indice];
      }
   }
}

maiorMenor(lista)
console.log(`O maior número é ${maior} e o menor é ${menor}`); */

// 5. Crie um programa que utilize um laço for para percorrer uma array `const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14]` e exibir no console apenas os números pares contidos nesse array.
const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14];

function numerosPares(array) {
   for (let valor of array) {
      if (valor % 2 == 0) {
         console.log(valor);
      }
   }
}

console.log('Números pares:');
numerosPares(numeros);

// 6. Crie um programa que calcule a média dos números presentes em um array utilizando um loop for.
