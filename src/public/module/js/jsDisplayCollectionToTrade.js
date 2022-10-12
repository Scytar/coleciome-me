import { getCachedTradeId , updateCachedTradeId , renderSection , renderModal } from '../../index.js'

const collectionFather = document.getElementById('collectionFather');

export default function displayCollectionToTrade(tradeId){
    updateCachedTradeId(tradeId)

    renderModal(collectionFather.innerHTML)

}