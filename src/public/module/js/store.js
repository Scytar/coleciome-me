export default () => {
    const conteiner = document.createElement('section');
    conteiner.classList.add("pageWithUser")

    const conteudo = `

        <section id="spacUser">
                <h2 id="nameUser">Maggie</h2>
                <div id="avatar"></div>
                <p id="tempoMemeiro">Memeiro desde Setembro de 2022</p>
                <div id="bar"></div>
                <p>Minha carteira:</p>
                <div id="pocket">R$00,00</div>
        </section>

        <div id="conteinerStore">

            <section id="bonus">
                <h3>Bônus diário</h3>
                <div id="loginBonus"></div>
            </section>


            <section id="storeFig">
            <h3>Loja de figurinhas</h3>

            <div class="conteinerPack">
                <img src="./module/img/comum.svg" alt="pacote de figurinhas normais">
                <button class="btnPay" id="buyComum">Comprar</button>
            </div>

            <div class="conteinerPack">
                <img src="./module/img/gold.svg" alt="pacotes de figurinhas gold">
                <button class="btnPay" id="buyGold">Comprar</button>
            </div>
            </section>
        </div>
    `;

    conteiner.innerHTML = conteudo;

    return conteiner;
}