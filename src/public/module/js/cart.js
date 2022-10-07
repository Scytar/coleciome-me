export default () => {
    const conteiner = document.createElement('section');
    conteiner.setAttribute("id", "cartPage");

    const conteudo = `
    </article> <!-- buyItems -->

    <div id="barSection"></div>

    <article id="CardData">
        <h3>Forma de pagamento</h3>
        <div id="checked">
            
            <label for="html"><input type="radio" id="creditCard" name="payment" value="creditCard">Cartão de crédito</label>

            <label for="css"><input type="radio" id="debitCard" name="payment" value="debitCard">Cartão débito</label>
        </div>

        <h3>Dados do cartão</h3>
        <div id="infCard">

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

            <button id="completePurchase">Comprar</button>
        </div>
        
    </article>
    `;

    conteiner.innerHTML = conteudo;

    return conteiner;
}