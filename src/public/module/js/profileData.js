export default () => {
    const exibe = document.createElement('section');
    exibe.setAttribute("id", "profile")
    exibe.classList.add("pageWithUser")

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
        <a id="btnPerfil" data-pathname="/perfil"  class="selected" >Dados do usuário</a>
        <a id="btnPagamentos" data-pathname="/pagamentos" >Pagamentos</a>
    </nav>

<div id="conteinerLogin">
<h3 class="paymentSubtitle">Dados do usuário</h3>
<div id="userInformation">

    <div id="labelDiv">
        <label class="profileData" for="nameData">
        Nome:
        </label>
        <label class="profileData" for="enderecoData">
        Endereço:
        </label>
        <label class="profileData" for="cpfData">
        CPF:
        </label>
        <label class="profileData" for="emailData">
        Email:
        </label>
        <label class="profileData" for="senhaData">
        Senha:
        </label>
        <label class="profileData" for="celularData">
        Celular:
        </label>
    </div>

    <div id="inputDiv">
        <input type="text" id="nameData" name="nameData" required>
        <input type="text" id="enderecoData" name="enderecoData" required>
        <input type="text" id="cpfData" name="cpfData" required>
        <input type="email" id="emailData" name="emailData" required>
        <input type="password" id="senhaData" name="senhaData" required>
        <input type="password" id="celularData" name="celularData" required>
    </div>
    

    <button id="btnSend">Enviar</button>
</div>
    </section>
    `

    exibe.innerHTML = conteudo;

    return exibe;
}