import { getCache, renderModal } from '../../index.js'
import offerItem from './jsOfferItem.js'
// import tradeItem from './jsTradeItem.js'

// Nada a ser exibido aqui... 😟
// Nada a ser exibido aqui... 😟
// Nada a ser exibido aqui... 😟
// Nada a ser exibido aqui... 😟
// Nada a ser exibido aqui... 😟
// Nada a ser exibido aqui... 😟

export default async function getUserItems() {
    
    const ownerid = getCache().data.id;

    coletionsFig.innerHTML = `Carregando...`
    fetch(`/card/show_total_items/${ownerid}`)
    .then(response => {
        if (response.status == 200) {
            return response.json();
        } else { return new Error('Ocorreu um erro!'); }
    })
    .then((data) => {
        const coletionsFig = document.getElementById('coletionsFig')
        // coletionsFig.innerHTML = `Carregando...`
        
        const goal = data.data.length
        
        if (goal==0) {
            coletionsFig.innerHTML = `Nada a ser exibido aqui... 😟 (0 itens encontrados)`
        }

        const itemsToRender = []
        const elementToRender = document.createElement('div')
        elementToRender.classList.add('showCollectionContainer')

        for (let i = 0; i < data.data.length; i++) {
            const element = data.data[i];

            fetch(`/memes/get/${element.itemid}`)
            .then(res=>{
                if (res.status == 200){
                    return res.json()
                }
            })
            .then((_data)=>{

                let rarityBorder = 'greenBorder'

                if (_data.data.rare) {
                    rarityBorder = "orangeBorder"
                }

                elementToRender.innerHTML += `
                    <div class="cardContainer flex-column justify-center align-center gap-small border-thin bg-dark" data-ownerid="${element.ownerid}" data-memeid="${element.itemid}" data-itemid="${element.id}">
                        <div class="memeContainer ${rarityBorder}">
                            <img src="../images/${_data.data.name}" class="fig">
                        </div>
                        <span>🍪 <input type="number" id="value-${element.id}" data-id="${element.id}" class="offerValueInput"></span>
                        <button data-ownerid="${element.ownerid}" data-itemid="${element.itemid}" data-id="${element.id}" id="btn-${element.id}" class="btnSend btnToOfferInCollection">Anunciar</button>
                    </div>
                `;

                
                itemsToRender.push(_data.data)

                if (goal == itemsToRender.length) {

                    coletionsFig.innerHTML = ``

                    coletionsFig.appendChild(elementToRender);

                    for (let i = 0; i < data.data.length; i++) {
                        const el = data.data[i];
                        
                        const button = document.getElementById(`btn-${el.id}`)
                        
                        button.addEventListener('click',(e)=>{
                            e.preventDefault()
                            const offerData = {
                                author:Number(button.dataset.ownerid),
                                offer:el.id,
                                offer_value:Number(document.getElementById(`value-${el.id}`).value),
                                cardid:Number(button.dataset.itemid)
                            }
                            document.getElementById(`value-${el.id}`).value = ''
                            offerItem(offerData)
                        })

                    }
                }
            })
        }
    })
}