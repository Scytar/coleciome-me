// import { getCache , renderModal } from '../../index.js'
import cancelOffer from './jsCancelOffer.js'
import renderRequestAnswer from './jsRenderRequestAnswer.js'

export default function renderMyTradeElement(trade, meme, rarityBorder){

    if (trade.status === 'open') {
        const authorSideDiv = document.createElement('div')
        authorSideDiv.classList.add('authorSide')
    
        const memeContainerDiv = document.createElement('div')
        memeContainerDiv.classList.add('memeContainer', rarityBorder)

        const memeImg = document.createElement('img')
        memeImg.src = `../images/${meme.name}`
        memeImg.classList.add('fig')                        

        const paragraph = document.createElement('p')
        paragraph.innerHTML = `🍪 ${trade.offer_value}`

        
        const button = document.createElement('button')
        button.dataset.tradeid = trade.id
        button.dataset.id = `buyOffer-${trade.id}`
        button.classList.add('btnSend', 'btnRed')
        button.innerText = "Cancelar"
                        
        button.addEventListener('click', (e)=>{
            e.preventDefault()
            cancelOffer(Number(button.dataset.tradeid))                            
        })

        // append memeContainerDiv and paragraph on authorSideDiv
        memeContainerDiv.appendChild(memeImg)
        authorSideDiv.appendChild(memeContainerDiv)                  
        authorSideDiv.appendChild(paragraph)
        authorSideDiv.appendChild(button)


        return authorSideDiv
    }

    if (trade.status === 'answered') {
        const authorSideDiv = document.createElement('div')
        authorSideDiv.classList.add('authorSide')
    

        const memeContainerDiv = document.createElement('div')
        memeContainerDiv.classList.add('memeContainer', rarityBorder)


        const memeImg = document.createElement('img')
        memeImg.src = `../images/${meme.name}`
        memeImg.classList.add('fig')                        


        const paragraph = document.createElement('p')
        paragraph.innerHTML = `🍪 ${trade.offer_value}`

        
        const button = document.createElement('button')
        button.dataset.meme_rarity = meme.rare          // Border Display
        button.dataset.meme_name = meme.name            // Img URL
        button.dataset.author = trade.author            // Author ID
        button.dataset.tradeid = trade.id               // Trade ID
        button.dataset.offer = trade.offer              // Item ID offered by author
        button.dataset.offer_value = trade.offer_value  // Offered item value
        button.dataset.request = trade.request          // Item ID offered by dealer
        button.dataset.change = trade.change            // Request item value
        button.dataset.cardid = trade.cardid            // Meme ID offered by author
        button.dataset.id = `checkOffer-${trade.id}`
        button.classList.add('btnSend','btnPurple')
        button.innerText = "Ver Proposta"
                        
        button.addEventListener('click', (e)=>{
            e.preventDefault()
            const trade = {
                id:button.dataset.tradeid,
                author:button.dataset.author,
                offer:button.dataset.offer,
                offer_value:button.dataset.offer_value,
                request:button.dataset.request,
                change:button.dataset.change,
                cardid:button.dataset.cardid,
                imgSrc:button.dataset.meme_name,
                rarityBorder:button.dataset.meme_rarity
            }
            renderRequestAnswer(trade)
            // buyOffer(Number(e.target.dataset.tradeid))                            
        })



        // append memeContainerDiv and paragraph on authorSideDiv
        memeContainerDiv.appendChild(memeImg)
        authorSideDiv.appendChild(memeContainerDiv)                  
        authorSideDiv.appendChild(paragraph)
        authorSideDiv.appendChild(button)

        return authorSideDiv
    }

    if(trade.status === 'closed') {
        const authorSideDiv = document.createElement('div')
        authorSideDiv.classList.add('authorSide')
    

        const memeContainerDiv = document.createElement('div')
        memeContainerDiv.classList.add('memeContainer', rarityBorder)


        const memeImg = document.createElement('img')
        memeImg.src = `../images/${meme.name}`
        memeImg.classList.add('fig')                        


        const paragraph = document.createElement('p')
        paragraph.innerHTML = `🍪 ${trade.offer_value}`

        
        const button = document.createElement('p')
        button.innerHTML = `Fechada`
        // button.innerHTML = `Fechada em ${Date(trade.closing_date)}`
          
        

        // append memeContainerDiv and paragraph on authorSideDiv
        memeContainerDiv.appendChild(memeImg)
        authorSideDiv.appendChild(memeContainerDiv)                  
        authorSideDiv.appendChild(paragraph)
        authorSideDiv.appendChild(button)


        return authorSideDiv
    }
}