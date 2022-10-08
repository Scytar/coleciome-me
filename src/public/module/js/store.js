export default () => {
    const conteiner = document.createElement('section');
    conteiner.classList.add("pageWithUser")

    const conteudo = `
        <div id="conteinerStore" class="gap-big">

        <section id="bonus">
            <h2>Bônus diário</h2>
            <div class="storeItem greenBorder">
                <img id="loginBonus" src="./module/img/random-card.svg" alt="">
            </div>
        </section>


        <section id="storeFig">
            <h2>Loja de figurinhas</h2>

            <div id="storeItemsContainer">
                <div class="conteinerPack">
                    <div class="storeItem greenBorder">
                        <img src="./module/img/random-card.svg" alt="pacote de figurinhas normais">
                    </div>
                    <button class="btnPay" id="buyComum">Comprar</button>
                </div>

                <div class="conteinerPack">
                <div class="storeItem orangeBorder">
                    <img src="./module/img/random-card.svg" alt="pacote de figurinhas normais">
                </div>
                    <button class="btnPay" id="buyGold">Comprar</button>
                </div>
            </div>
        </section>
        <section id="walletCreditStore" class="flex-column justify-center align-center gap-big border-purple">
            <h2>Compre Créditos na Carteira</h2>
            <div class="flex-column justify-center align-center gap-small">
                <div class="flex-row justify-center align-center">
                    <p class="creditLabel">🍪</p>
                    <input id="valueToAddToWalletInput" type="number" placeholder="Quantidade">
                </div>
                <button class="btnPay">Comprar</button>
            </div>
        </section>
    </div>
    `;

    conteiner.innerHTML = conteudo;

    return conteiner;
}