//Selecionando todos os círculos
const buttons = document.querySelectorAll("#image-picker li");
//Selecionando apenas uma imagem
const image = document.querySelector("#product-image");

// Cada um dos botões tem seu evento
buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    //Informações do botão
    console.log(e);

    //Remove botão selecionado para identificar qual está selecionado atualmente
    buttons.forEach((btn) =>
      btn.querySelector(".color").classList.remove("selected")
    );

    const button = e.target;

    //Pega id para saber em qual imagem colocar
    const id = button.getAttribute("id");

    //Muda os botões
    button.querySelector(".color").classList.add("selected");


    image.classList.toggle("changing");
    // Texto com os mesmos nomes do id
    image.setAttribute("src", `img/iphone_${id}.jpg`);

     //Muda a imagem sem o efeito apagado
    setTimeout(() => {
      //Remove o changing e trás a cor original novamente
      image.classList.toggle("changing");
    }, 200);
  });
});
