export default () => {
    const conteiner = document.createElement('section');

    conteiner.style.cssText = `display: grid;
    grid-template-columns: 40% 60%;
    justify-content: center;
    align-items: center;`;

    const conteudo = `
    <section id="spacUser">
        <h2 id="nameUser">Maggie</h2>
        <div id="avatar"></div>
        <p id="tempoMemeiro">Memeiro desde Setembro de 2022</p>
        <div id="bar"></div>
        <p>Minha carteira:</p>
        <div id="pocket">R$00,00</div>
    </section>

    <section id="colectionFig">
        <h3>Minha coleção</h3>
        <div id="coletionsFig">
            <img src="./module/img/home2.png" class="fig">
            <img src="./module/img/home4.png" class="fig">
            <img src="./module/img/home2.png" class="fig">
            <img src="./module/img/home4.png" class="fig">
            <img src="./module/img/home2.png" class="fig">
            <img src="./module/img/home4.png" class="fig">
            <img src="./module/img/home2.png" class="fig">
            <img src="./module/img/home4.png" class="fig">
            <img src="./module/img/home2.png" class="fig">
            <img src="./module/img/home4.png" class="fig">
            <img src="./module/img/home2.png" class="fig">
            <img src="./module/img/home4.png" class="fig">
            <img src="./module/img/home2.png" class="fig">
            <img src="./module/img/home4.png" class="fig">
            <img src="./module/img/home2.png" class="fig">
            <img src="./module/img/home4.png" class="fig">

            <img src="./module/img/home2.png" class="fig">
            <img src="./module/img/home4.png" class="fig">
            <img src="./module/img/home2.png" class="fig">
            <img src="./module/img/home4.png" class="fig">
            <img src="./module/img/home2.png" class="fig">
            <img src="./module/img/home4.png" class="fig">
            <img src="./module/img/home2.png" class="fig">
            <img src="./module/img/home4.png" class="fig">
            <img src="./module/img/home2.png" class="fig">
            <img src="./module/img/home4.png" class="fig">
            <img src="./module/img/home2.png" class="fig">
            <img src="./module/img/home4.png" class="fig">
            <img src="./module/img/home2.png" class="fig">
            <img src="./module/img/home4.png" class="fig">
            <img src="./module/img/home2.png" class="fig">
            <img src="./module/img/home4.png" class="fig">
        </div>
    </section>
    `;

    conteiner.innerHTML = conteudo;

    return conteiner;
}