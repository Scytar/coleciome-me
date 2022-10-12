import { getCache , renderSection , renderModal } from '../../index.js'

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
        console.log(data)

        renderModal(data.data.message)
    })
    .catch(err => console.error(err))
     

}