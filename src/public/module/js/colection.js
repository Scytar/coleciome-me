export default () => {
    const conteiner = document.createElement('section');
    conteiner.classList.add("pageWithUser")

    const conteudo = `
    <section id="colectionFig">
        <h3>Minha coleção</h3>
        <div id="coletionsFig">
        <div class="memeContainer greenBorder"><img src="./module/img/dog-smile.jpg" class="fig"></div>
        <div class="memeContainer greenBorder"><img src="./module/img/dog-smile.jpg" class="fig"></div>
        <div class="memeContainer orangeBorder"><img src="./module/img/dog-angry.jpg" class="rareFig"></div>
        <div class="memeContainer greenBorder"><img src="./module/img/dog-smile.jpg" class="fig"></div>
        <div class="memeContainer orangeBorder"><img src="./module/img/funny-look.gif" class="fig"></div>
        <div class="memeContainer greenBorder"><img src="./module/img/dog-smile.jpg" class="fig"></div>
        <div class="memeContainer greenBorder"><img src="./module/img/papagaio.webp" class="fig"></div>
        <div class="memeContainer greenBorder"><img src="./module/img/dog-smile.jpg" class="fig"></div>
        <div class="memeContainer orangeBorder"><img src="./module/img/dog-angry.jpg" class="rareFig"></div>
        <div class="memeContainer greenBorder"><img src="./module/img/dog-smile.jpg" class="fig"></div>
        <div class="memeContainer greenBorder"><img src="./module/img/papagaio.webp" class="fig"></div>
        <div class="memeContainer greenBorder"><img src="./module/img/dog-smile.jpg" class="fig"></div>
        <div class="memeContainer orangeBorder"><img src="./module/img/dog-angry.jpg" class="rareFig"></div>
        <div class="memeContainer greenBorder"><img src="./module/img/dog-smile.jpg" class="fig"></div>
        <div class="memeContainer greenBorder"><img src="./module/img/papagaio.webp" class="fig"></div>
        <div class="memeContainer greenBorder"><img src="./module/img/papagaio.webp" class="fig"></div>
        <div class="memeContainer greenBorder"><img src="./module/img/papagaio.webp" class="fig"></div>
        <div class="memeContainer orangeBorder"><img src="./module/img/dog-angry.jpg" class="rareFig"></div>
        <div class="memeContainer greenBorder"><img src="./module/img/dog-smile.jpg" class="fig"></div>
        <div class="memeContainer orangeBorder"><img src="./module/img/dog-angry.jpg" class="rareFig"></div>
        <div class="memeContainer greenBorder"><img src="./module/img/papagaio.webp" class="fig"></div>
        <div class="memeContainer greenBorder"><img src="./module/img/dog-smile.jpg" class="fig"></div>
        <div class="memeContainer orangeBorder"><img src="./module/img/dog-angry.jpg" class="rareFig"></div>
        <div class="memeContainer greenBorder"><img src="./module/img/dog-smile.jpg" class="fig"></div>
        <div class="memeContainer greenBorder"><img src="./module/img/papagaio.webp" class="fig"></div>
        <div class="memeContainer greenBorder"><img src="./module/img/papagaio.webp" class="fig"></div>
        <div class="memeContainer greenBorder"><img src="./module/img/papagaio.webp" class="fig"></div>
    </section>
    `;

    conteiner.innerHTML = conteudo;

    return conteiner;
}