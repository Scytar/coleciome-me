import { json } from 'body-parser'
import { getCache , renderSection , renderModal } from '../../index.js'

export default function buyCard(isRare){

    const cardPrice = isRare*80+20

    const body = {
        userid: getCache().data.id,
        price: cardPrice,
        isRare: isRare
    }

    const options = {
        method:"post",
        Headers: {
            'Content-Type':"application/json"
        },
        body: JSON.stringify(body)
    }

    fetch('/card/shop_card')
    .then(res=>{
        if (res.status == 200){
            return res.json()
        }
        throw console.error(error)
    })
    .then(data=>{
        console.log(data)
    })

}