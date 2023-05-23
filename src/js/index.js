const botaoAlterarTema = document.getElementById("botao-alterar-tema");

const body = document.querySelector("body");

const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");

botaoAlterarTema.addEventListener("click", () => {

    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

    body.classList.toggle("modo-escuro");

    if (modoEscuroEstaAtivo) {
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/IMG/sun.png");
    } else {
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/IMG//moon.png");
    }
});

document.addEventListener("scroll", function () {
    var posicaoy = window.pageYOffset;
    if (posicaoy == 0) {
        vt.style.opacity = "0.0";
    } else {
        vt.style.opacity = "1";
    }
});
