import {cachedUser} from "../../index.js";

export default () => {
    const bonus = document.getElementById("bonusDiary");

    const body = {userid: cachedUser.id}
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
        .then(() => {
            
        })
        .catch ((error) => {
            alert(error)
        })


};