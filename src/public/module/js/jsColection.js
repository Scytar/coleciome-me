import { getCache, renderModal } from '../../index.js'
import offerItem from './jsOfferItem.js'

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
        coletionsFig.innerHTML = ``

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

                let rarityBorder

                if (_data.data.rare) {
                    rarityBorder = "orangeBorder"
                } else {
                    rarityBorder = "greenBorder"
                }

                elementToRender.innerHTML += `
                    <div class="flex-column justify-center align-center gap-small border-thin">
                        <div class="memeContainer ${rarityBorder}">
                            <img src="../images/${_data.data.name}" class="fig">
                        </div>
                        <span>🍪 <input type="number" id="value-${element.itemid}" class="offerValueInput"></span>
                        <button data-ownerid="${element.ownerid}" data-itemid="${element.itemid}" id="btn-${element.itemid}" class="btnSend">Anunciar</button>
                    </div>
                `;

                
                itemsToRender.push(_data.data)

                if (goal == itemsToRender.length) {

                    coletionsFig.appendChild(elementToRender);

                    itemsToRender.forEach(el => {
                        const button = document.getElementById(`btn-${el.id}`)
                        button.addEventListener('click',(e)=>{
                            const offerData = {
                                author:Number(button.dataset.ownerid),
                                offer:el.id,
                                offer_value:Number(document.getElementById(`value-${el.id}`).value),
                                cardid:Number(button.dataset.itemid)
                            }
                            offerItem(offerData)
                        })
                    });
                }
            })
        }
    })
}