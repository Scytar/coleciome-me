export default () => {
    const conteiner = document.createElement('section');
    
    conteiner.style.cssText = `display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap:40px;
    `

    const capas = ["./module/img/album01.svg","./module/img/album01.svg","./module/img/album01.svg","./module/img/album01.svg", "./module/img/album01.svg"];

    let conteudo = `
    <article id="spaceAlbum">`;
    capas.forEach( f => conteudo += `<img class="clickable" src="${f}" />`)
    conteudo +=`
        </article>
    
    `;

    conteiner.innerHTML = conteudo;

    return conteiner;
}