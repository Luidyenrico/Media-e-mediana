let botaoCal = document.getElementById("botaoCalcular")
let botaoInf = document.getElementById("botaoInfo")

botaoInf.addEventListener("mouseover", Mostra_Info); // Vai adicionar a função de mostrar informação ao botão info quando passar o mouse.
botaoInf.addEventListener("mouseout", Esconde_Info); // Vai sumir com as informações ao tirar o mouse.
botaoCal.addEventListener("click", Calcular); // Atribui a função ao Botão principal de calcular.

function Calcular() { // Função para receber os valores e realizar o calculo.
    let numeroA = document.getElementById("inputNumA")
    let numeroB = document.getElementById("inputNumB")
    let divRes = document.getElementById("divResultado")
        let valorA = Number(numeroA.value)
        let valorB = Number(numeroB.value)

    if (numeroA.value.length == 0 || numeroB.value.length == 0){ // if para caso não seja colocado nenhum valor, não dar erro.
        divRes.innerHTML = "Digite um valor válido nas duas caixas."
            } else {
             if (valorA < valorB) { // Esse if é para sempre funcionar independente da ordem que o usuario coloque os numeros para que sempre o numero do meio seja a mediana.
                let resultadoC = 2 * valorA - valorB
                divRes.innerHTML = `<strong>C</strong> = ${resultadoC}`
            } else {  
                let resultadoC = 2 * valorB - valorA
                divRes.innerHTML = `<strong>C</strong> = ${resultadoC}`
            }
            }
        }


function Mostra_Info() { // Função de mostrar informações do botão de info.
let informacao = document.getElementById("sectioninformacoes")
informacao.style.display = "block"
}

function Esconde_Info() { // Função de esconder informações do botão de info.
    let informacao = document.getElementById("sectioninformacoes")
    informacao.style.display = "none"
}