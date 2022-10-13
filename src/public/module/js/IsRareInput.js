const isRareInput = document.getElementById('isRareInput')
const addMemeForm = document.getElementById('addMemeForm')
const addMemeButton = document.getElementById('addMemeButton');

addMemeButton.addEventListener('click',(e)=>{
    checkbox()    
})

isRareInput.addEventListener('click',(e=>{
    console.log(isRareInput.checked)
}))


function checkbox() {
    addMemeForm.action = `/upload/meme/true/${isRareInput.checked}/1`
}


