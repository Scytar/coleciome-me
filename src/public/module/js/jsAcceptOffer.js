import { getCache , renderSection , renderModal } from '../../index.js'
import getMyOffers from './jsGetMyOffers.js'


export default function acceptOffer(dataToAccept){

    let loading = true

    const options = {
        method:'put',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            tradeId: dataToAccept.tradeId,
            itemToOfferBack: dataToAccept.itemToOfferBack
        })
    }

    // console.log(dataToAccept)

    fetch('/trades/accept_card_offer' , options)
    .then(res=>res.json())
    .then(data=>{
        loading = false

        renderModal(data.message)
        getMyOffers()

    })
    .catch(err=>{
        loading = false
        renderModal(err)
    })

}