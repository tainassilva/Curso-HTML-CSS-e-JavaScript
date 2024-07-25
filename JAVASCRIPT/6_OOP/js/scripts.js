// 1 - métodos
const animal = {
  nome: "Bob",
  latir: function () {
    console.log("Au au");
  },
};

// Um método que está dentro do objeto
animal.latir();

// 2 - aprofundando em métodos
// Pode ter vários objetos ao mesmo tempo sendo instanciados
const pessoa = {
  nome: "Matheus",

  getNome: function () {
    return this.nome;
  },

  setNome: function (novoNome) {
    this.nome = novoNome;
  },
};

console.log(pessoa.nome);

// Dá o mesmo resultado do de cima
console.log(pessoa.getNome());

// Nome do objeto modificado
pessoa.setNome("Matheus Battisti");

console.log(pessoa.getNome());


// 3 - prototype
const text = "asd";

// Ancestrais da String(Métodos)
console.log(Object.getPrototypeOf(text));

const bool = true;

// Ancestrais do booleano
console.log(Object.getPrototypeOf(bool));

const arr = [];

console.log(arr.length);

// Verifica se acima tem herança entre o array
console.log(Object.getPrototypeOf(arr) === Array.prototype);

// 4 - mais sobre prototype
const myObject = {
  a: "b",
};

console.log(Object.getPrototypeOf(myObject));

console.log(Object.getPrototypeOf(myObject) === Object.prototype);

// myObject vai ser proprietário desse
const mySecondObject = Object.create(myObject);

console.log(mySecondObject);

// Acessando a propriedade herdada
console.log(mySecondObject.a);

// True
console.log(Object.getPrototypeOf(mySecondObject) === myObject);

// 5 - classes básicas
const cachorro = {
  raca: null, 
  patas: 4
};

// Instanciando a classe cachorro
const pastorAlemao = Object.create(cachorro);

// Atribundo um valor a raça
pastorAlemao.raca = "Pastor Alemão";

const bulldog = Object.create(cachorro);

bulldog.raca = "Bulldog";

// 6 - funcoes como classes
function criarCachorro(nome, raca) {
  // Objeto vazio
  const cachorro = Object.create({});
  // Coloca as propriedades pelo que veio nos argumentos
  cachorro.raca = raca;
  cachorro.nome = nome;
  return cachorro;
}

// Criando cachorro
const bob = criarCachorro("Bob", "Vira lata");

console.log(bob);

const jack = criarCachorro("Jack", "Poodle");

console.log(jack);

console.log(Object.getPrototypeOf(jack));

// 7 - funcoes construtoras
function Cachorro(nome, raca) {
  this.nome = nome;
  this.raca = raca;
}

const husky = new Cachorro("Ozzy", "Husky");

console.log(husky);

// 8 - métodos na função construtora
Cachorro.prototype.uivar = function () {
  console.log("Auuu");
};

husky.uivar();

// 9 - classes es6
class CachorroClasse {
  constructor(nome, raca) {
    this.nome = nome;
    this.raca = raca;
  }
}

const jeff = new CachorroClasse("Jeff", "Labrador");

console.log(jeff);

console.log(Object.getPrototypeOf(jeff));

// 10 - mais sobre classes
class Caminhao {
  constructor(eixos, cor) {
    this.eixos = eixos;
    this.cor = cor;
  }

  // Método tem que ser dentro da classe que a utilizar
  descreverCaminhao() {
    console.log(
      `Este caminhão tem ${this.eixos} eixos e é da cor ${this.cor}.`
    );
  }
}

const scania = new Caminhao(6, "Vermelha");

// Exibe a mensagem com os atributos do construtor
scania.descreverCaminhao();

// Não aparece a nova propriedade
Caminhao.motor = 4.0;

const c2 = new Caminhao(4, "Preta");

// Motor é undefined
console.log(c2.motor);

// Ele está na herança mas não no objeto principal
Caminhao.prototype.motor = 4.0;

const c3 = new Caminhao(6, "Azul");

console.log(c3.motor);

// 11 - override por prototype
class Humano {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
}

const matheus = new Humano("Matheus", 31);

console.log(matheus);

// Propriedade pré definida
// Caso queira verificar os dados da classe
// Algo que simule as propriedades estáticas
Humano.prototype.idade = "Não definida";

console.log(matheus.idade);
console.log(Humano.prototype.idade);

// 12 - symbol
class Aviao {
  constructor(marca, turbinas) {
    this.marca = marca;
    this.turbinas = turbinas;
  }
}

// Simbol para preencher esse valor
const asas = Symbol();

// Passa esse valor para os objetos instanciados
// Não fica direto no objeto
Aviao.prototype[asas] = 2;

const boeing = new Aviao("Boeing", 10);

console.log(boeing);

// Acessando a constante "asas"
console.log(boeing[asas]);

console.log(Aviao.prototype[asas]);

// 13 - getter e setter
class Post {
  constructor(titulo, descricao, tags) {
    this.titulo = titulo;
    this.descricao = descricao;
    this.tags = tags;
  }

  // Exibe
  get exibirTitulo() {
    return `Você está lendo: ${this.titulo}`;
  }

     // Atribui valor
  set adicionarTags(tags) {
    // As tags em formato de lista
    const tagsArray = tags.split(", ");
    this.tags = tagsArray;
  }
}

// Criando novo post 
const myPost = new Post("Algum post", "É um post sobre programação");

// Exibe o get com a mensagem
console.log(myPost.exibirTitulo);

// Adicionando as tags em formato de lista
myPost.adicionarTags = "programacao, javascript, js";

console.log(myPost);

// 14 - Herança
class Mamifero {
  constructor(patas) {
    this.patas = patas;
  }
}

// Herdando as características do Mamífero
class Lobo extends Mamifero {
  constructor(patas, nome) {
    // Enviando a propriedade patas para alterar o valor da classe pai
    // Sem o super dá erro
    // Precisa enviar a propriedade atribuida para a classe pai
    super(patas, patas);
    this.nome = nome;
  }
}

const shark = new Lobo(4, "Shark");

console.log(shark);

// 15 - instanceof
console.log(shark instanceof Lobo); //True

// Aqui estou verificando as classes
console.log(Lobo instanceof Mamifero); // False

// Verificando de objeto para a classe
console.log(new Lobo(4, "teste") instanceof Mamifero); // True

console.log(new Post("a", "b") instanceof Cachorro); // false


