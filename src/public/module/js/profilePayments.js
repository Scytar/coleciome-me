export default () => {
    const conteiner = document.createElement('section');
    conteiner.setAttribute("id", "profile");

    conteiner.style.cssText = `display: grid;
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
    <div id="pocket">🍪00,00</div>
    </section>

    <section id="userData">
    <nav id="navLogin">
    <a id="btnPerfil" data-pathname="/perfil" >Dados do usuário</a>
    <a id="btnPagamentos"  data-pathname="/pagamentos" class="selected">Pagamentos</a>
</nav>

<div id="conteinerLogin">
<h3 class="paymentSubtitle">Principal forma de pagamento</h3>
<div id="mainMethod">
    <p>Nome (como no cartão): </p>
    <p>Nome do usuário </p>
    <p>Número: </p>
    <p>xxxx xxxx xxxx xxxx </p>
    <p>Bandeira: </p>
    <p>VISA </p>
</div>

<h3 class="paymentSubtitle">Demais formas de pagamento</h3>
<div id="otherMethods">
<span> +Cartão </span>
<span> Boleto </span>
<span> PayPall </span>
<span> PIX </span>
</div>
    </section>
    
    `

    conteiner.innerHTML = conteudo;

    return conteiner;
}