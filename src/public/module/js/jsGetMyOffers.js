import { getCache, renderModal } from '../../index.js'
// import cancelOffer from './jsCancelOffer.js'
import renderMyTradeElement from './jsRenderTradeElement.js'

const showRequestsContainer = document.getElementById('showRequestsContainer');

export default async function getMyOffers(){

    const elementToRender = document.createElement('div')
    elementToRender.classList.add('showCollectionContainer')

    showRequestsContainer.innerHTML = `Carregando...`
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
                
                const item = _data.data

                itemsToGoal.push(item)
                
                let rarityBorder = 'greenBorder'
                if (item.rare) {
                    rarityBorder = 'orangeBorder'
                }

                elementToRender.appendChild(
                    renderMyTradeElement(el.status, rarityBorder, item.name, el.offer_value,el.id,el?.closing_date)
                )
                

                if (goal == itemsToGoal.length) {

                    showRequestsContainer.innerHTML = ``
                    showRequestsContainer.appendChild(elementToRender)

                }

            })

        }

        if (goal == 0) {
            showRequestsContainer.innerHTML = `Nada a ser exibido aqui... 😟`
        }

        
    })


}