import { getCache } from '../../index.js'

export default function getUserItems() {
    
    const ownerid = getCache().data.id;

    fetch(`/card/show_total_items/${ownerid}`)
        .then(response => {
            if (response.status == 200) {
                return response.json();
            } else { return new Error('Ocorreu um erro!'); }
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

                        let rarityBorder

                        if (data.data.rare) {
                            rarityBorder = "orangeBorder"
                        } else {
                            rarityBorder = "greenBorder"
                        }

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