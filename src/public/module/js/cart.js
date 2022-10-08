export default () => {
    const conteiner = document.createElement('section');
    conteiner.setAttribute("id", "cartPage");

    const conteudo = `
    <article id="buyItems">
        <h3>Pedidos</h3>

        <div id="items">
            <div class="memeContainer greenBorder">
                <img class="" id="itemToBuy" src="./module/img/random-card.svg" alt="Pacote de figurinhas comuns">
            </div>
            <div class="styleBuyFig">
                <p>Pacote comuns</p>
                <p>Valor: 🍪2,50</p>
                <button id="deleteItem" class="clickable"><?xml version="1.0" ?><svg enable-background="new 0 0 32 32" id="Glyph" version="1.1" viewBox="0 0 32 32" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M6,12v15c0,1.654,1.346,3,3,3h14c1.654,0,3-1.346,3-3V12H6z M12,25c0,0.552-0.448,1-1,1s-1-0.448-1-1v-9  c0-0.552,0.448-1,1-1s1,0.448,1,1V25z M17,25c0,0.552-0.448,1-1,1s-1-0.448-1-1v-9c0-0.552,0.448-1,1-1s1,0.448,1,1V25z M22,25  c0,0.552-0.448,1-1,1s-1-0.448-1-1v-9c0-0.552,0.448-1,1-1s1,0.448,1,1V25z" id="XMLID_237_"/><path d="M27,6h-6V5c0-1.654-1.346-3-3-3h-4c-1.654,0-3,1.346-3,3v1H5C3.897,6,3,6.897,3,8v1c0,0.552,0.448,1,1,1h24  c0.552,0,1-0.448,1-1V8C29,6.897,28.103,6,27,6z M13,5c0-0.551,0.449-1,1-1h4c0.551,0,1,0.449,1,1v1h-6V5z" id="XMLID_243_"/></svg></button>
            </div>
        </div>
        <h4>Valor total: 🍪2,50</h4>

    </article> <!-- buyItems -->

    <div id="barSection"></div>

    <article id="CardData">
        <h3>Forma de pagamento</h3>
        <div id="checked">
            <label for="creditCard"><input type="radio" class="radioInput" id="creditCard" name="paymentMethod" value="creditCard">Cartão de crédito</label>

            <label for="debitCard"><input type="radio" class="radioInput" id="debitCard" name="paymentMethod" value="debitCard">Cartão débito</label>    
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