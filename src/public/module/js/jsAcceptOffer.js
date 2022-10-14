import { getCache , renderSection , renderModal } from '../../index.js'
import getMyOffers from './jsGetMyOffers.js'

export default function acceptOffer(dataToAccept){

    const sectionCollection = document.getElementById('sectionColection');

    // let loading = true

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
        // loading = false

        console.log(data)

        if (data.message.severity != "ERROR"){

            renderModal(data.message)
            renderSection(sectionCollection)
            getMyOffers();
        } else {
            renderModal(`Ops! Parece que alguém não tem 🍪 BitCookies o suficiente!`)
            renderSection(sectionCollection)
            getMyOffers();
        }
    })
    .catch(err=>{
        // loading = false
        // console.log(err)
        renderModal(err)
    })

}