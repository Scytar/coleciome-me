import { getCache, renderModal } from '../../index.js'

export default async function offerItem(offerData){

    const options = {
        method: 'post',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(offerData)
    }

    fetch('/trades/new_trade', options)
    .then(res=>{
        try {
            if (res.status == 200){
                return res.json();
            }
        } catch (error) {
            return console.error(error)
        }
    })
    .then(data=>{
        renderModal(data.message)

    })

}