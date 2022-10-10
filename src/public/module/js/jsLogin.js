import { updateCache , renderSection , renderModal } from '../../index.js'
import getUserItems from './jsColection.js'


const btnInicial = document.getElementById('inicial');
const btnColecao = document.getElementById('colecao');
const btnLoja = document.getElementById('loja');
const btnTrocas = document.getElementById('trocas');
const btnPerfil = document.getElementById('perfil');
const btnEntrar = document.getElementById('loginAnchorButton');
const btnSair = document.getElementById('logoutAnchorButton');
const sectionColection = document.getElementById('sectionColection');



export default () => {
    const emailLogin = document.getElementById('emailLogin');
    const pswLogin = document.getElementById('passwordLogin');

    /* validações */
    const validaEmail = /\S+@\S+\.\S+/;
    let error = false;
    if (!validaEmail.test(emailLogin.value)) {
        error = "Erro: Login inválido";
        emailLogin.classList.add('error');
    }
    if (pswLogin.value.length < 3) {
        error = "Erro: Senha inválida";
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

                if (data.data){

                    emailLogin.value = '';
                    pswLogin.value = '';
                    updateCache(data.data)
    
                    profileNameHeader.innerHTML = data.data.name.split(" ", 1);
                    btnColecao.style.display = 'flex'
                    btnLoja.style.display = 'flex'
                    btnPerfil.style.display = 'flex'
                    btnTrocas.style.display = 'flex'
                    btnEntrar.style.display = 'none'
                    btnSair.style.display = 'flex'

                    renderSection(sectionColection)
                    getUserItems();

                } else {
                    renderModal(data.message);
                }

                return null
            })
            .catch(error => {
                console.log(error)
            });
    }
};