const showOffersContainer = document.getElementById('showOffersContainer');

export default function getPublicOffers(){

    fetch('/trades/get_public_trades')
    .then(res=>{
        try {
            if (res.status == 200)
            return res.json()
        } catch (error) {
            return console.error(error)
        }
    })
    .then(data=>{

        const offerArray = data.data
        
        showOffersContainer.innerHTML = "";
console.log(offerArray)
        (offerArray).forEach(element => {

            if (data.data != "") {
                console.log(element.cardid)
                fetch(`/memes/get/${element.cardid}`)
                .then(res=>{
                    if (res.status == 200){
                        return res.json()
                    }
                })
                .then((data)=>{
                    console.log(data)
                    let rarityBorder
    
                    if (data.data.rare) {
                        rarityBorder = "orangeBorder"
                    } else {
                        rarityBorder = "greenBorder"
                    }
                    // <img src="../images/${data.data.name}" class="fig">
                    coletionsFig.innerHTML += `
                        <div class="tradingItemContainer">
                            <div class="authorSide">
                                <div class="memeContainer ${rarityBorder}">
                                    <img src="../images/${el.name}" class="fig">
                                </div>
                                <p>🍪 ${element.offer_value}</p>
                                <button data-tradeid="${element.id}" class="btnSend">Comprar</button>
                            </div>
                        </div>
                    `
                })
            }
        });
    })
}