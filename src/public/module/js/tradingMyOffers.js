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
        <a id="offers" data-pathname="/trocas" class="selected" >Minhas ofertas</a>
        <a id="requests" data-pathname="/solicitacoes">Solicitações</a>
    </nav>

    <div id="conteinerLogin">
        <div class="cardsGroup">
            <div class="cardsTrading">
                <img src="./module/img/comum.svg" class="cardsTrading"></img>
                <div class="cardGet" class="cardsTrading"></div>
            </div>

            <div id="linha-vertical"></div>
            <div class="cardsTrading">
                <img src="./module/img/comum.svg" class="cardsTrading"></img>
                <div class="cardGet" class="cardsTrading"></div>
            </div>
        </div>
        <div id="linha-horizontal"></div>
        <div class="cardsGroup"> <div class="cardsTrading">
            <img src="./module/img/comum.svg" class="cardsTrading"></img>
            <div class="cardGet" class="cardsTrading"></div>
        </div>
        <div id="linha-vertical"></div>
        <div id="messageOffers" class="cardsTrading">
            <p>Você não tem mais trocas disponíveis</p>
        </div>
    </div>
</section>

    `

    exibe.innerHTML = conteudo;

    return exibe;
}