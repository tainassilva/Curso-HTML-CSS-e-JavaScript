// 1 - adicionando eventos

// Selecionando botão pelo id
const btn = document.querySelector("#my-button");

// Tipo de evento e a função do que vai acontecer
btn.addEventListener("click", function () {
  console.log("Clicou aqui!");
});

// 2 - removendo evento

// Constante que recebe o id do botão
const secondBtn = document.querySelector("#btn");

function imprimirMensagem() {
  console.log("Teste");
}

// Botão que imprime mensagem ao clicar
secondBtn.addEventListener("click", imprimirMensagem);

const thirdBtn = document.querySelector("#other-btn");

thirdBtn.addEventListener("click", () => {
  console.log("Evento removido");
  // Removendo evento do secondBtn ao clicar no thirdBtn
  // Precisa passar o tipo de evento e qual a função...
  secondBtn.removeEventListener("click", imprimirMensagem);
});

// 3 - argumento de evento
const title = document.querySelector("#my-title");


title.addEventListener("click", (event) => {
  console.log(event);
  // Posição do elemento no eixo X
  console.log(event.offsetX);
  console.log(event.pointerType);
  // Forma resumida de chamar o elemento
  // Selecionar o elemento
  console.log(event.target);
});

// 4 - propagação
const containerBtn = document.querySelector("#btn-container");
const btnInsideContainer = document.querySelector("#div-btn");

containerBtn.addEventListener("click", () => {
  console.log("Evento 1");
});

btnInsideContainer.addEventListener("click", (e) => {
  // sem isso acontece a propagação
  e.stopPropagation();
  console.log("Evento 2");
});

// 5 - removendo efeito padrão
const a = document.querySelector("a");

a.addEventListener("click", (e) => {
  // Removendo efeito padrão do link
  // Não faz a ação padrão de redirecionar
  e.preventDefault();
  console.log("Não alterou a página");
});

// 6 - eventos de tecla

document.addEventListener("keyup", (e) => {
  // Mensagem e mostrando qual foi a tecla
  console.log(`Soltou a tecla ${e.key}`);
});

document.addEventListener("keydown", (e) => {
  console.log(`Pressionou a tecla ${e.key}`);
});

// 7 - outros eventos de mouse

// Selecionando o elemento
const mouseEvents = document.querySelector("#mouse");

mouseEvents.addEventListener("mousedown", () => {
  console.log("Pressionou botão");
});

mouseEvents.addEventListener("mousedown", () => {
  console.log("Soltou botão");
});

mouseEvents.addEventListener("dblclick", () => {
  console.log("Clique duplo");
});

// 8 - movimento do mouse
document.addEventListener("mousemove", (e) => {
  // console.log(`No eixo X: ${e.x}`);
  // console.log(`No eixo Y: ${e.y}`);
});

// 9 - evento no scroll
window.addEventListener("scroll", (e) => {
  if (window.scrollY > 200) {
    console.log("Passamos 200px!");
  }
});

// 10 - evento de focus
const input = document.querySelector("#my-input");

// Aciona quando o usuário entra no input
input.addEventListener("focus", (e) => {
  console.log("Entrou no input!");
});

// Aciona quando o usuário sai do input
input.addEventListener("blur", (e) => {
  console.log("Saiu do input!");
});

// 11 - evento de carregamento

// Executa assim que a página carrega
window.addEventListener("load", () => {
  console.log("Página carregou!");
});

// Pergunta se quer recarregar o site
// Algumas mudanças não podem ser salvas
window.addEventListener("beforeunload", (event) => {
  event.preventDefault();
});

// 12 - debounce

// f - O que eu preciso ativar por quanto tempo
// delay - Por quantos segundos eu executo novamente
const debounce = (f, delay) => {
  // Let : Permite sobrescrita, começa sem valor
  let timeout;

  // Acesso a todos os argumentos de uma função
  return (...arguments) => {
    // Se tem um timeout correndo
    if (timeout) {
      // Encerrando o timeout para começar de novo
      clearTimeout(timeout);
    }


    // Gera o delay e cria a execução da função
    timeout = setTimeout(() => {
      f.apply(arguments);
    }, delay);
  };
};

// Se não chamar a função "debounce vai executar toda hora"
// Passa o evento com a função debounce
// Reseta a contagem quando paro de mover o mouse
window.addEventListener(
  "mousemove",
  debounce(() => {
    console.log("Executando a cada 400ms");
  }, 400)
);


