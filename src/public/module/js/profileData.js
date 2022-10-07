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
    <a id="btnPerfil" data-pathname="/perfil"  class="selected" >Dados do usuário</a>
    <a id="btnPagamentos" data-pathname="/pagamentos" >Pagamentos</a>
    </nav>
</nav>

<div id="conteinerLogin">
<h3 class="paymentSubtitle">Dados do usuário</h3>
<div id="userInformation">
    <p>Nome:</p>
    <p>aaa</p>
    <p>Endereço:</p>
    <p>aaa</p>
    <p>CPF:</p>
    <p>000 000 000 00</p>
    <p>Email:</p>
    <p>aaa@emial.com</p>
    <p>Senha</p>
    <p>******</p>
    <p>Celular:</p>
    <p>(00) 000000000</p>
</div>
    </section>
    `

    exibe.innerHTML = conteudo;

    return exibe;
}