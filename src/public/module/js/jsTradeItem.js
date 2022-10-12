import { getCachedTradeId , renderSection , renderModal } from '../../index.js'


export default function tradeItem(tradeData){

    console.log('fazer fetch do tradeItem ',tradeData)
    console.log(getCachedTradeId())

    const body = {
        userid: tradeData.userid,
        tradeId: getCachedTradeId(),
        itemToOfferBack: tradeData.itemToOfferBack,
        changeToOfferBack:tradeData.changeToOfferBack
    }

    const options = {
        method:"put",
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(body)
    }

    fetch('/trades/answer_card_offer', options)
    .then(res=>res.json())
    .then(data=>{

    })
}