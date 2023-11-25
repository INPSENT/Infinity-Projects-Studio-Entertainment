function filtrar(){
    const game = document.getElementsByClassName('filtros')
    const termoBusca = game.value.toLowerCase()
    const jogos = document.getElementsByClassName('games')

    for (let i = 0; i < jogos.length; i++){
        const nomeJogo = jogos[i].querySelector('a').textContent.toLowerCase()
        const imagem = jogos[i].querySelector['img']

        if (nomeJogo.includes(termoBusca) || termoBusca === ''){
            jogos[i].style.display = 'flex'
            imagem.style.display = 'flex'
        }else{
            jogos[i].style.display = 'none'
            imagem.style.display = 'none'
        }
    }
}