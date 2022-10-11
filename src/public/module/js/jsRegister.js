export default () => {
    const newAvatar = document.getElementById('dolls');
    const newName = document.getElementById('nameRegister');
    const newEmail = document.getElementById('emailRegister');
    const newPwd = document.getElementById('passwordRegister');
    const verifynewPwd = document.getElementById('passwordVerifyRegister');
    const newCpf = document.getElementById('cpfRegister');
    const newPhone = document.getElementById('phoneRegister');
    const dddPhone = document.getElementById('phoneRegister');

    /* validações */
    //ponto de melhoria - colocar a mensagem de erro embaixo dos inputs 
    const validaEmail = /\S+@\S+\.\S+/
    let error = false

    const errors = document.querySelectorAll('.error')
    errors.forEach(e => e.classList.remove('error'))

    
    if(newName.value.length < 3) {
        error = true
        newName.classList.add('error')
    }
    if(newCpf.value.length < 10|| newCpf.value.length >= 12 || newCpf.value == "") {
        error = true
        newCpf.classList.add('error')
    }
    if(newPhone.value.length < 7 || newPhone.value.length >= 12 || newPhone.value == "") {
        error = true
        newPhone.classList.add('error')
    }
    if(!validaEmail.test(newEmail.value)){
        error = true
        newEmail.classList.add('error')
    }
    if((newPwd.value !== verifynewPwd.value) ||
    (newPwd.value.length < 3)){
        error = true
        newPwd.classList.add('error')
        verifynewPwd.classList.add('error')
    }
    if(error){
        return
    } else {
        register()
    }

    
    function register() {
        const body = {
            username: newName.value,
            email: newEmail.value,
            password: newPwd.value,
            cpf: newCpf.value,
            phone: newPhone.value
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
                throw new Error(
                    `Infelizmente, não conseguimos cadastrá-lo! \n
                    Verifique suas informações e tente novamente!`
                );
            })
            .then((data) => {
                newName.value = '';
                newEmail.value = '';
                newPwd.value = '';
                verifynewPwd.value = '';
                return alert('Bem vindo, memeiro!');
            })
            .catch(error => {
                alert(error);
            });
    }
    
};
