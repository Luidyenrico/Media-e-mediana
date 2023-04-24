function GerarTabuada(){

    let num = document.getElementById("inpN1")
    let numvalor = Number(num.value)
    let res = document.getElementById("divT1")

if (num.value.length == 0) {

    res.innerHTML = "Deve ser digitado um número para que seja feito o calculo 🤦‍♂️"

} else {

    res.innerHTML = `A tabuada de ${numvalor} é: <br><br>`

    for(p = 0 ;p < 11 ; p++ ) {
    
    
    res.innerHTML += `${numvalor} x ${p} = ${numvalor * p} <br>`
    }

}
}