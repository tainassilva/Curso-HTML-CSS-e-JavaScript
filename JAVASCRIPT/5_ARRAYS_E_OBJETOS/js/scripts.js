// 1 - arrays
const lista = [1, 2, 3, 4, 5];

console.log(lista);

console.log(typeof lista);

const itens = ["Matheus", true, 2, 4.12];

console.log(itens);

// 2 - mais sobre arrays
const arr = ["a", "b", "c", "d"];

// Acessando índice dos elementos
console.log(arr[0]);

console.log(arr[2]);

console.log(arr[10]); //Undefined

// 3 - propriedades
const numbers = [5, 12, 4, 22];

// Tamanho da lista(Das duas maneiras)
console.log(numbers.length);
console.log(numbers["length"]);

const myName = "Matheus";

// Quantidade de caracteres
console.log(myName.length);

// 4 - métodos
const otherNumbers = [1, 2, 3];

// Unir dois arrays
// O que é concatenado vem primeiro
// [5,12,4,22,1,2,3]
const allNumbers = numbers.concat(otherNumbers);

console.log(allNumbers);

const text = "algum texto";

// Deixa as letras maiusculas
console.log(text.toUpperCase());

//Mostra que é uma function
console.log(typeof text.toUpperCase);

// Encontrar a posição de um caractere em uma string
console.log(text.indexOf("g"));

// 5 - Objetos com atributos
const person = {
  name: "Matheus",
  age: 31,
  job: "Programador",
};

console.log(person.name);

console.log(person.name.length);

console.log(typeof person);

// 6 - criandos e deletando propriedades
const car = {
  engine: 2.0,
  brand: "VW",
  model: "Tiguan",
  km: 20000,
};

console.log(car);

// Adicionando mais uma propriedade
car.doors = 4;

console.log(car);

// Deletando propriedade
delete car.km;

console.log(car);

// 7 - mais sobre objetos
const obj = {
  a: "teste",
  b: true,
};

// Vê se um objeto é filho de uma classe
console.log(obj instanceof Object);

const obj2 = {
  c: [],
};

// Copia de um objeto para o outro
// O obj2 recebe os dados de obj
Object.assign(obj2, obj);

console.log(obj2);

// 8 - conhecendo melhor os objetos

//Exibe as chaves do objetos
console.log(Object.keys(obj));
console.log(Object.keys(obj2));
console.log(Object.keys(person));

// Exibe chave e valor
console.log(Object.entries(obj));

// 9 - Mutação
// As mudanças podem afetar a cópia
const a = {
  name: "Matheus",
};

// Não é um objeto novo, apenas uma referência a A
const b = a;

console.log(a);
console.log(b);

// True
console.log(a === b);

// Objeto b também ganha a age
a.age = 31;

console.log(b);

// Deleta dos dois objetos
delete b.age;

console.log(a);
console.log(b);

// 10 - loop em array
const users = ["Matheus", "João", "Pedro", "Miguel"];

// Imprimindo todos os itens do array
for (let i = 0; i < users.length; i++) {
  console.log(`Listando usuário: ${users[i]}`);
}

// 11 - push e pop
const array = ["a", "b", "c"];

// Adiciona no fim da lista
array.push("d");

console.log(array);
console.log(array.length);

// Remove no fim da lista
array.pop();
//Adiciona item removido em uma variável para exibir abaixo
const itemRemovido = array.pop();

console.log(itemRemovido);
// Assim também dá certo
//console.log(array.pop());

console.log(array);
console.log(array.length);

// Pode inserir vários itens de uma vez
array.push("Dá", "Para", "Inserir", "Vários");

console.log(array);

// 12 - shift e unshift
// Adiciona no inicio e remove no inicio

const letters = ["a", "b", "c"];

// Remove a letra A
const letter = letters.shift();

console.log(letter);
console.log(letters);

// Insere essas letras na lista ...
letters.unshift("z", "x", "y");

letters.unshift("p");

console.log(letters);

// 13 - indexof e lastindexof

const myElements = ["Morango", "Maçã", "Abacate", "Pêra", "Abacate"];

// Da esquerda para a direita
console.log(myElements.indexOf("Maçã")); //[1]
console.log(myElements.indexOf("Abacate")); // [2]

// Ambos retornam elemento do índice
console.log(myElements[2]); 
console.log(myElements[myElements.indexOf("Abacate")]);

// Da direita para a esquerda
console.log(myElements.lastIndexOf("Abacate")); // [4]
console.log(myElements.lastIndexOf("Maçã")); //[1]

// Elementos que não existem retornam -1
console.log(myElements.indexOf("Mamão"));
console.log(myElements.lastIndexOf("Mamão"));

// 14 - slice
const testeSlice = ["a", "b", "c", "d", "e", "f"];

// Do segundo índice ao terceiro
const subArray = testeSlice.slice(2, 4);
console.log(subArray);

// Para trazer o quarto índice
const subArray2 = testeSlice.slice(2, 4 + 1);
console.log(subArray2);

// Elementos que não existem fica com a lista vazia
const subArray3 = testeSlice.slice(10, 20);
console.log(subArray3);

// 2 em diante(Passando apenas índice inicial)
const subArray4 = testeSlice.slice(2);
console.log(subArray4);

// 15 - foreach
const nums = [1, 2, 3, 4, 5];

nums.forEach((n) => {
  console.log(`O número atual é: ${n}`);
});

const posts = [
  { title: "Primeiro post", category: "PHP" },
  { title: "Segundo post", category: "JavaScript" },
  { title: "Terceiro post", category: "Python" },
];

posts.forEach((post) => {
  console.log(`Exibindo post: ${post.title}, da categoria: ${post.category}`);
});

// 16 - includes
const brands = ["BMW", "VW", "Fiat"];

//Retorna um booleano pra ver se existe na lista
console.log(brands.includes("Fiat"));

console.log(brands.includes("Kia"));

if (brands.includes("BMW")) {
  console.log("Há carros da marca BMW!");
}

// 17 - reverse
const reverseTest = [1, 2, 3, 4, 5];

reverseTest.reverse();

console.log(reverseTest);

// 18 - trim
const trimTest = "  testando \n   ";

// Sem a quebra de linha e espaços
console.log(trimTest.trim());

// String original(Com caracteres invisíveis)
console.log(trimTest);

console.log(trimTest.trim().length);

console.log(trimTest.length);

// 19 - padstart

const testePadStart = "1";

// A string vai ter 4 itens, preenche o restante com 0
// 0001
const newNumber = testePadStart.padStart(4, "0");

console.log(testePadStart);

console.log(newNumber);

// Os zeros vem depois do new number
// 0001000000
// Completa até 10 caracteres
const testePadEnd = newNumber.padEnd(10, "0");

console.log(testePadEnd);

// 20 - split
const frase = "O rato roeu a roupa do rei de Roma";

const arrayDaFrase = frase.split(" ");

console.log(arrayDaFrase);

// 21 - join

const fraseDeNovo = arrayDaFrase.join(" ");
console.log(fraseDeNovo); 

const itensParaComprar = ["Mouse", "Teclado", "Monitor"];

const fraseDeCompra = `Precisamos comprar ${itensParaComprar.join(", ")}.`;

console.log(fraseDeCompra);

// 22 - repeat
const palavra = "Testando ";

// Repete a palavra acima 5 vezes
console.log(palavra.repeat(5));

// 23 - rest operator

// Argumentos infinitos
const somaInfinita = (...args) => {
  let total = 0;

  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }

  return total;
};

// Não tem limites ... Pode colocar quantos parâmetros quiser
console.log(somaInfinita(1, 5, 10));

console.log(somaInfinita(1, 2, 3, 4, 5, 6, 7, 7, 8, 9));

// 24 - for...of
const somaInfinita2 = (...args) => {
  let total = 0;

  for (num of args) {
    total += num;
  }

  return total;
};

console.log(somaInfinita2(1, 5, 10));

console.log(somaInfinita2(1, 2, 3, 4, 5, 6, 7, 7, 8, 9));

// 25 - destructuring objetos
const userDetails = {
  firstName: "Matheus",
  lastName: "Battisti",
  job: "Programador",
};

// Armazenando as propriedades em uma variável
const { firstName, lastName, job } = userDetails;

console.log(firstName, lastName, job);

// Renomeando variáveis
const { firstName: primeiroNome } = userDetails;

console.log(primeiroNome);

// 26 - destructuring me arrays
const myList = ["Avião", "Submarino", "Carro"];

// Variáveis sendo declaradas
// Vão receber o valor do array acima
const [veiculoA, veiculoB, veiculoC] = myList;

console.log(veiculoA, veiculoB, veiculoC);

// 27 - json (Recebe de algum lugar)
// '{"nomeDaPropriedade" : valorDaPropriedade}'
const myJson =
  '{"name": "Matheus","age": 31, "skills": ["PHP", "JavaScript", "Python"]}';

// 28 - json para objeto e objeto para json

// De json para objeto
const myObject = JSON.parse(myJson);

console.log(typeof myObject);

// json invalido(String sem aspas)
const badJson =
  '{"name": Matheus,"age": 31, "skills": ["PHP", "JavaScript", "Python"]}';

// Vai dar erro
// Corrigir erro do JSON
// const myBadObject = JSON.parse(badJson);

myObject.isOpenToWork = true;

// Convertendo o objeto para JSON
const myNewJson = JSON.stringify(myObject);

// Vai para a API com formato de texto
console.log(myNewJson);

console.log(typeof myNewJson);
