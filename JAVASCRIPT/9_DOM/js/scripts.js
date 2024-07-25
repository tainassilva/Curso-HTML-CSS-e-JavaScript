// 1 - movendo-se no DOM

//Acesso ao body que tem todas as tags dentro
console.log(document.body);

// (NodeList) Array onde vai ter todos os elementos do body
console.log(document.body.childNodes);

// Filhos do header(Elemento 1 do array acima) e as tags
console.log(document.body.childNodes[1]);

// Filhos do header e as tags
console.log(document.body.childNodes[1].childNodes);

// Acessa o texto (Elemento 1 do array) e o seu conteúdo
// textContent acessa o texto do elemento
console.log(document.body.childNodes[1].childNodes[1].textContent);

// 2 - selecionando por tag

// Seleciona todos os li
const listItens = document.getElementsByTagName("li");

console.log(listItens);

// 3 - selecionando elemento por id
const title = document.getElementById("title");

console.log(title);

// 4 - selecionando elementos por classe
const products = document.getElementsByClassName("product");

console.log(products);

// 5 - selecionando os elementos por CSS
const productsQuery = document.querySelectorAll(".product");

// Recebe uma nodeList com os elementos dos seletores
console.log(products);

// Selecionando main-container
const mainContainer = document.querySelector("#main-container");

console.log(mainContainer);

// 6 - insertBefore

// Nome da tag que vou criar
const p = document.createElement("p");

// Elemento pai do título, que vai ser o header
const header = title.parentElement;

// Antes do título eu vou inserir o parágrafo
// O elemento novo e o que vai ficar na frente dele
// Isso tudo dentro de header... Um parágrafo antes do título
header.insertBefore(p, title);

// 7 - appendChild

// Adicionar a lista de links
const navLinks = document.querySelector("nav ul");

// Adicionando um novo li
const li = document.createElement("li");

// Elemento pai. o elemento que vai ser adicionado
navLinks.appendChild(li);

// 8 - replaceChild

// Criando tag que vai para a substituição
const h2 = document.createElement("h2");

// Novo texto que vai para a tag h2
h2.textContent = "Meu novo título!";

// Header é o elemento pai do title
// Substituta e a que vai ser substituida
header.replaceChild(h2, title);

// 9 - createTextNode

// Criando novo texto
const myText = document.createTextNode("Agora vamos colocar mais um título");

// Criando uma nova tag
const h3 = document.createElement("h3");

// Inserindo um elemento filho no h3
h3.appendChild(myText);

// Colocando a tag dentro do HTML no mainContainer
// Último filho do mainContainer
mainContainer.appendChild(h3);

// 10 - trabalhando com atributos

// Método que pega o primeiro elemento selecionado
// dos links que criei no HTML
const firstLink = navLinks.querySelector("a");

console.log(firstLink);

// Mudando o link do href principal
firstLink.setAttribute("href", "https://horadecodar.com.br");

// Recebe o texto do link acima
console.log(firstLink.getAttribute("href"));

// Abrir link em uma nova aba
firstLink.setAttribute("target", "_blank");

// 11 - altura e largura

// Selecionando o rodapé
const footer = document.querySelector("footer");

// Isso pode fazer com o media query no CSS
// Mas também pode fazer por aqui, ajustando
// Largura e altura

console.log(footer.offsetWidth);
console.log(footer.offsetHeight);

console.log(footer.clientWidth);
console.log(footer.clientHeight);

// 12 - posicao do elemento

// Pegando primeiro produto, item...
const product1 = products[0];

// Vendo informações da div
console.log(product1.getBoundingClientRect());

// 13 - CSS com JS

// Comando do CSS após a palavra style
mainContainer.style.color = "red";
mainContainer.style.backgroundColor = "#333";
mainContainer.style.paddingBottom = "15px";

// 14 - Alterando estilos de varios elementos
for (const li of listItens) {
  li.style.backgroundColor = "red";
}
