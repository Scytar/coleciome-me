export default () => {
    const conteiner = document.createElement('section');
    conteiner.classList.add("pageWithUser")

    const conteudo = `
        <div id="conteinerStore">

            <section id="bonus">
                <h3>Bônus diário</h3>
                <div class="storeItem greenBorder">
                    <img id="loginBonus" src="./module/img/random-card.svg" alt="">
                </div>
            </section>


            <section id="storeFig">
                <h3>Loja de figurinhas</h3>

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
        </div>
    `;

    conteiner.innerHTML = conteudo;

    return conteiner;
}