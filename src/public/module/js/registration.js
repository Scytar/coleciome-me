
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

            <input type="text" id="cpfRegister" maxlength="11" placeholder="Somente números do seu CPF" required tabindex="2">
            
            <div id="divDoTelefone" class="flex-row gap-small align-center justify-center width-full">
                <input type="text" id="dddPhoneRegister" maxlength="2" placeholder="DDD" required tabindex="3">
                <input type="text" id="phoneRegister" maxlength="9" placeholder="Somente números do telefone" required tabindex="4">
            </div>

            <input type="email" id="emailRegister" maxlength="80" placeholder="E-mail" required tabindex="5">

            <div>
                <input type="password" id="passwordRegister" maxlength="32" placeholder="Senha" required tabindex="6">
                <h6></h6>
            </div>

            <input type="password" id="passwordVerifyRegister" maxlength="32" placeholder="Confirme sua senha" required tabindex="7">

            <button id="btnRegiter">Registrar</button>
        </div>
    </section>
    `

    conteiner.innerHTML = conteudo

    return conteiner
}