import { getCache , renderSection , renderModal } from '../../index.js'
import getMyOffers from './jsGetMyOffers.js'


export default function rejectOffer(dataToReject){

    let loading = true

    const options = {
        method:'put',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            tradeId: dataToReject.tradeId,
            itemToOfferBack: dataToReject.itemToOfferBack
        })
    }

    // console.log(dataToReject)

    fetch('/trades/refuse_card_offer' , options)
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