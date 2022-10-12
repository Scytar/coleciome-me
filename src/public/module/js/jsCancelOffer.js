import { getCache, renderModal , renderSection } from '../../index.js'
import getUserItems from './jsCollection.js'

export default async function cancelOffer(tradeId){
    
    if (tradeId) {

        const options = {
            method:'put',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                tradeId:tradeId
            })
        }

        fetch('/trades/cancel_offer', options)
        .then(res=>{
            try {
                if (res.status == 200) {
                    return res.json()
                }
            } catch (error) {
                throw new Error(error)
            }
        })
        .then(data=>{

            renderModal(data.message)
            renderSection(sectionColection)
            getUserItems();
        })
        
    } else {
        renderModal('Erro ao tentar solicitar cancelamento de oferta.')
    }

}



// renderSection(sectionColection);
// getUserItems();