import { getCache, renderModal } from '../../index.js'

const showRequestsContainer = document.getElementById('showRequestsContainer');

export default async function getMyOffers(){

    const elementToRender = document.createElement('div')
    elementToRender.classList.add('showCollectionContainer')

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
        showRequestsContainer.innerHTML = ``

        const goal = data.data.length
        const itemsToGoal = []

        for (let i = 0; i < (data.data).length; i++) {
            const el = data.data[i];
            
            fetch(`/memes/get/${el.cardid}`)
            .then(res=>{
                try {
                    if (res.status == 200){
                        return res.json()
                    }
                } catch (error) {
                    return console.error(error)
                }
            })
            .then((_data)=>{
                
                itemsToGoal.push(_data.data)

                let rarityBorder = 'greenBorder'
                if (_data.data.rare) {
                    rarityBorder = 'orangeBorder'
                }

                if (el.status == 'open'){
                    elementToRender.innerHTML += `
                    <div class="tradingItemContainer">
                        <div class="authorSide">
                            <div class="memeContainer ${rarityBorder}">
                                <img src="../images/${_data.data.name}" class="fig">
                            </div>
                            <p>🍪 ${el.offer_value}</p>
                            <button data-status="cancel" data-tradeid="${el.id}" class="btnSend btnRed">Cancelar</button>
                        </div>
                    </div>
                `
                } 
                if (el.status == 'answered'){
                    elementToRender.innerHTML += `
                    <div class="tradingItemContainer">
                        <div class="authorSide">
                            <div class="memeContainer ${rarityBorder}">
                                <img src="../images/${_data.data.name}" class="fig">
                            </div>
                            <p>🍪 ${el.offer_value}</p>
                            <button data-status="accept" data-tradeid="${el.id}" class="btnSend">Aceitar</button>
                            <button data-status="cancel" data-tradeid="${el.id}" class="btnSend btnRed">Cancelar</button>
                        </div>
                    </div>
                `
                } 
                if (el.status == 'closed'){
                    elementToRender.innerHTML += `
                    <div class="tradingItemContainer">
                        <div class="authorSide">
                            <div class="memeContainer ${rarityBorder}">
                                <img src="../images/${_data.data.name}" class="fig">
                            </div>
                            <p>🍪 ${el.offer_value}</p>
                            <p>Encerrada</p>
                        </div>
                    </div>
                `
                } 

                if (goal == itemsToGoal.length) {
                    showRequestsContainer.appendChild(elementToRender)
                }

            })

        }

        
    })


}