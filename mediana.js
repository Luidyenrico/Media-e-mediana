let botaoCal = document.getElementById("botaoCalcular")
let botaoInf = document.getElementById("botaoInfo")

botaoInf.addEventListener("mouseover", Mostra_Info);
botaoInf.addEventListener("mouseout", Esconde_Info);
botaoCal.addEventListener("click", Calcular);

function Calcular() {
    let numeroA = document.getElementById("inputNumA")
    let numeroB = document.getElementById("inputNumB")
    let divRes = document.getElementById("divResultado")
        let valorA = Number(numeroA.value)
        let valorB = Number(numeroB.value)

    if (numeroA.value.length == 0 || numeroB.value.length == 0){
        divRes.innerHTML = "Digite um valor válido nas duas caixas."
            } else {
             if (valorA < valorB) {
                let resultadoC = 2 * valorA - valorB
                divRes.innerHTML = `<strong>C</strong> = ${resultadoC}`
            } else {
                let resultadoC = 2 * valorB - valorA
                divRes.innerHTML = `<strong>C</strong> = ${resultadoC}`
            }
            }
        }


function Mostra_Info() {
let informacao = document.getElementById("sectioninformacoes")
informacao.style.display = "block"
}

function Esconde_Info() {
    let informacao = document.getElementById("sectioninformacoes")
    informacao.style.display = "none"
}