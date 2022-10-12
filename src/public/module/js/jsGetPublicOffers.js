import { getCache, renderModal } from '../../index.js'

const showOffersContainer = document.getElementById('showOffersContainer');

export default function getPublicOffers(){

    
    const elementToRender = document.createElement('div')
    elementToRender.classList.add('showCollectionContainer')

    fetch('/trades/get_public_trades')
    .then(res=>{
        try {
            if (res.status == 200)
            return res.json()
        } catch (error) {
            return console.error(error)
        }
    })
    .then(data=>{
        

        const goal = []
        const itemsToGoal = []

        showOffersContainer.innerHTML = "";

        (data.data).forEach(element => {

            if (data.data != "") {

                if (element.author != getCache().data.id) {
                    goal.push('')
                    fetch(`/memes/get/${element.cardid}`)
                    .then(res=>{
                        if (res.status == 200){
                            return res.json()
                        }
                    })
                    .then((_data)=>{

                        itemsToGoal.push(_data.data)

                        let rarityBorder
        
                        if (data.data.rare) {
                            rarityBorder = "orangeBorder"
                        } else {
                            rarityBorder = "greenBorder"
                        }
                        // <img src="../images/${data.data.name}" class="fig">
                        elementToRender.innerHTML += `
                            <div class="tradingItemContainer">
                                <div class="authorSide">
                                    <div class="memeContainer ${rarityBorder}">
                                        <img src="../images/${_data.data.name}" class="fig">
                                    </div>
                                    <p>🍪 ${element.offer_value}</p>
                                    <button data-tradeid="${element.id}" class="btnSend">Comprar</button>
                                </div>
                            </div>
                        `
                        
                        if (goal.length == itemsToGoal.length) {

                            showOffersContainer.appendChild(elementToRender)
                        }
                    })
                }
            }
        });
    })
}