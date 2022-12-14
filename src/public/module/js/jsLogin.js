import { updateCache , renderSection , renderModal } from '../../index.js'
import getUserItems from './jsCollection.js'


const btnInicial = document.getElementById('inicial');
const btnColecao = document.getElementById('colecao');
const btnLoja = document.getElementById('loja');
const btnTrocas = document.getElementById('trocas');
const btnPerfil = document.getElementById('perfil');
const btnEntrar = document.getElementById('loginAnchorButton');
const btnSair = document.getElementById('logoutAnchorButton');
const sectionColection = document.getElementById('sectionColection');
const btnUpload = document.getElementById('upload');



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
        return renderModal(error);
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

        // console.log(body)

        fetch('/user/login', options)
            .then(response => {
                if (response.status == 200) {
                    return response.json();
                }
                return console.error('Ocorreu um erro!');
            })
            .then((data) => {

                // console.log('data: ',data)

                // console.log('data.data: ',data.data)

                if (data.data.data){
                    // console.log('data.data.data: ',data.data.data)

                    emailLogin.value = '';
                    pswLogin.value = '';
                    updateCache(data.data.data)
                    btnUpload.style.display = 'none'
                    
                    if(data.data.data.usertype == "admin") {
                        btnUpload.style.display = 'flex'
                    }
    
                    profileNameHeader.innerHTML = data.data.data.name.split(" ", 1);
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