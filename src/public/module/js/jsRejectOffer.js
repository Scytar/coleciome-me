import { getCache , renderSection , renderModal } from '../../index.js'
import getMyOffers from './jsGetMyOffers.js'


export default function rejectOffer(dataToReject){

    const sectionCollection = document.getElementById('sectionColection');

    // let loading = true

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
        // loading = false

        // console.log(data)

        renderModal(data.message)
        renderSection(sectionCollection)
        getMyOffers()

    })
    .catch(err=>{
        // loading = false
        // console.log(err)
        renderModal(err)
    })

}