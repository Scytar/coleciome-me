import { getCache } from '../../index.js'

export default function getUserItems() {
    
    console.log(getCache().data.id)
    const body = {
        ownerid: getCache().data.id
    };
    const options = {
        method: 'PUT',
        headers: { 
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    };

    fetch('/card/show_total_items', options)
        .then(response => {
            if (response.status == 200) {
                return response.json();
            }
            throw new Error('Ocorreu um erro!');
        })
        .then((data) => {
            const coletionsFig = document.getElementById('coletionsFig')
            coletionsFig.innerHTML = ``

            data.data.forEach(element => {
                fetch(`/memes/get/${element.itemid}`)
                    .then(res=>{
                        if (res.status == 200){
                            return res.json()
                        }
                    })
                    .then((data)=>{
                        // data.data.name
                        // data.data.rare

                        let rarityBorder

                        if (data.data.rare) {
                            rarityBorder = "orangeBorder"
                        } else {
                            rarityBorder = "greenBorder"
                        }

                        console.log(data.data.name)
                        coletionsFig.innerHTML += `
                        <div class="memeContainer ${rarityBorder}">
                            <img src="../images/${data.data.name}" class="fig">
                        </div>`
                    })
            });
        }
    )
}


            // //o array é data.data[]
            // data.data.forEach(element => {
                

            //     coletionsFig.innerHTML += `
            //     <div class="memeContainer ${element}">
            //         <img src="./module/img/dog-smile.jpg" class="fig">
            //     </div>`
            // });