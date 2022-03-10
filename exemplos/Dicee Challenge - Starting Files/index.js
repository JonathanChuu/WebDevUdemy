
//rolar de dados para cada participante
let dadoParticipante1 = Math.floor(Math.random() * 6) + 1
let dadoParticipante2 = Math.floor(Math.random() * 6) + 1


if (dadoParticipante1 > dadoParticipante2) {
    document.querySelector('h1').innerHTML = '🚩 Winner 1'
} else if (dadoParticipante2 > dadoParticipante1) {
    document.querySelector('h1').innerHTML = ' Winner 2'
} else {
    document.querySelector('h1').innerHTML = 'Draw'
}

let resultadoDado1 = 'images/' + 'dice' + dadoParticipante1 + '.png'
let resultadoDado2 = 'images/' + 'dice' + dadoParticipante2 + '.png'

document.querySelectorAll('img')[0].setAttribute('src', resultadoDado1)
document.querySelectorAll('img')[1].setAttribute('src', resultadoDado2)


