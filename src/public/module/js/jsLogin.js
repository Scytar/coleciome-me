const colecao = document.getElementById("colecao");
const store = document.getElementById("store");
const perfil = document.getElementById("perfil");
const trocas = document.getElementById("trocas");
const loginAnchorButton = document.getElementById("loginAnchorButton");
const logoutAnchorButton = document.getElementById("logoutAnchorButton");
const profileNameHeader = document.getElementById('profileNameHeader');

import { updateCache } from '../../index.js'

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
        return console.log(error);
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
                if (response.status == 200) {
                    return response.json();
                }
                throw new Error('Ocorreu um erro!');
            })
            .then((data) => {
                emailLogin.value = '';
                pswLogin.value = '';
                updateCache(data.data)

                colecao.classList.remove("invisible")
                store.classList.remove("invisible")
                perfil.classList.remove("invisible")
                profileNameHeader.innerHTML = data.data.name
                trocas.classList.remove("invisible")
                loginAnchorButton.classList.add("invisible")
                logoutAnchorButton.classList.remove("invisible")

                return true
            })
            .catch(error => {
                console.log(error)
            });
    }
};