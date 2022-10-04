export default () => {
    const conteiner = document.createElement('section');

    const conteudo = `
    <section class="cadastrogin">
        <nav id="navLogin">
            <a id="registerAnchorButton" data-pathname="/cadastro">Cadastrar</a>
            <a id="LoginAnchorButton" data-pathname="/login" class="selected">Login</a>
        </nav>

        <div id="conteinerLogin">
            <div id="userDoll"></div>
            <input type="text" id="emailLogin" maxlength="80" placeholder="E-mail" required tabindex="1">
            <input type="password" id="passwordLogin" maxlength="10" placeholder="Senha" required tabindex="2">
            <button id="btnLogin">Entrar</button>
        </div>
    </section>
    `;

    conteiner.innerHTML = conteudo;

    return conteiner;
}