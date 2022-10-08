// fetch uploads.js sending an image to the server
// and returns the response


const fetch = require('node-fetch');
const FormData = require('form-data');
const fs = require('fs');


const form = new FormData();

form.append('image', fs.createReadStream('image.jpg'));

fetch('http://localhost:3000/uploads', {
    method: 'POST',
    body: form,
    type: 'formData'
})
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.log(err));

