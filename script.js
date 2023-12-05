document.addEventListener("DOMContentLoaded", function() {
    const botaoTrocar = document.getElementById("button");
    const imagemExibida = document.getElementById("imagemExibida");
    const urlsImagens = ["imgs/img1.jpg", "imgs/img2.jpg", "imgs/img3.jpg", "imgs/img4.jpg"];
    let indiceAtual = 0;
    
    botaoTrocar.addEventListener("click", function() {
      indiceAtual = (indiceAtual + 1) % urlsImagens.length;
      imagemExibida.src = urlsImagens[indiceAtual];
    });
  });