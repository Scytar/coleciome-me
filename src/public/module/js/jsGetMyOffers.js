import { getCache, renderModal } from '../../index.js'

const showOffersContainer = document.getElementById('showOffersContainer');

export default async function getMyOffers(){

    const itemsToRender = []

    fetch(`/trades/get_user_trades/${getCache().data.id}`)
    .then(res=>{
        try {
            if (res.status == 200) {
                return res.json()
            }
        } catch (error) {
            return console.error(error)
        }
    })
    .then(data=>{
        console.log(data.data)

        
    //     showOffersContainer.appendChild() += `
    //     <div class="tradingItemContainer">
    //         <div class="authorSide">
    //             <div class="memeContainer ${rarityBorder}">
    //                 <img src="../images/${el.name}" class="fig">
    //             </div>
    //             <p>🍪 ${element.offer_value}</p>
    //             <button data-tradeid="${element.id}" class="btnSend">Comprar</button>
    //         </div>
    //     </div>
    // `
    })


}