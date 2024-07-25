// seleção de elementos
const multiplicationForm = document.querySelector("#multiplication-form");
const numberInput = document.querySelector("#number");
const multiplicationInput = document.querySelector("#multiplicator");

const multiplicationTable = document.querySelector("#multiplication-operations")

// Funções

const createTable = (number, multiplicatorNumber) =>{
    console.log(number,multiplicatorNumber);
    
    //Limpa todo o HTML após o submit
    // Para liberar espaço para as próximas ações
    multiplicationTable.innerHTML = "";

    for(i = 1; i <= multiplicatorNumber; i++){
        const result = number * i;
        
        const template = `<div class="row">
        <div class="operation">${number} X ${i} = </div>
        <div class="result">${result}</div>
        </div>`

        // Vai permitir passar para o HTML
        const parser = new DOMParser();

        const htmlTemplate = parser.parseFromString(template, "text/html");

        // Selecionando o row 
        const row = htmlTemplate.querySelector(".row");

        // Adicionando um elemento filho
        multiplicationTable.appendChild(row)
    }
}

// Eventos
multiplicationForm.addEventListener("submit", (event) =>{
   //Não recarrega a página ao submit
    event.preventDefault();

    const multiplicationNumber = +numberInput.value;

    const multiplicatorNumber = +multiplicationInput.value;

    // Não vai imprimir os elementos se faltar um dos inputs
    if(!multiplicationNumber || !multiplicatorNumber) return;

    // Mostrando o valor dos inputs após mandar formulário
    createTable(multiplicationNumber,multiplicatorNumber);
});

