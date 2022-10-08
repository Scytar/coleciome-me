export default () => {
    const exibe = document.createElement('section');
    // exibe.classList.add("pageWithUser")

    /* exibe.style.cssText = `display: grid;
    grid-template-columns: 35% 65%;
    justify-content: center;
    align-items: center;
    gap: 20px
    `; */

    const conteudo = `
    <section id="tradingCards">
    <nav id="navTrading">
        <a id="offers" data-pathname="/trocas" class="selected" >Ofertas</a>
        <a id="requests" data-pathname="/solicitacoes">Minhas solicitações</a>
    </nav>

    <div id="containerTrading">
        <div class="cardsGroup">
            <div class="cardsTrading">

            </div>

            <div id="linha-vertical"></div>

            <div class="cardsTrading">

            </div>
        </div>

        <div id="linha-horizontal"></div>

        <div class="cardsGroup"> 
            <div class="cardsTrading">

            </div>

            <div id="linha-vertical"></div>

            <div class="cardsTrading">
            </div>

        </div>
    </div>

    <button id="solicitar">Outras ofertas</button>
</section>

    `

    exibe.innerHTML = conteudo;

    return exibe;
}