export default () => {
    const exibe = document.createElement('section');
    exibe.setAttribute("id", "tradingCards")

    const conteudo = `
    <nav id="navTrading">
        <a id="offers" data-pathname="/trocas" class="selected" >Ofertas</a>
        <a id="requests" data-pathname="/solicitacoes">Minhas solicitações</a>
    </nav>

    <div id="containerTrading">
        <section class="conteinerTrading">
            <img src="./module/img/home2.png">
            <spam><?xml version="1.0" ?><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title/><g data-name="Layer 2" id="Layer_2"><polygon points="18.71 18.71 22.41 15 18.71 11.29 17.29 12.71 18.59 14 10 14 10 16 18.59 16 17.29 17.29 18.71 18.71"/><polygon points="6.71 11.29 5.41 10 14 10 14 8 5.41 8 6.71 6.71 5.29 5.29 1.59 9 5.29 12.71 6.71 11.29"/></g></svg></spam>
            <img src="./module/img/home4.png">   
        </section>
    </div>

    <button id="solicitar">Outras ofertas</button>
    `

    exibe.innerHTML = conteudo;

    return exibe;
}