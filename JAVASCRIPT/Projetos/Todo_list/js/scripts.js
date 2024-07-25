// Seleção de elementos
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");
const searchInput = document.querySelector("#search-input");
const eraseBtn = document.querySelector("#erase-button");
const filterBtn = document.querySelector("#filter-select");

// Variavel para título antigo
let oldInputValue;

// Funções
// Done é quando a tarefa está pronta(O zero é porque todas as tarefas não começam prontas)
// Save salva o dado no local storage
const saveTodo = (text, done = 0, save = 1) => {

  /* UMA DIV COM UM H3 DENTRO */

  const todo = document.createElement("div");
  // Dentro da div vamos adicionar a classe todo la do HTML
  // Essa classe é junto com essa div
  todo.classList.add("todo");

  const todoTitle = document.createElement("h3");
  // Inserir o texto nesse elemento de cima
  // O texto que eu recebo da função é o que vem pelo valor do input
  todoTitle.innerText = text;
  // Adicionando o titulo na div
  todo.appendChild(todoTitle);

  // Mostra no console que o elemento está sendo criado
  // console.log(todo);

  //Criando botão e a sua classe
  const doneBtn = document.createElement("button");
  doneBtn.classList.add("finish-todo");
  // Colocando o botão em forma de tag em HTML
  doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
  // Colocando na div todo(Filho do todo)
  todo.appendChild(doneBtn);


  const editBtn = document.createElement("button");
  editBtn.classList.add("edit-todo");
  editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>';
  todo.appendChild(editBtn);

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("remove-todo");
  deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  todo.appendChild(deleteBtn);

  // Utilizando dados da localStorage

  // Se a tarefa estiver pronta, retorna o done, coloca a classe
  if (done) {
    todo.classList.add("done");
  }

  // valor do texto do todo e o done sempre 0...
  if (save) {
    saveTodoLocalStorage({ text, done: 0 });
  }

  // Colocando esse todo no todoList geral
  // Classe principal do HTML
  todoList.appendChild(todo);

  // Limpa o valor quando o usuário terminar de digitar
  todoInput.value = "";
};


const toggleForms = () => {
  // O que tiver sendo exibido esconde 
  // E o que tiver escondido vai ser exibido
  editForm.classList.toggle("hide");
  todoForm.classList.toggle("hide");
  todoList.classList.toggle("hide");
};

// Espera um texto
const updateTodo = (text) => {
  const todos = document.querySelectorAll(".todo");

  // Percorre todo o array e vejo qual quero selecionar
  todos.forEach((todo) => {
    // Pegando o título do todo atual
    let todoTitle = todo.querySelector("h3");

    // Se o título atual é igual valor salvo na memória
    if (todoTitle.innerText === oldInputValue) {
      // Vai ser igual ao text que foi passado por parâmetro
      todoTitle.innerText = text;

      // Utilizando dados da localStorage
      updateTodoLocalStorage(oldInputValue, text);
    }
  });
};

const getSearchedTodos = (search) => {
  const todos = document.querySelectorAll(".todo");

  // Loop entre os itens
  todos.forEach((todo) => {
    const todoTitle = todo.querySelector("h3").innerText.toLowerCase();

    // Aparece todas as tarefas
    todo.style.display = "flex";

    console.log(todoTitle);

    // Títulos que não estão inclusos
    if (!todoTitle.includes(search)) {
      // Direto com CSS
      // Some as tarefas
      todo.style.display = "none";
    }
  });
};

const filterTodos = (filterValue) => {
  const todos = document.querySelectorAll(".todo");

  // Switch porque tem muitos valores...
  switch (filterValue) {
    case "all":
      todos.forEach((todo) => (todo.style.display = "flex"));

      break;

    case "done":
      todos.forEach((todo) =>
        // Verifica na lista de classe se a done está presente
      // Exibe baseado naquela classe 
        todo.classList.contains("done")
          ? (todo.style.display = "flex")
          : (todo.style.display = "none")
      );

      break;

    case "todo":
      todos.forEach((todo) =>
        // Se a classe não tem o done...
        !todo.classList.contains("done")
          ? (todo.style.display = "flex")
          : (todo.style.display = "none")
      );

      break;

    default:
      break;
  }
};

// Eventos
todoForm.addEventListener("submit", (e) => {
  //Faz com que não envie o formulário e dê refresh
  e.preventDefault();

  //Variável para pegar o valor do input
  const inputValue = todoInput.value;

  //Para testar e ver se enviou o que está no input
  //console.log(inputValue);
  if (inputValue) {
    saveTodo(inputValue);
  }
});

document.addEventListener("click", (e) => {
  // Elemento atual que foi clicado
  const targetEl = e.target;
  // Para não ser aplicado no elemento pai
  // São aplicados no elemento pai div mais próxima
  const parentEl = targetEl.closest("div");
  // Eu preciso do título para fazer algumas ações
  let todoTitle;

  // Verificar se existe o título
  if (parentEl && parentEl.querySelector("h3")) {
    todoTitle = parentEl.querySelector("h3").innerText || "";
  }

  // Verifica se contêm uma classe finish-todo
  if (targetEl.classList.contains("finish-todo")) {
    
    // Consegue saber qual todo e botão que foi clicado
    //console.log("Clicou para finalizar")

    //Estou adicionando a classe done para os todo que eu clico no botão
    parentEl.classList.toggle("done");

    updateTodoStatusLocalStorage(todoTitle);
  }

  if (targetEl.classList.contains("remove-todo")) {
    parentEl.remove();

    // Utilizando dados da localStorage
    // Precisa do título para remover
    removeTodoLocalStorage(todoTitle);
  }

  if (targetEl.classList.contains("edit-todo")) {
    //Console.log("Editou...")

    // Chama a função para mudar para tela de edição
    toggleForms();

    editInput.value = todoTitle;
    oldInputValue = todoTitle;
  }
});

// Evento ao botão de cancelar
cancelEditBtn.addEventListener("click", (e) => {
  e.preventDefault();
  // Volta ao formulário principal
  toggleForms();
});

editForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Pega o valor no qual foi editado no input
  const editInputValue = editInput.value;

  if (editInputValue) {
    // Update para valor que foi editado
    updateTodo(editInputValue);
  }

  // Não precisa fazer a espera porque é instantâneo
  toggleForms();
});


searchInput.addEventListener("keyup", (e) => {
  //Valor do input
  const search = e.target.value;

  //Função que vai executar a busca
  getSearchedTodos(search);
});

// Botão de limpar input
eraseBtn.addEventListener("click", (e) => {
  e.preventDefault();

  // Zera o botão de input
  searchInput.value = "";

  //Para voltar os inputs
  searchInput.dispatchEvent(new Event("keyup"));
});

//Quando mudar uma opção vai ativar
filterBtn.addEventListener("change", (e) => {
  const filterValue = e.target.value;

  //console.log(`${filterValue} : Valor que foi adicionado na opção...`)
  filterTodos(filterValue);
});

// Local Storage
// Captura os todos
const getTodosLocalStorage = () => {

  //Conversão de json para objeto
  // Se não tiver nada lá retorna um array vazio
  const todos = JSON.parse(localStorage.getItem("todos")) || [];

  return todos;
};

// Carrega os todos na tela
const loadTodos = () => {
  const todos = getTodosLocalStorage();

  todos.forEach((todo) => {
    saveTodo(todo.text, todo.done, 0);
  });
};

// Salvando a tarefa
const saveTodoLocalStorage = (todo) => {
  const todos = getTodosLocalStorage();

  // salva no array atual
  todos.push(todo);

  // Inserindo no localStorage(set) e tranformando em string
  localStorage.setItem("todos", JSON.stringify(todos));
};

const removeTodoLocalStorage = (todoText) => {
  const todos = getTodosLocalStorage();

  // Percorre o array todo e vai filtrar alguns todos que quero remover
  // O todo que tiver o texto diferente do todo text
  const filteredTodos = todos.filter((todo) => todo.text != todoText);

  localStorage.setItem("todos", JSON.stringify(filteredTodos));
};

const updateTodoStatusLocalStorage = (todoText) => {
  const todos = getTodosLocalStorage();

  // Map modifica os dados atual
  // Se o text é o igual ao que eu enviei para essa função
  // Se for igual , o todo.done é ao contrário do que está salvo anteriormente
  todos.map((todo) =>
    todo.text === todoText ? (todo.done = !todo.done) : null
  );

  localStorage.setItem("todos", JSON.stringify(todos));
};

const updateTodoLocalStorage = (todoOldText, todoNewText) => {
  const todos = getTodosLocalStorage();

  // O todo.text recebe o novo texto dessa função
  todos.map((todo) =>
    todo.text === todoOldText ? (todo.text = todoNewText) : null
  );

  localStorage.setItem("todos", JSON.stringify(todos));
};

loadTodos();
