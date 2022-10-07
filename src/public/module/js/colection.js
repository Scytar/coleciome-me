export default () => {
    const conteiner = document.createElement('section');
    conteiner.classList.add("pageWithUser")

    const conteudo = `
    <section id="colectionFig">
        <h3>Minha coleção</h3>
        <div id="coletionsFig">
        <div class="memeContainer"><img src="./module/img/home2.png" class="fig"></div>
        <div class="memeContainer"><img src="./module/img/home2.png" class="fig"></div>
        <div class="memeContainer"><img src="./module/img/home3.png" class="rareFig"></div>
        <div class="memeContainer"><img src="./module/img/home2.png" class="fig"></div>
        <div class="memeContainer"><img src="./module/img/home4.png" class="fig"></div>
        <div class="memeContainer"><img src="./module/img/home2.png" class="fig"></div>
        <div class="memeContainer"><img src="./module/img/home4.png" class="fig"></div>
        <div class="memeContainer"><img src="./module/img/home2.png" class="fig"></div>
        <div class="memeContainer"><img src="./module/img/home3.png" class="rareFig"></div>
        <div class="memeContainer"><img src="./module/img/home2.png" class="fig"></div>
        <div class="memeContainer"><img src="./module/img/home4.png" class="fig"></div>
        <div class="memeContainer"><img src="./module/img/home2.png" class="fig"></div>
        <div class="memeContainer"><img src="./module/img/home3.png" class="rareFig"></div>
        <div class="memeContainer"><img src="./module/img/home2.png" class="fig"></div>
        <div class="memeContainer"><img src="./module/img/home4.png" class="fig"></div>
        <div class="memeContainer"><img src="./module/img/home4.png" class="fig"></div>
        <div class="memeContainer"><img src="./module/img/home4.png" class="fig"></div>
        <div class="memeContainer"><img src="./module/img/home3.png" class="rareFig"></div>
        <div class="memeContainer"><img src="./module/img/home2.png" class="fig"></div>
        <div class="memeContainer"><img src="./module/img/home3.png" class="rareFig"></div>
        <div class="memeContainer"><img src="./module/img/home4.png" class="fig"></div>
        <div class="memeContainer"><img src="./module/img/home2.png" class="fig"></div>
        <div class="memeContainer"><img src="./module/img/home3.png" class="rareFig"></div>
        <div class="memeContainer"><img src="./module/img/home2.png" class="fig"></div>
        <div class="memeContainer"><img src="./module/img/home4.png" class="fig"></div>
        <div class="memeContainer"><img src="./module/img/home4.png" class="fig"></div>
        <div class="memeContainer"><img src="./module/img/home4.png" class="fig"></div>
        <div class="memeContainer"><img src="./module/img/home4.png" class="fig"></div>
        <div class="memeContainer"><img src="./module/img/home3.png" class="rareFig"></div>
        <div class="memeContainer"><img src="./module/img/home2.png" class="fig"></div>
        <div class="memeContainer"><img src="./module/img/home4.png" class="fig"></div>
        <div class="memeContainer"><img src="./module/img/home2.png" class="fig"></div>
        <div class="memeContainer"><img src="./module/img/home3.png" class="rareFig"></div>
        <div class="memeContainer"><img src="./module/img/home2.png" class="fig"></div>
        <div class="memeContainer"><img src="./module/img/home4.png" class="fig"></div>
        <div class="memeContainer"><img src="./module/img/home3.png" class="rareFig"></div>
        <div class="memeContainer"><img src="./module/img/home2.png" class="fig"></div>
        <div class="memeContainer"><img src="./module/img/home2.png" class="fig"></div>
    </section>
    `;

    conteiner.innerHTML = conteudo;

    return conteiner;
}