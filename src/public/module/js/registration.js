export default () => {
    const conteiner = document.createElement('section')

    const conteudo = `
    <section class="cadastrogin">
        <nav id="navLogin">
            <a id="registerAnchorButton" data-pathname="/cadastro" " class="selected">Cadastrar</a>
            <a id="loginButton" data-pathname="/login">Entrar</a>
        </nav>

        <div id="conteinerLogin">
            <div id="userDollRegister">
                <select name="options" id="dolls" required>
                    <option value="01">menino I</option>
                    <option value="02">menino II</option>
                    <option value="03">menino III</option>
                    <option value="04">Menino IV</option>
                    <option value="05">Menina I</option>
                    <option value="06">Menina II</option>
                    <option value="07">Menina III</option>
                    <option value="08">Menino IV</option>
                </select>
            </div>
            <input type="text" id="nameRegister" maxlength="80" placeholder="Nome" required tabindex="1">
            <input type="text" id="emailRegister" maxlength="80" placeholder="E-mail" required tabindex="2">
            <input type="password" id="passwordRegister" maxlength="10" placeholder="Senha" required tabindex="3">
            <input type="password" id="passwordVerifyRegister" maxlength="10" placeholder="Confirme sua senha" required tabindex="4">
            <button id="btnRegiter">Registrar</button>
        </div>
    </section>
    `

    conteiner.innerHTML = conteudo

    return conteiner
}