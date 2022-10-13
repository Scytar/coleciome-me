import { renderAppendModal , getCache , renderModal } from "../../index.js";
import rejectOffer from "./jsRejectOffer.js"
import acceptOffer from './jsAcceptOffer.js'


export default async function renderRequestAnswer(tradeData){

    // tradeData = {
    //     id: button.dataset.tradeid,                  
    //     author: button.dataset.author,               
    //     offer: button.dataset.offer,                 
    //     offer_value: button.dataset.offer_value,     
    //     request: button.dataset.request,             
    //     change: button.dataset.change,
    //     cardid: button.dataset.cardid,
    //     imgSrc: button.dataset.meme_name,
    //     rarityBorder: button.dataset.meme_rarity
    // }
    //
    //     button.dataset.meme_rarity   // Border Display
    //     button.dataset.meme_name     // Img URL
    //     button.dataset.author        // Author ID
    //     button.dataset.tradeid       // Trade ID
    //     button.dataset.offer         // Item ID offered by author
    //     button.dataset.offer_value   // Offered item value
    //     button.dataset.request       // Item ID offered by dealer
    //     button.dataset.change        // Request item value
    //     button.dataset.cardid        // Meme ID offered by author
    //
    //     button.dataset.id = `checkOffer-${trade.id}`


    let rarityBorder = 'greenBorder'
    if (tradeData.rarityBorder == 'true') {
        rarityBorder = 'orangeBorder'
    }

    if (tradeData.request){

        fetch(`/card/getname/${tradeData?.request}`)
        .then(res=>res.json())
        .then(data=>{

            // console.log(data.data.name) //dealer offer img url

            const elementToRender = document.createElement('div')
            elementToRender.classList.add('flex-row','gap-small','align-center','justify-center','flex-wrap')
            elementToRender.style.padding = "20px"
            
            //Author side card
                const authorSideDiv = document.createElement('div')
                authorSideDiv.classList.add('authorSide')
            
                const memeContainerDiv = document.createElement('div')
                memeContainerDiv.classList.add('memeContainer', rarityBorder)

                const memeImg = document.createElement('img')
                memeImg.src = `../images/${tradeData.imgSrc}`
                memeImg.classList.add('fig')                        

                const paragraph = document.createElement('p')
                paragraph.innerHTML = `🍪 ${tradeData.offer_value}`

                
                const button = document.createElement('button')
                button.classList.add('btnSend', 'btnRed')
                button.innerText = "Rejeitar"

                button.addEventListener('click', (e)=>{
                    e.preventDefault()

                    const dataToReject = {
                        tradeId: tradeData.id,
                        itemToOfferBack: tradeData.request
                    }

                    rejectOffer(dataToReject)
                    
                })

                // append memeContainerDiv and paragraph on authorSideDiv
                memeContainerDiv.appendChild(memeImg)
                authorSideDiv.appendChild(memeContainerDiv)                  
                authorSideDiv.appendChild(paragraph)
                authorSideDiv.appendChild(button)

            elementToRender.appendChild(authorSideDiv)



            //Arrows div
                const arrowsDiv = document.createElement('div')
                arrowsDiv.innerHTML = "<p>←</p><p>→</p>"
                arrowsDiv.classList.add('flex-column')
                arrowsDiv.style.fontSize = '1.5rem'

            elementToRender.appendChild(arrowsDiv)


            let dealerRarity = 'greenBorder'
            if (data.data.rare) {
                dealerRarity = 'orangeBorder'
            }


            //Dealer side card
                const dealerSideDiv = document.createElement('div')
                dealerSideDiv.classList.add('authorSide')
            
                const memeContainerDivDealer = document.createElement('div')
                memeContainerDivDealer.classList.add('memeContainer', dealerRarity)

                const memeImgDealer = document.createElement('img')
                memeImgDealer.src = `../images/${data.data.name}`
                memeImgDealer.classList.add('fig')                        

                const paragraphDealer = document.createElement('p')
                paragraphDealer.innerHTML = `🍪 ${tradeData.change}`

                
                const buttonDealer = document.createElement('button')
                buttonDealer.classList.add('btnSend')
                buttonDealer.innerText = "Aceitar"

                buttonDealer.addEventListener('click', (e)=>{
                    e.preventDefault()
                    
                    const dataToAccept ={
                        tradeId: tradeData.id,
                        itemToOfferBack: tradeData.request
                    }
                    acceptOffer(dataToAccept)
                })

                // append memeContainerDivDealer and paragraph on dealerSideDiv
                memeContainerDivDealer.appendChild(memeImgDealer)
                dealerSideDiv.appendChild(memeContainerDivDealer)                  
                dealerSideDiv.appendChild(paragraphDealer)
                dealerSideDiv.appendChild(buttonDealer)

            elementToRender.appendChild(dealerSideDiv)





            //Depois de criar os elementos e dar append child

            renderAppendModal(elementToRender)


        })

    } else {
        return renderModal('Um erro aconteceu ao tentar abrir proposta')
    }
}