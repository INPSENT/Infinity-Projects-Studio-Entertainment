function filtrar () {
    const searchInput = document.getElementById('searchInput')
    const termoBusca = searchInput.value.toLowerCase()
    const filmes = document.getElementsByClassName('descrição')

    for (let i = 0; i < filmes.length; i++) {
        const nomeFilme = filmes[i].textContent.toLowerCase()
        const filmeContainer = filmes[i].closest('.games')
        const imagem = filmeContainer.querySelector('img')

        if (nomeFilme.includes(termoBusca) || termoBusca === '') {
            filmeContainer.style.display = 'flex'
            imagem.style.display = 'flex'
        } else {
            filmeContainer.style.display = 'none'
            imagem.style.display = 'none'
        }
    }
}