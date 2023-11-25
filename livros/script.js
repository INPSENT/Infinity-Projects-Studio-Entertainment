function filtrar () {
    const searchInput = document.getElementById('searchInput')
    const termoBusca = searchInput.value.toLowerCase()
    const livros = document.getElementsByClassName('descrição')

    for (let i = 0; i < livros.length; i++) {
        const nomeLivro = livros[i].textContent.toLowerCase()
        const livroContainer = livros[i].closest('.livro')
        const imagem = livroContainer.querySelector('img')

        if (nomeLivro.includes(termoBusca) || termoBusca === '') {
            livroContainer.style.display = 'flex'
            imagem.style.display = 'flex'
        } else {
            livroContainer.style.display = 'none'
            imagem.style.display = 'none'
        }
    }
}