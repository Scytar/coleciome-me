import { renderModal , renderSection} from '../../index.js'

export default () => {

    const sectionLogin = document.getElementById('sectionLogin')

    //const newAvatar = document.getElementById('dolls');
    const newName = document.getElementById('nameRegister');
    const newEmail = document.getElementById('emailRegister');
    const newPwd = document.getElementById('passwordRegister');
    const verifynewPwd = document.getElementById('passwordVerifyRegister');
    const newCpf = document.getElementById('cpfRegister');
    const phoneInput = document.getElementById('phoneRegister');
    const dddPhone = document.getElementById('dddPhoneRegister');
    
    let newPhone = dddPhone.value + phoneInput.value
    // console.log(`newPhone: ${newPhone}`)

    /* validações */
    //ponto de melhoria - colocar a mensagem de erro embaixo dos inputs 
    const validaEmail = /\S+@\S+\.\S+/
    let error = false

    const errors = document.querySelectorAll('.error')
    errors.forEach(e => e.classList.remove('error'))

    
    if(newName.value.length < 3) {
        error = true
        newName.classList.add('error')
        renderModal(`Nome precisa ter pelo menos 3 letras`)
    }
    if(newCpf.value.length < 10|| newCpf.value.length >= 12 || newCpf.value == "") {
        error = true
        newCpf.classList.add('error')
        renderModal(`Somente números no CPF!`)
    }
    if(newPhone.length < 7 || newPhone.length >= 12 || newPhone == "") {
        error = true
        newPhone.classList.add('error')
        renderModal(`Confira o Telefone.`)
    }
    if(!validaEmail.test(newEmail.value)){
        error = true
        newEmail.classList.add('error')
        renderModal(`Confira o e-mail.`)
    }
    if((newPwd.value !== verifynewPwd.value) ||
    (newPwd.value.length < 3)){
        error = true
        newPwd.classList.add('error')
        verifynewPwd.classList.add('error')
        renderModal(`Senha precisa ter pelo menos 3 dígitos!`)
    }
    if(error){
        return false
    } else {
        register()
    }

    
    function register() {
        const body = {
            username: newName.value,
            email: newEmail.value,
            password: newPwd.value,
            cpf: newCpf.value,
            phone: newPhone
        };
        const options = {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        };
    
        fetch('/user/insert', options)
            .then(response => {
                if (response.status == 200) {
                    return response.json();
                }
                return renderModal(`Erro na resposta do servidor código: ${response.status}`)
            })
            .then((data) => {
                // console.log(data)
                if(data.data != "") {
                    newName.value = '';
                    newEmail.value = '';
                    dddPhone.value = '';
                    phoneInput.value = '';
                    newCpf.value = '';
                    newPwd.value = '';
                    verifynewPwd.value = '';


                    renderModal(data.message)
                    return renderSection(sectionLogin)
                }
                return renderModal(data.message)
                
            })
            .catch(error => {
                renderModal(error);
                // console.log(error)
            });
    }
    
};
