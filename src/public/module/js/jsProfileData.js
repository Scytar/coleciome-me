export default () => {
    const nameData = document.getElementById('nameData')
    const enderecoData = document.getElementById('enderecoData')
    const cpfData = document.getElementById('cpfData')
    const emailData = document.getElementById('emailData')
    const celularData = document.getElementById('celularData')

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

    if(error){
        return
    } else {
        update()
    }

    function update() {
        const name = document.getElementById('name')
        const email = document.getElementById('email')

        const body = {
            username: nameData.value,
            email: enderecoData.value,
            password: cpfData.value,
            cpf: emailData.value,
            phone: celularData.value
        };
        const options = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }

        fetch('http://localhost:8000/api/'+id, options)
        .then(response => {
            if (response.status == 200) {
                return response.json()
            } else {
                return `Tente novamente!`
            }
        })
        .then(() => {
            name.value = ""
            email.value = ""
            btnCad.innerHTML = 'Cadastrar'
            btnCad.removeEventListener('click', update)
            btnCad.addEventListener('click', createUser)
            getUsers()
        })
    }

}