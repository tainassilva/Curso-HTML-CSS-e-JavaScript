// 1 - strict
"use strict";

// opa = "nao da certo";

const opa = "agora sim!";

// const undefined = 10;

// delete [].length;

// 2 - console.log: Exibe conteúdos
let a = 1;
let b = 2;

if (a == 1) {
  a = b + 2;
}

console.log(a, b);

for (let i = 0; i < b; i++) {
  a = a + 2;
  // Acompanha o A em cada iteração do loop
  console.log(a);
}

if (a > 5) {
  a = 25;
}

console.log(a);

// 3 - debugger
let c = 1;
let d = 2;

if (c == 1) {
  c = d + 2;
}

// Código para aqui para debugar
//debugger;

for (let i = 0; i < d; i++) {
  c = c + 2;
}

// Próximo ponto de parada
//debugger;

if (c > 5) {
  c = 25;
}

// Último ponto de parada
//debugger;

// 4 - tratamento de dados

// Função que verifica se o que foi digitado é number
function checkNumber(n) {
  // Convertendo qualquer tipo de dado para número
  const result = Number(n);

  // Se o número não for válido
  if (Number.isNaN(result)) {
    console.log("Valor incorreto!");
    return null;
  } else {
    console.log("Valor correto!");
    return result;
  }
}

checkNumber(5);
checkNumber("10");
checkNumber({});
checkNumber("teste");

// 5 - exceptions
let x = 10;

//Se for diferente de 11, quero que um erro ocorra
if (x != 11) {
  //   throw new Error("O valor de x não pode ser diferente de 11!");
}

// 6 - try catch
try {
  const soma = x + y;
} catch (error) {
  // Mostra o tipo do erro
  console.log(`Erro no programa: ${error}`);
}

// 7 - finally

try {
  const value = checkNumber("asd");

  if (!value) {
    throw new Error("Valores inválidos!");
  }
} catch (error) {
  console.log(`Opa, aconteceu um problema: ${error}`);
} finally {
  console.log("O Código foi executado!");
}

// 8 - assertion
function checkArray(arr) {
  if (arr.length === 0) {
    throw new Error("O array precisa ter elementos!");
  } else {
    console.log(`O array tem ${arr.length} elementos!`);
  }
}

//checkArray([]);

checkArray([1, 2, 3]);


