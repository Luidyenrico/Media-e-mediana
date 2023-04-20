let botao = document.getElementById("botaoCalcular")

botao.addEventListener("mouseover", Mostra_Info);
botao.addEventListener("mouseout", Esconde_Info);
botao.addEventListener("click", Calcular);



function Calcular() {
    let numeroA = document.getElementById("inputNumA")
    let numeroB = document.getElementById("inputNumB")
    let valoresAB = [Number(numeroA.value), Number(numeroB.value)]
    let divRes = document.getElementById("divResultado")
    divRes.innerHTML = valoresAB
}

function Mostra_Info() {

let informacao = document.getElementById("sectioninformacoes")
informacao.style.display = "block"



}

function Esconde_Info() {

    let informacao = document.getElementById("sectioninformacoes")
    informacao.style.display = "none"

}





