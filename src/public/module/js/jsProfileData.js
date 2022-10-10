import {renderModal} from '../../index.js'

export default function editUserInfo() {
    const nameData = document.getElementById('nameData')
    const cpfData = document.getElementById('cpfData')
    const celularData = document.getElementById('celularData')
    const emailData = document.getElementById('emailData')
    const senhaData = document.getElementById('senhaData')
    const newSenhaData = document.getElementById('newData')
    const confirmNewSenhaData = document.getElementById('confNewData')

    if(nameData.value.length < 3) {
        error = true
        nameData.classList.add('error')
    }
    if(cpfData.value.length < 10 || cpfData.value.length >= 12 || cpfData.value == "") {
        error = true
        cpfData.classList.add('error')
    }
    if(celularData.value.length < 7 || celularData.value.length >= 12 || celularData.value == "") {
        error = true
        celularData.classList.add('error')
    }
    if(!validaEmail.test(emailData.value)){
        error = true
        emailData.classList.add('error')
    }
    if((newPwd.value !== verifynewPwd.value) ||
    (newPwd.value.length < 3)){
        error = true
        newPwd.classList.add('error')
        verifynewPwd.classList.add('error')
    }
    if(enderecoData.value.length >= 10) {
        error = true
        newPwd.classList.add('error')
        verifynewPwd.classList.add('error')
    }
    if((senhaData === newSenhaData) || 
    (newSenhaData !== confirmNewSenhaData) ||
    (newSenhaData.length < 8)) {
        error = true
        newSenhaData.classList.add('error')
        confirmNewSenhaData.classList.add('error')
    }

    if(error){
        return
    } else {
        update()
    }

    function update() {

        const body = {
            email: emailData.value,
            password: senhaData.value,
            new_data:{
                username: nameData.value,
                cpf: cpfData.value,
                phone: celularData.value,
                email: emailData.value,
                password: newSenhaData.value
            }
        };
        const options = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }

        fetch('http://localhost:80/user/edit', options)
        .then(response => {
            if (response.status == 200) {
                return response.json()
            } else {
                return console.error(`Tente novamente!`)
            }
        })
        .then((data) => {
            
            renderModal()
        })
    }

}