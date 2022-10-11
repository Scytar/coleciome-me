import { getCache ,updateCache , renderModal } from "../../index.js"
import displayStoreInfo from './jsStore.js'
import checkSession from './jsResumeSession.js'

const bonusDiary = document.getElementById("bonusDiary")

const bonus = document.getElementById("bonus")

export default function collectDaily(){

    if (bonus.style.opacity == 1) {
        const body = {userid: getCache().data.id}
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }
    
        fetch('/card/daily_collect', options)
            .then(response => {
                if (response.status == 200) {
                    return response.json()
                }
                throw new Error('Ocorreu um erro!')
            })
            .then((data) => {
                    //data.message"Recompensa diária resgatada!"
                    //data.data{name}

                if (data.data != "") {

                    let rarityBorder = 'greenBorder'
                    if (data.data.rare) {
                        rarityBorder = 'orangeBorder'
                    }

                    displayStoreInfo()

                    renderModal(`
                        <div class="memeContainer ${rarityBorder}">
                            <img src="../images/${data.data.name}" class="fig">
                        </div>
                        <span>${data.message}</span>
                    `)
                } else {
                    renderModal(data.message)
                    displayStoreInfo()
                }           

            })
            .catch ((error) => {
                alert(error)
            })
    
    }

    

}