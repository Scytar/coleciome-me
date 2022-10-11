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
        headers: {
            'Content-Type':"application/json"
        },
        body: JSON.stringify(body)
    }

    fetch('/card/shop_card', options)
    .then(res=>{
        try {
            if (res.status == 200){
                return res.json()
            }
        } catch (error) {
            return console.error(error)
        }
        
    })
    .then(data=>{

        if (data.data != "") {

            let rarityBorder = 'greenBorder'
            if (data.data.rare) {
                rarityBorder = 'orangeBorder'
            }

            renderModal(`
                <div class="memeContainer ${rarityBorder}">
                    <img src="../images/${data.data.name}" class="fig">
                </div>
                <span>${data.message}</span>
            `)
        } else {
            renderModal(data.message)
        }

    })

}