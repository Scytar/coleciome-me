/* import home from './module/js/home.js';
import login from './module/js/login.js';
import registration from './module/js/registration.js';
import store from './module/js/store.js';
import profilePayments from './module/js/profilePayments.js';
import profileData from './module/js/profileData.js';
import tradingMyOffers from './module/js/tradingMyOffers.js';
import tradingMyRequests from './module/js/tradingMyRequests.js';
import album from './module/js/album.js';
import colection from './module/js/colection.js';
import cart from './module/js/cart.js'; */

//imports fetchs
import jsRegister from './module/js/jsRegister.js';
import jsLogin from './module/js/jsLogin.js';
import logoutClearHeader from './module/js/jsLogout.js';
import getUserItems from './module/js/jsColection.js'


const main = document.getElementById('root');

//Botões de navegação
const btnInicial = document.getElementById('inicial');
const btnColecao = document.getElementById('colecao');
const btnLoja = document.getElementById('loja');
const btnTrocas = document.getElementById('trocas');
const btnPerfil = document.getElementById('perfil');
const btnEntrar = document.getElementById('loginAnchorButton');
const btnSair = document.getElementById('logoutAnchorButton');
const btnRegisterTabFromRegister = document.getElementById('registerTabFromRegister');
const btnLoginTabFromRegister = document.getElementById('loginTabFromRegister');
const btnRegisterTabFromLogin = document.getElementById('registerTabFromLogin');
const btnLoginTabFromLogin = document.getElementById('loginTabFromLogin');

//Botões que fazem coisas de verdade (comunica com Back)
const btnLogin = document.getElementById('btnLogin');

//Todos os elementos pai das Sessões a Serem exibidas
const sectionHome = document.getElementById('sectionHome');
const sectionRegister = document.getElementById('sectionRegister');
const sectionLogin = document.getElementById('sectionLogin');
const sectionProfile = document.getElementById('sectionProfile');
const sectionPayment = document.getElementById('sectionPayment');
const sectionColection = document.getElementById('sectionColection');
const sectionStore = document.getElementById('sectionStore');
const sectionTrading = document.getElementById('sectionTrading');
const sectionMyRequests = document.getElementById('sectionMyRequests');

//Elementos do Modal
const messageModalBackground = document.getElementById('messageModalBackground');
const messageModal = document.getElementById('messageModal');
const messageBox = document.getElementById('messageBox');
const messageModalYesButton = document.getElementById('messageModalYesButton');
const messageModalNoButton = document.getElementById('messageModalNoButton');

let cachedUser = {};

export function updateCache(data) {
    cachedUser = { data };
}

export function getCache() {
    return cachedUser;
}

const renderiza = { detail: { name: location.pathaname } };


//Lógica do Modal
messageModalBackground.addEventListener('click',(e)=> {
    messageModalBackground.style.display = 'none';
});
messageModal.addEventListener('click',(e)=> {
    e.stopImmediatePropagation();
});
messageModalYesButton.addEventListener('click',(e)=> {
    messageModalBackground.style.display = 'none';
    //inserir mais coisas a fazer aqui (de preferência um switch case com a função a ser realizada quando clicar)
});
messageModalNoButton.addEventListener('click',(e)=> {
    messageModalBackground.style.display = 'none';
});


//Função que renderiza somente a Sessão desejada
export function renderSection(sectionName) {
    //Esconde todas as Sections
    sectionHome.style.display = 'none';
    sectionRegister.style.display = 'none';
    sectionLogin.style.display = 'none';
    sectionProfile.style.display = 'none';
    sectionPayment.style.display = 'none';
    sectionColection.style.display = 'none';
    sectionStore.style.display = 'none';
    sectionTrading.style.display = 'none';
    sectionMyRequests.style.display = 'none';

    //Mostra apenas a Section que passa no parâmetro
    sectionName.style.display = 'flex';
}

//Função chama o modal
export function renderModal(message) {
    messageModalBackground.style.display = 'flex'
    messageBox.textContent = message;
}

//Event Listeners para renderizar as Sections
btnInicial.addEventListener('click', (e)=> {
    renderSection(sectionHome);
});
btnColecao.addEventListener('click', (e)=> {
    renderSection(sectionColection);
    getUserItems();
});

btnLoja.addEventListener('click', (e)=> {
    renderSection(sectionStore);
});

btnTrocas.addEventListener('click', (e)=> {
    renderSection(sectionTrading);
});

btnPerfil.addEventListener('click', (e)=> {
    renderSection(sectionProfile);
});

btnEntrar.addEventListener('click', (e)=> {
    renderSection(sectionLogin);
});

btnRegisterTabFromRegister.addEventListener('click', (e)=> {
    renderSection(sectionRegister);
});

btnLoginTabFromRegister.addEventListener('click', (e)=> {
    renderSection(sectionLogin);
});

btnRegisterTabFromLogin.addEventListener('click', (e)=> {
    renderSection(sectionRegister);
});

btnLoginTabFromLogin.addEventListener('click', (e)=> {
    renderSection(sectionLogin);
});

//EventListener para dos elementos que fazem coisas de verdade (comunica com o back)

btnLogin.addEventListener('click',(e) => {
    jsLogin()
});


                                                        function facilitarNossoTeste(){
                                                            renderSection(sectionLogin);
                                                        }

                                                        facilitarNossoTeste()

sectionHome
sectionRegister
sectionLogin
sectionProfile
sectionPayment
sectionColection
sectionStore
sectionTrading
sectionMyRequests