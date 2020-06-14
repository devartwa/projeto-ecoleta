const botaoPontosColeta = document.querySelector("#page-home main a")

const modal = document.querySelector("#modal")

const fechar = document.querySelector("#modal .cabecalho a")

botaoPontosColeta.addEventListener("click", () => {
    modal.classList.remove("hide")
})

fechar.addEventListener("click", () => {
    modal.classList.add("hide")
})