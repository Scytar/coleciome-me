export default () => {
    const conteiner = document.createElement('section');

    conteiner.style.cssText = `display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;`;

    const conteudo = `
    <div id="home-parent">
        <div id="gif-content">
            <img id="gif" src="./module/img/opai.gif" alt="gif divertido">
        </div>
        <div id="content">
            <section>
                <h1>DIVIRTA-SE</h1>
                <h2>COLECIONANDO E TROCANDO MEMES</h2>
            </section>
            <section id="user">
                <img id="imgUser" src="./module/img/userHome.png">
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
    </div>
    `;

    conteiner.innerHTML = conteudo;

    return conteiner;
}