var setaDireita = window.document.getElementById("setadireita")
var setaEsquerda = window.document.getElementById("setaesquerda")
var Leonardo = window.document.getElementById("Leonardo")
var Samantha = window.document.getElementById("Samantha")
var Bruna = window.document.getElementById("Bruna")

function RolarParaDireita(){
    Leonardo.style = "display:none"
    Bruna.style = "display:flex"
    setaEsquerda.style = "display:flex; margin-top: 55px"
    setaDireita.style = "display:none"
}

function RolarParaEsquerda(){
    Leonardo.style = "display:flex"
    Bruna.style = "display:none"
    setaEsquerda.style = "display:none"
    setaDireita.style = "display:flex; margin-top: 55px"
}
