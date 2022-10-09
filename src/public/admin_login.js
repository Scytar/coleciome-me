const imageUploadInput = document.querySelector("#imageUploadInput");
const addMemeButton = document.querySelector("#addMemeButton");


addMemeButton.addEventListener('click', (e)=>{
    e.preventDefault();
    const fileToSend = new FormData()
    fileToSend.append('name','imageUploadInput')
    fileToSend.append('file', imageUploadInput.files[0]);

    fetch('http://localhost:80/upload/meme', {
        method:'POST',
        headers:{
            'Content-Type':'multipart/form-data',
            'name':'imageUploadInput'
    },
        body:fileToSend
    })
})