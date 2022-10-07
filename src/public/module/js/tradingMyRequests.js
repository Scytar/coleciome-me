export default () => {
    const exibe = document.createElement('section');

    exibe.style.cssText = `display: grid;
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

    <section id="userData">
    <nav id="navLogin">
        <a id="offers" data-pathname="/trocas" >Minhas ofertas</a>
        <a id="requests" data-pathname="/solicitacoes" class="selected">Solicitações</a>
    </nav>

    <div id="conteinerLogin">
        <div class="cardsGroup">
            <div class="cardsTrading">
                <img src="./module/img/comum.svg" class="cardsTrading"></img>
                <img src="./module/img/comum.svg" class="cardsTrading"></img>
            </div>

            <div id="linha-vertical"></div>
            <div class="cardsTrading">
                <img src="./module/img/comum.svg" class="cardsTrading"></img>
                <img src="./module/img/comum.svg" class="cardsTrading"></img>
            </div>
        </div>
        <div id="linha-horizontal"></div>
        <div class="cardsGroup"> <div class="cardsTrading">
            <img src="./module/img/comum.svg" class="cardsTrading"></img>
            <img src="./module/img/comum.svg" class="cardsTrading"></img>
        </div>
        <div id="linha-vertical"></div>
        <div id="containerSolicitar" class="cardsTrading">
            <button id="solicitar">Solicitar</button>
        </div>
    </div>
</section>

    `

    exibe.innerHTML = conteudo;

    return exibe;
}