import { getCache , renderSection , renderModal } from '../../index.js'
import getUserItems from './jsCollection.js';

const sectionColection = document.getElementById('sectionColection');

export default async function buyOffer(tradeId){
     
    const options = {
        method:'put',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            tradeId: tradeId,
            userid: getCache().data.id
        })
    }
    
    const response = await fetch('/trades/buy_card_offer', options)
    .then(res => res.json())
    .then(data => {

        renderModal(data.message)
        renderSection(sectionColection)
        getUserItems();
    })
    .catch(err => console.error(err))
     

}