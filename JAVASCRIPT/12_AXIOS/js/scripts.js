// 1 - instalando o axios
console.log(axios);

// 2 - primeiro request
// Uma função que vai esperar retorno da api
const getData = async () => {
  try {
    // Get direcionado para o endereço da api
    //const response = await axios.get(
    // postsFetch criada no arquivo custom.js
      const response = await postsFetch.get("/users",
      //   4 - definindo headers
      //   Ver request headers
      //Um objeto que transforma para json caso não fosse
      {
        // Pode adicionar regras ou configurar as já existentes
        headers: {
          "content-type": "application/json",
          // Podem se passar tokens por aqui
          custom: "header",
        },
      }
    );

    //Recebe a resposta da requisição
    console.log(response);

    // Retorna os dados da api
    return response.data;
      } catch (error) {
        console.log(error.response);
      }
    };

// Informações da api
getData();

// 3 - imprimir dados na tela

// Selecionando o elemento
const container = document.querySelector("#user-container");

// Pegando outra função para se responsabilizar pelo DOM
const printData = async () => {
  const data = await getData();

  console.log(data);

  //Chama cada um dos itens de usuário cadastrado no sistema
  data.forEach((user) => {

    // Criando no container a nova tag
    const div = document.createElement("div");
    const nameElement = document.createElement("h2");

    // O h2 vai receber o user.name da api
    nameElement.textContent = user.name;

    // Joga o h2 dentro da div
    div.appendChild(nameElement);

    // Cria um parágrafo
    const emailElement = document.createElement("p");

    // O parágrafo recebe o email da api
    emailElement.textContent = user.email;

    // O parágrafo é inserido na div
    div.appendChild(emailElement);

    // A div é inserida no container
    container.appendChild(div);
  });
};

//Imprime os dados na tela
printData();

// 5 - post
const form = document.querySelector("#post-form");
const titleInput = document.querySelector("#title");
const bodyInput = document.querySelector("#body");


form.addEventListener("submit", (e) => {
  // Elimina o comportamento padrão do JS
  // Não deixando o formulário ser enviado da maneira tradicional
   e.preventDefault();


  // Endereço do post
  //axios.post("https://jsonplaceholder.typicode.com/posts", {
    postsFetch.post("/posts", {
    // Objeto vai ser convertido para JSON
    // Passando os parâmetros dessa requisição
    // que são os objetos 
    //body: JSON.stringify({
    title: titleInput.value,
    body: bodyInput.value,
    userId: 1,
         //}),
    });
});

