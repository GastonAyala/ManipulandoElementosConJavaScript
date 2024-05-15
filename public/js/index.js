window.addEventListener('load', () => {
    const indexMain = document.querySelector('.container')
    const indexTitle = document.querySelector('.subtitulo')
    const indexLink = document.querySelector('a')
    const indexParagraphs = document.querySelectorAll('p')
    const userName = window.prompt('Ingrese su nombre')
    if(!userName) {
        indexTitle.innerText += 'Invitado'
    } else {
        indexTitle.innerText += userName
    }
    indexTitle.style.textTransform = 'uppercase'
    indexLink.style.color = "red"

   
    if(window.confirm("¿Desea colocar un fondo de pantalla?")) {
        document.querySelector('body').classList.add('fondo')
    }

    for (let i = 0; i < indexParagraphs.length; i++) {
        const p = indexParagraphs[i];
        if(i % 2 === 0) {
            p.classList.add('destacadoPar')
        } else {
            p.classList.add('destacadoImpar')
        }
    }

    indexMain.style.display = "block"
})