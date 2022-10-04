export default () => {
    const conteiner = document.createElement('section');

    conteiner.style.cssText = `display: grid;
    grid-template-columns: 35% 65%;
    justify-content: center;
    align-items: center;
    gap: 20px
    `;

    const conteudo = `
    
        <section id="spacUser">
                <h2 id="nameUser">Maggie</h2>
                <div id="avatar"></div>
                <p id="tempoMemeiro">Memeiro desde Setembro de 2022</p>
                <div id="bar"></div>
                <p>Minha carteira:</p>
                <div id="pocket">R$00,00</div>
        </section>
    
        <article id="spaceAlbum">
            <h3><</h3>
            <div id="pagsAlbumLeft"></div>
            <div id="pagsAlbumRight"></div>
            <h3>></h3>
        </article>
    
    `;

    conteiner.innerHTML = conteudo;

    return conteiner;
}