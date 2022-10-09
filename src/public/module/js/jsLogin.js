export default () => {
    const emailLogin = document.getElementById('emailLogin');
    const pswLogin = document.getElementById('passwordLogin');

    /* validações */
    const validaEmail = /\S+@\S+\.\S+/;
    let error = false;
    if (!validaEmail.test(emailLogin.value)) {
        error = true;
        emailLogin.classList.add('error');
    }
    if (pswLogin.value.length < 3) {
        error = true;
        pswLogin.classList.add('error');
    }
    if (error) {
        return;
    } else {
        loginSection();
    }

    function loginSection() {
        const body = {
            email: emailLogin.value,
            password: pswLogin.value
        };
        const options = {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        };

        fetch('/user/login', options)
            .then(response => {
                alert('aqui');
                if (response.status == 200) {
                    alert('entrei');
                    return;
                }
                throw new Error('Ocorreu um erro!');
            })
            .then(() => {
                emailLogin.value = '';
                pswLogin.value = '';
                return alert('pag profile');
            })
            .catch(error => {
                alert(error);
            });
    }
};
