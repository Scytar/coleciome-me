import { getCache, renderModal } from '../../index.js'
import offerItem from './jsOfferItem.js'
import tradeItem from './jsTradeItem.js'

export default async function getUserItems() {
    
    const ownerid = getCache().data.id;

    fetch(`/card/show_total_items/${ownerid}`)
    .then(response => {
        if (response.status == 200) {
            return response.json();
        } else { return new Error('Ocorreu um erro!'); }
    })
    .then((data) => {
        const coletionsFig = document.getElementById('coletionsFig')
        coletionsFig.innerHTML = `Carregando...`
        
        const goal = data.data.length
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
                    <div class="flex-column justify-center align-center gap-small border-thin bg-dark">
                        <div class="memeContainer ${rarityBorder}">
                            <img src="../images/${_data.data.name}" class="fig">
                        </div>
                        <span>🍪 <input type="number" id="value-${element.id}" class="offerValueInput"></span>
                        <button data-ownerid="${element.ownerid}" data-itemid="${element.itemid}" id="btn-${element.id}" class="btnSend">Anunciar</button>
                        <button data-ownerid="${element.ownerid}" data-itemid="${element.itemid}" id="btn-trade-${element.id}" class="btnSend btnPurple tradeBtnInCollection">Trocar</button>
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
                            const offerData = {
                                author:Number(button.dataset.ownerid),
                                offer:el.id,
                                offer_value:Number(document.getElementById(`value-${el.id}`).value),
                                cardid:Number(button.dataset.itemid)
                            }
                            document.getElementById(`value-${el.id}`).value = ''
                            offerItem(offerData)
                        })

                        const tradeButton = document.getElementById(`btn-trade-${el.id}`)
                        
                        tradeButton.addEventListener('click',(e)=>{
                            const offerData = {
                                userid:Number(tradeButton.dataset.ownerid),
                                itemToOfferBack:Number(el.id),
                                changeToOfferBack:Number(document.getElementById(`value-${el.id}`).value),
                                cardid:Number(tradeButton.dataset.itemid)
                            }
                            document.getElementById(`value-${el.id}`).value = ''
                            tradeItem(offerData)
                        })
                    }
                }
            })
        }
    })
}