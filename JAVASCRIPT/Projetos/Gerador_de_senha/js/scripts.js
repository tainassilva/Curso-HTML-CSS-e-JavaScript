// Seleção de elementos
const generatePasswordButton = document.querySelector("#generate-password");
const generatedPasswordElement = document.querySelector("#generated-password");

// Após refatoração
const openCloseGeneratorButton = document.querySelector(
  "#open-generate-password"
);
const generatePasswordContainer = document.querySelector("#generate-options");
const lengthInput = document.querySelector("#length");
const lettersInput = document.querySelector("#letters");
const numbersInput = document.querySelector("#numbers");
const symbolsInput = document.querySelector("#symbols");
const copyPasswordButton = document.querySelector("#copy-password");

// Funções
const getLetterLowerCase = () => {
  // fromCharCode gera a letra ao número correspondente
  // Multiplica por 26 porque tem 26 letras do alfabeto 
  // 97 é onde começa as letras minúsculas
  // Gera um número aleatório entre 0 e 25
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

const getLetterUpperCase = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

const getNumber = () => {
  return Math.floor(Math.random() * 11).toString();
};

const getSymbol = () => {
  const symbols = "(){}[]=<>/,.!@#$%^&*";
  // Multiplica pela quantidade de caracteres da string
  return symbols[Math.floor(Math.random() * symbols.length)];
};

// Função que junta todos os caracteres e entrega a senha
const generatePassword = (
  getLetterLowerCase,
  getLetterUpperCase,
  getNumber,
  getSymbol
) => {
  let password = "";

  // Tamanho da senha gerada vai ser 10
  const passwordLength = lengthInput.value;

  // Após refatoração
  const generators = [];

// Se o checkbox estiver marcado
  if (lettersInput.checked) {
    generators.push(getLetterLowerCase, getLetterUpperCase);
  }

  if (numbersInput.checked) {
    generators.push(getNumber);
  }

  if (symbolsInput.checked) {
    generators.push(getSymbol);
  }

  // Se o usuário não gerar senha, é só retornar
  // Não faz nada
  if (generators.length === 0) {
    return;
  }

  // Vai rodar 10 vezes 
  for (i = 0; i < passwordLength; i = i + generators.length) {
    // Vai acessar 10 vezes funções aleatórias
    generators.forEach(() => {
      const randomValue =
      // Parênteses porque vai me dar uma função
        generators[Math.floor(Math.random() * generators.length)]();

      password += randomValue;
    });
  }

  // Tirando os 2 ultimos dígitos porque estava com 12
  password = password.slice(0, passwordLength);

  generatedPasswordElement.style.display = "block";
  generatedPasswordElement.querySelector("h4").innerText = password;
};

// Eventos
generatePasswordButton.addEventListener("click", (e) => {
  e.preventDefault();

  generatePassword(
    getLetterLowerCase,
    getLetterUpperCase,
    getNumber,
    getSymbol
  );
});

openCloseGeneratorButton.addEventListener("click", () => {
  // Abertura e fechamento da div
  generatePasswordContainer.classList.toggle("hide");
});

copyPasswordButton.addEventListener("click", (e) => {
  e.preventDefault();

  const password = generatedPasswordElement.querySelector("h4").innerText;

  // Função que faz o control+c
  navigator.clipboard.writeText(password).then(function () {
    copyPasswordButton.innerText = "Senha copiada com sucesso!";

    // Voltando ao texto original
    setTimeout(() => {
      copyPasswordButton.innerText = "Copiar";
    }, 1000);
  });
});
