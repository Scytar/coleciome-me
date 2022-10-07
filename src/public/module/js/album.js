export default () => {
    const conteiner = document.createElement('section');
    conteiner.classList.add("pageWithUser")

    const figurinhas = ["./module/img/album01.svg", "./module/img/album01.svg"];

    let conteudo = `
    <section id="spacUser">
            <h2 id="nameUser">Maggie</h2>
            <div id="avatar"></div>
            <p id="tempoMemeiro">Memeiro desde Setembro de 2022</p>
            <div id="bar"></div>
            <p>Minha carteira:</p>
            <div id="pocket">R$00,00</div>
    </section>

    <article id="spaceAlbum">
        <h3><</h3> `;
    figurinhas.forEach( f => conteudo += `<img src="${f}" />`)
    conteudo +=`
            <h3>></h3>
        </article>
    
    `;
    /* const conteudo = `
    
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
            <!--<div id="pagsAlbumLeft"></div>
            <div id="pagsAlbumRight"></div>-->
            <img src="./module/img/album01.svg" />
            <img src="./module/img/album01.svg" />
            <h3>></h3>
        </article>
    
    `; */

    conteiner.innerHTML = conteudo;

    return conteiner;
}