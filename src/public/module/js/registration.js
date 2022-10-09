export default () => {
    const conteiner = document.createElement('section')
    conteiner.setAttribute("id", "sectionFather")

    const conteudo = `
    <section class="cadastrogin">
        <nav id="navLogin">
            <a id="registerAnchorButton" data-pathname="/cadastro" " class="selected">Cadastrar</a>
            <a id="loginButton" data-pathname="/login">Entrar</a>
        </nav>

        <div id="conteinerLogin">
            <div id="userDollRegister"></div>
            
            <input type="text" id="nameRegister" maxlength="80" placeholder="Nome" required tabindex="1">

            <input type="email" id="emailRegister" maxlength="80" placeholder="E-mail" required tabindex="2">

            <input type="password" id="passwordRegister" maxlength="10" placeholder="Senha" required tabindex="3">

            <input type="password" id="passwordVerifyRegister" maxlength="10" placeholder="Confirme sua senha" required tabindex="4">

            <button id="btnRegiter">Registrar</button>
        </div>
    </section>
    `

    conteiner.innerHTML = conteudo

    return conteiner
}