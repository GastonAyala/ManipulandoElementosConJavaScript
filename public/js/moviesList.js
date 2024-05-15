window.addEventListener('load', () => {
    const body = document.querySelector('body')
    const title = document.querySelector('.moviesListTitulo')

    const darkMode = window.prompt('¿Desea modo oscuro?')
    if(darkMode) {
        body.style.backgroundColor = '#7f7f7f'
        body.classList.add('fondoMoviesList')
    }
    title.innerHTML += "LISTADO DE PELÍCULAS"
    title.style.color = "white"
    title.style.backgroundColor = "teal"
    title.style.padding = "20px"


})