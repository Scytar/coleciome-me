export default () => {
    const conteiner = document.createElement('section');

    conteiner.style.cssText = `display: grid;
    grid-template-columns: 55% 45%;
    justify-content: center;
    align-items: center;`;

    const conteudo = `
    <div id="gif-content">
        <img id="gif" src="./module/img/meme-downloading.gif" alt="gif divertido">
    </div>
    <div id="content">
        <h1>DIVIRTA-SE</h1>
        <h2>COLECIONANDO E TROCANDO MEMES</h2>
        
        <section id="user">
            <img id="imgUser" src="./module/img/userHome.png" alt="gif divertido">
            <div id="inf">
                <p>João Maria<ap> 
                <div id="bar"></div>
            </div>
        </section>

        <p id="pCol">Coleção de Memes</p>

        <div id="homeImgs">
            <img id="homeImgs1" src="./module/img/home2.png" alt="Memes">
            <img id="homeImgs2" src="./module/img/home3.png" alt="Memes">
            <img id="homeImgs3" src="./module/img/home4.png" alt="Memes">
        </div> 

    </div>
    `;

    conteiner.innerHTML = conteudo;

    return conteiner;
}