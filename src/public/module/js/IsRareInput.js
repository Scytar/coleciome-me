import { renderModal } from "../../index.js"

const isRareInput = document.getElementById('isRareInput')
const addMemeForm = document.getElementById('addMemeForm')
const addMemeButton = document.getElementById('addMemeButton');

console.log(isRareInput,addMemeForm,addMemeButton)

addMemeButton.addEventListener('click',(e)=>{
    e.preventDefault();
    renderModal(`
        =========================================================
    `)
})

if(isRareInput.value == true) {
    checkbox()
}

function checkbox() {
    addMemeForm.action = "/upload/meme/true/true/1"
}


