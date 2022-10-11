const btnInicial = document.getElementById('inicial');
const btnColecao = document.getElementById('colecao');
const btnLoja = document.getElementById('loja');
const btnTrocas = document.getElementById('trocas');
const btnPerfil = document.getElementById('perfil');
const btnEntrar = document.getElementById('loginAnchorButton');
const btnSair = document.getElementById('logoutAnchorButton');
const btnUpload = document.getElementById('upload');

const sectionHome = document.getElementById('sectionHome');

import { renderSection , renderModal } from '../../index.js'


export default function logoutClearHeader(){

    //Fetch para realizar logout
    const options = {
        method: 'POST',
        credentials: 'include',
        headers: { 
            'Content-Type': 'application/json'
        }
    };

    fetch('/user/logout', options) 
        .then(response => {
            if (response.status == 200) {
                return response.json();
            }
            return console.error('Ocorreu um erro!');
        })
        .then((data) => {

            if (data.data != ""){
                btnColecao.style.display = 'none'
                btnLoja.style.display = 'none'
                btnPerfil.style.display = 'none'
                btnTrocas.style.display = 'none'
                btnEntrar.style.display = 'flex'
                btnSair.style.display = 'none'
                btnUpload.style.display = 'none'

                renderSection(sectionHome);
                location.reload()
                
               return renderModal(data.message)
            }
            location.reload()
            return renderModal("Falha ao tentar sair do usuário")  
        })
        .catch(error => {
            console.error(error)
        });

    return {}
}