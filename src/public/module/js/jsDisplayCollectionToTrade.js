import { getCachedTradeId , updateCachedTradeId , renderSection , renderAppendModal } from '../../index.js'
import getUserItems from './jsCollection.js'
import tradeItem from './jsTradeItem.js'


export default async function displayCollectionToTrade(tradeId){
    updateCachedTradeId(tradeId)
    // const waitfetch = await getUserItems()

    
    const coletionsFig = document.getElementById('coletionsFig');
    const clone = coletionsFig.cloneNode(true)

    const elementsToHide = clone.querySelectorAll('button')
    const parentsToAppend = clone.getElementsByClassName('cardContainer');


    for (let i = 0; i < elementsToHide.length; i++) {
        const buttonToHide = elementsToHide[i];

        buttonToHide.remove();
        
    } 

    for (let k = 0; k < parentsToAppend.length; k++) {
        const parent = parentsToAppend[k];

        // <button data-ownerid="${element.ownerid}" data-itemid="${element.itemid}" id="btn-trade-${element.id}" class="btnSend btnPurple btnToTradeInCollection">Trocar</button>

        const tradeButton = document.createElement('button');
        tradeButton.dataset.ownerid = parent.dataset.ownerid;
        tradeButton.dataset.itemid = parent.dataset.itemid;
        tradeButton.dataset.memeid = parent.dataset.itemid;
        tradeButton.classList.add('btnSend','btnPurple')
        tradeButton.innerHTML = 'Trocar'

        tradeButton.addEventListener('click',(e)=>{
            e.preventDefault()
            const offerData = {
                userid:Number(tradeButton.dataset.ownerid),
                itemToOfferBack:Number(parent.dataset.itemid),
                changeToOfferBack:Number(clone.getElementsByClassName('offerValueInput')[k].value),
                cardid:Number(tradeButton.dataset.itemid)
            }
            clone.getElementsByClassName('offerValueInput')[k].value = ''
            tradeItem(offerData)
        })
        
        parent.appendChild(tradeButton)
        
    }
    

    renderAppendModal(clone)

}