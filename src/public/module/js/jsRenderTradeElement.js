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
        button.dataset.tradeid = trade.id
        button.dataset.id = `buyOffer-${trade.id}`
        button.classList.add('btnSend','btnPurple')
        button.innerText = "Ver Proposta"
                        
        button.addEventListener('click', (e)=>{
            e.preventDefault()
            renderRequestAnswer()
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