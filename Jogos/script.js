function filtrar () {
    const searchInput = document.getElementById('searchInput')
    const termoBusca = searchInput.value.toLowerCase()
    const jogos = document.getElementsByClassName('descrição')

    for (let i = 0; i < jogos.length; i++) {
        const nomeJogo = jogos[i].textContent.toLowerCase()
        const jogoContainer = jogos[i].closest('.games')
        const imagem = jogoContainer.querySelector('img')

        if (nomeJogo.includes(termoBusca) || termoBusca === '') {
            jogoContainer.style.display = 'flex'
            imagem.style.display = 'flex'
        } else {
            jogoContainer.style.display = 'none'
            imagem.style.display = 'none'
        }
    }
}