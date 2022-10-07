export default () => {
    const conteiner = document.createElement('section');
    conteiner.setAttribute("id", "profile");
    conteiner.classList.add("pageWithUser")

    /* conteiner.style.cssText = `display: grid;
    grid-template-columns: 35% 65%;
    justify-content: center;
    align-items: center;
    gap: 20px
    `; */

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

        <article id="CardDataSave">
            <h3>Cartão cadastrado</h3>
            <div id="infCardSave">

                <label for="numberCard">
                    Número do cartão:
                    <input type="text" id="numberCard" name="numberCard" required>
                </label>
                
                <label for="nameCard">
                    Nome (como no cartão):
                    <input type="text" id="nameCard" name="nameCard" required>
                </label>            

                <label for="validity">
                    Validade:
                    <input type="text" id="validity" name="validity" required>
                </label>
                            
                <label for="cvv">
                    CVV:
                    <input type="text" id="cvv" name="cvv" required>
                </label>

                <button id="btnSend">Enviar</button>
            </div>
            
        </article>
    </section>
    
    `

    conteiner.innerHTML = conteudo;

    return conteiner;
}