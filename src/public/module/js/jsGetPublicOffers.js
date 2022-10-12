import { getCache, renderModal } from '../../index.js'
import buyOffer from './jsBuyOffer.js'

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
                        const elementToRender = document.createElement('div')
                        elementToRender.classList.add('tradingItemContainer')
                    
                        // create a div with this characteristics
                        // <div class="authorSide">
                        //  <div class="memeContainer ${rarityBorder}">
                        //     <img src="../images/${_data.data.name}" class="fig">
                        //  </div>
                        //  <p>🍪 ${element.offer_value}</p>
                        //  <button data-tradeid="${element.id}" id="buyOffer-${element.id}" class="btnSend">Comprar</button>
                        // </div>
                        // 
                        
                        const authorSideDiv = document.createElement('div')
                        authorSideDiv.classList.add('authorSide')
                    
                        const memeContainerDiv = document.createElement('div')
                        memeContainerDiv.classList.add('memeContainer', rarityBorder)

                        const memeImg = document.createElement('img')
                        memeImg.src = `../images/${_data.data.name}`
                        memeImg.classList.add('fig')                        

                        const paragraph = document.createElement('p')
                        paragraph.innerHTML = `🍪 ${element.offer_value}`

                        
                        // create a button element <button data-tradeid="${element.id}" id="buyOffer-${element.id}" class="btnSend">Comprar</button>
                        const button = document.createElement('button')
                        button.setAttribute('data-tradeid', element.id)
                        button.setAttribute('id', `buyOffer-${element.id}`)
                        button.classList.add('btnSend')
                        button.innerText = "Comprar"
                                        
                        button.addEventListener('click', (e)=>{
                            e.preventDefault()
                            buyOffer(e.target.dataset.tradeid)                            
                        })

                        // append memeContainerDiv and paragraph on authorSideDiv
                        memeContainerDiv.appendChild(memeImg)
                        authorSideDiv.appendChild(memeContainerDiv)                  
                        authorSideDiv.appendChild(paragraph)
                        authorSideDiv.appendChild(button)
            

                        // append authorSideDiv and button on elementToRender
                        elementToRender.appendChild(authorSideDiv)
                        

                        showOffersContainer.appendChild(elementToRender)
                        // if (goal.length == itemsToGoal.length) {
                

                        // }
                    })
                }
            }
        });
    })
}