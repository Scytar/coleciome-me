const bonusDiary = document.getElementById("bonusDiary")

const bonus = document.getElementById("bonus")

export default function collectDaily(){

    if (bonus.style.opacity == 1) {
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
    
    }

    

}