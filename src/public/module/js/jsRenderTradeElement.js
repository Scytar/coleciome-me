// import { getCache , renderModal } from '../../index.js'
import cancelOffer from './jsCancelOffer.js'

export default function renderMyTradeElement(status, rarityBorder, imgSrc, offerValue, tradeId, closingDate){

    if (status === 'open') {
        const authorSideDiv = document.createElement('div')
        authorSideDiv.classList.add('authorSide')
    
        const memeContainerDiv = document.createElement('div')
        memeContainerDiv.classList.add('memeContainer', rarityBorder)

        const memeImg = document.createElement('img')
        memeImg.src = `../images/${imgSrc}`
        memeImg.classList.add('fig')                        

        const paragraph = document.createElement('p')
        paragraph.innerHTML = `🍪 ${offerValue}`

        
        const button = document.createElement('button')
        button.dataset.tradeid = tradeId
        button.dataset.id = `buyOffer-${tradeId}`
        button.classList.add('btnSend', 'btnRed')
        button.innerText = "Cancelar"
                        
        button.addEventListener('click', (e)=>{
            e.preventDefault()
            cancelOffer(Number(e.target.dataset.tradeid))                            
        })

        // append memeContainerDiv and paragraph on authorSideDiv
        memeContainerDiv.appendChild(memeImg)
        authorSideDiv.appendChild(memeContainerDiv)                  
        authorSideDiv.appendChild(paragraph)
        authorSideDiv.appendChild(button)


        return authorSideDiv
    }

    if (status === 'answered') {
        const authorSideDiv = document.createElement('div')
        authorSideDiv.classList.add('authorSide')
    

        const memeContainerDiv = document.createElement('div')
        memeContainerDiv.classList.add('memeContainer', rarityBorder)


        const memeImg = document.createElement('img')
        memeImg.src = `../images/${imgSrc}`
        memeImg.classList.add('fig')                        


        const paragraph = document.createElement('p')
        paragraph.innerHTML = `🍪 ${offerValue}`

        
        const button = document.createElement('button')
        button.dataset.tradeid = tradeId
        button.dataset.id = `buyOffer-${tradeId}`
        button.classList.add('btnSend')
        button.innerText = "Comprar"
                        
        button.addEventListener('click', (e)=>{
            e.preventDefault()
            buyOffer(Number(e.target.dataset.tradeid))                            
        })



        // append memeContainerDiv and paragraph on authorSideDiv
        memeContainerDiv.appendChild(memeImg)
        authorSideDiv.appendChild(memeContainerDiv)                  
        authorSideDiv.appendChild(paragraph)
        authorSideDiv.appendChild(button)

        return authorSideDiv
    }

    if(status === 'closed') {
        const authorSideDiv = document.createElement('div')
        authorSideDiv.classList.add('authorSide')
    

        const memeContainerDiv = document.createElement('div')
        memeContainerDiv.classList.add('memeContainer', rarityBorder)


        const memeImg = document.createElement('img')
        memeImg.src = `../images/${imgSrc}`
        memeImg.classList.add('fig')                        


        const paragraph = document.createElement('p')
        paragraph.innerHTML = `🍪 ${offerValue}`

        
        const button = document.createElement('p')
        button.innerHTML = `Fechada`
        // button.innerHTML = `Fechada em ${Date(closingDate)}`
          
        

        // append memeContainerDiv and paragraph on authorSideDiv
        memeContainerDiv.appendChild(memeImg)
        authorSideDiv.appendChild(memeContainerDiv)                  
        authorSideDiv.appendChild(paragraph)
        authorSideDiv.appendChild(button)


        return authorSideDiv
    }
}