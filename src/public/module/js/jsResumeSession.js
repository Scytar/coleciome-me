import {updateCache , renderSection , renderModal} from '../../index.js'
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

export default function checkSession(){
    fetch("/session")
    .then(res=>{
        if (res.status == 200) {
            return res.json()
        }
        throw new Error(error)
    })
    .then(data=>{
        if (data.message == 'Success'){
            updateCache(data.data)
            btnUpload.style.display = 'none'
            
            if(data.data.usertype == "admin") {
                btnUpload.style.display = 'flex'
            }

            profileNameHeader.innerHTML = data.data.name.split(" ", 1);
            btnColecao.style.display = 'flex'
            btnLoja.style.display = 'flex'
            btnPerfil.style.display = 'flex'
            btnTrocas.style.display = 'flex'
            btnEntrar.style.display = 'none'
            btnSair.style.display = 'flex'

            renderSection(sectionColection)
            getUserItems();
        }

        return true
    })
}