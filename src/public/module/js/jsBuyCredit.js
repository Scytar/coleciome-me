import { getCache , renderSection , renderModal } from '../../index.js'

const valueToAddToWalletInput = document.getElementById("valueToAddToWalletInput")

export default function createDepositOrder(){
    
    const body = {
        userid: getCache().data.id,
        valueToAddToWallet: valueToAddToWalletInput.value
    };
    const options = {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    };
    
    if (valueToAddToWalletInput.value > 0) {

        valueToAddToWalletInput.value = 0

        fetch('/orders/insert', options)
        .then((response) => {
            if (response.status == 200) {
                return response.json();
            }
            return console.error('Ocorreu um erro!');
        })
        .then((data) => {
            if (data.data.id) {
                renderModal(`
                <div class="flex-column gap-small">
                    Pedido realizado com sucesso.
                    <p>Pedido #${data.data.id}</p>
                    <p>Solicitou 🍪 ${data.data.value}</p>
                    <p>Data do pedido: ${Date(data.data.order_date)}</p>
                    <p>Status: ${data.data.status}</p>
                </div>
                `)

                function confirmarPagamentoAutomaticamenteParaTestes(){
                    fetch('/orders/confirm', {
                        method:"PUT",
                        headers: {
                            'Content-Type':'application/json'
                        },
                        body: JSON.stringify({
                            userid:getCache().data.id,
                            orderid:data.data.id
                        })
                    })
                    .then(res=>{
                        if (res.status == 200) {
                            return res.json();
                        }
                        return console.error('Ocorreu um erro!');
                    })
                    .then((_data) => {
                        renderModal(`
                        <div class="flex-column gap-small">
                            Pedido foi confirmado no período de testes
                            <p>Pedido #${_data.data[0].id}</p>
                            <p>Valor: 🍪 ${_data.data[0].value}</p>
                            <p>Pagamento aprovado em: ${Date(_data.data[0].closing_date)}</p>
                            <p>Status: ${_data.data[0].status}</p>
                        </div>
                        `)
                    })
                }

                setTimeout(confirmarPagamentoAutomaticamenteParaTestes, 5000)
                
            }
        })
    } else {
        renderModal("Somente valores positivos são permitidos!")
    }
}