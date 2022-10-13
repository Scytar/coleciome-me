import { getCache, renderModal } from '../../index.js'
import buyOffer from './jsBuyOffer.js'
import displayCollectionToTrade from './jsDisplayCollectionToTrade.js'

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

        showOffersContainer.innerHTML = `Carregando...`;

        (data.data).forEach(element => {

            if (data.data != "") {
                showOffersContainer.innerHTML = ``
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

                        let rarityBorder = 'greenBorder'
        
                        if (_data.data.rare) {
                            rarityBorder = "orangeBorder"
                        }
                            
                        //Create elements to append
                        const elementToRender = document.createElement('div')
                        elementToRender.classList.add('tradingItemContainer')
                                            
                        const authorSideDiv = document.createElement('div')
                        authorSideDiv.classList.add('authorSide')
                    
                        const memeContainerDiv = document.createElement('div')
                        memeContainerDiv.classList.add('memeContainer', rarityBorder)

                        const memeImg = document.createElement('img')
                        memeImg.src = `../images/${_data.data.name}`
                        memeImg.classList.add('fig')                        

                        const paragraph = document.createElement('p')
                        paragraph.innerHTML = `🍪 ${element.offer_value}`

                        
                        const buyButton = document.createElement('button')
                        buyButton.dataset.tradeid = element.id
                        buyButton.dataset.id = `buyOffer-${element.id}`
                        buyButton.classList.add('btnSend')
                        buyButton.innerText = "Comprar"
                                        
                        buyButton.addEventListener('click', (e)=>{
                            e.preventDefault()
                            buyOffer(Number(e.target.dataset.tradeid))                            
                        })

                        const tradeButton = document.createElement('button')
                        tradeButton.dataset.tradeid = element.id
                        tradeButton.dataset.id = `tradeOffer-${element.id}`
                        tradeButton.classList.add('btnSend', 'btnPurple')
                        tradeButton.innerText = "Trocar"
                                        
                        tradeButton.addEventListener('click', (e)=>{
                            e.preventDefault()
                            displayCollectionToTrade(Number(e.target.dataset.tradeid))                            
                        })

                        // append memeContainerDiv and paragraph on authorSideDiv
                        memeContainerDiv.appendChild(memeImg)
                        authorSideDiv.appendChild(memeContainerDiv)                  
                        authorSideDiv.appendChild(paragraph)
                        authorSideDiv.appendChild(buyButton)
                        authorSideDiv.appendChild(tradeButton)
            

                        // append authorSideDiv and button on elementToRender
                        elementToRender.appendChild(authorSideDiv)
                        

                        showOffersContainer.appendChild(elementToRender)

                        // if (goal.length == itemsToGoal.length) {
                

                        // }
                    })
                }
            }
        });

        if (goal.length == 0) {
            showOffersContainer.innerHTML = `Nada a ser exibido aqui... 😟`
        }
    })
}