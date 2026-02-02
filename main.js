'use stric'

const botaoTrocarCor = document.getElementById('trocar-cor')

const cores = {
    "azul": "blue",
    "vermelho": "red",
    "verde": "green",
    "amarelo": "yellow",
    "preto": "black",
    "branco": "white",
    "cinza": "gray",
    "roxo": "purple",
    "rosa": "pink",
    "laranja": "orange",
    "marrom": "brown",
    "ciano": "cyan"
}

function trocarCor(){
    const inputCor = document.getElementById('cor').value.toLowerCase().trim()

    const corFinal = cores[inputCor] || inputCor

    document.body.style.backgroundColor = corFinal
}

botaoTrocarCor.addEventListener('click', trocarCor)