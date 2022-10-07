export default () => {
    const exibe = document.createElement('section');

    exibe.style.cssText = `display: grid;
    grid-template-columns: 35% 65%;
    justify-content: center;
    align-items: center;
    gap: 20px
    `;

    const conteudo = `
    <section id="userData">
    <nav id="navLogin">
        <a id="offers" data-pathname="/trocas" >Ofertas</a>
        <a id="requests" data-pathname="/solicitacoes" class="selected">Minhas solicitações</a>
    </nav>

    <div id="conteinerLogin">
        <div class="cardsGroup">
            <div class="cardsTrading">
                <img src="./module/img/comum.svg" ></img>
                <img src="./module/img/comum.svg" ></img>
            </div>

            <div id="linha-vertical"></div>

            <div class="cardsTrading">
                <img src="./module/img/comum.svg" ></img>
                <img src="./module/img/comum.svg" ></img>
            </div>
        </div>

        <div id="linha-horizontal"></div>

            <div class="cardsGroup"> <div class="cardsTrading">
                <img src="./module/img/comum.svg" ></img>
                <img src="./module/img/comum.svg" ></img>
            </div>

            <div id="linha-vertical"></div>

            <div class="cardsTrading">

            </div>
    </div>

    <button id="solicitar">Solicitar</button>
</section>

    `

    exibe.innerHTML = conteudo;

    return exibe;
}