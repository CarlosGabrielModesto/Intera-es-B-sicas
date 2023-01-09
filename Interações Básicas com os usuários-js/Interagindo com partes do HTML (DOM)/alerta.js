function inicio() {
    let nome = prompt('Qual é o seu nome?')
    let res = document.getElementById('resultado')
    // Também funciona com o comando abaixo
    // let res = window.document.querySelector('section#resultado')
    res.innerHTML = `<p>Olá, <strong>${nome}</strong> !! Seja bem vindo ao site!`
}