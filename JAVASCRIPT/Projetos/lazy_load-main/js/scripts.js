//Seleciona todas as imagens
const images = document.querySelectorAll(".image-container img");

// Uma forma de alterar as imagens

// entradas (imagens) e o observer é o proprio observador do evento
const observer = new IntersectionObserver((entries, observer) => {
  // Percorre as imagens e faz a substituição
  entries.forEach((entry) => {
    // Se a imagem não está sendo observada, não precisa modificar
    if (!entry.isIntersecting) return;

    // O elemento disparou um evento(target)
    const image = entry.target;

    // Substituição de uma string por outra
    // substitui uma pela outra(Resolução da imagem)
    image.src = image.src.replace("&w=10&", "&w=1000&");


    // Altere o src uma vez e esse observer não funcione novamente
    observer.unobserve(image);
  });
}, {});

// Ativa a observação das imagens
images.forEach((image) => {
  // Observa as imagens
  observer.observe(image);
});
