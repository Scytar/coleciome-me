
//imports
import jsRegister from './module/js/jsRegister.js';
import jsLogin from './module/js/jsLogin.js';
import getUserItems from './module/js/jsCollection.js';
import logout from './module/js/jsLogout.js';
import nameAdmin from './module/js/admin_login.js';
import editUserInfo from './module/js/jsProfileData.js';
import showUserInfo from './module/js/jsProfileDataDisplay.js';
import checkSession from './module/js/jsResumeSession.js'
import displayStoreInfo from './module/js/jsStore.js'
import collectDaily from './module/js/jsDailyCollect.js'
import createDepositOrder from "./module/js/jsBuyCredit.js"
import buyCard from './module/js/jsBuyCard.js';
import getPublicOffers from './module/js/jsGetPublicOffers.js'
import getMyOffers from './module/js/jsGetMyOffers.js'
import buyOffer from './module/js/jsBuyOffer.js'


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
const btnUpload = document.getElementById('upload');
const btnPagamentosFromPerfil = document.getElementById('btnPagamentos');
const btnPerfilFromPagamentos = document.getElementById('btnPerfilFromPayment');
const offersTab = document.getElementById("offers");
const requestsTab = document.getElementById('requests');


//Botões que fazem coisas de verdade (comunica com Back)
const btnLogin = document.getElementById('btnLogin');
const btnEditUserInfo = document.getElementById('btnEditUserInfo');
const bonusDiary = document.getElementById('bonusDiary');
const btnBuyCommon = document.getElementById("btnBuyCommon");
const buyCommonImage = document.getElementById('buyCommonImage');
const btnBuyRare = document.getElementById("btnBuyRare");
const buyRareImage = document.getElementById('buyRareImage');
const buyCredits = document.getElementById("buyCredits");
const btnRegister = document.getElementById("btnRegister");

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
const sectionAdmin = document.getElementById('sectionAdmin');

//Elementos do Modal
const messageModalBackground = document.getElementById('messageModalBackground');
const messageModal = document.getElementById('messageModal');
const messageBox = document.getElementById('messageBox');
const messageModalYesButton = document.getElementById('messageModalYesButton');
const messageModalNoButton = document.getElementById('messageModalNoButton');

//Cache no front das informações do usuário para evitar fazer vários fetchs durante navegação
let cachedUser = {};

export function updateCache(data) {
    cachedUser = { data };
}

export function getCache() {
    return cachedUser;
}

//Cache de qual foi o tradeId clickado para poder realizar a troca de carta por carta
let cachedTradeId

export function getCachedTradeId(){
    return cachedTradeId;
}

export function updateCachedTradeId(newTradeId){
    cachedTradeId = newTradeId;
    return true
}


// const renderiza = { detail: { name: location.pathaname } };


//Função que chama o modal
export function renderModal(message) {
    messageModalBackground.style.display = 'flex'
    // If message is HTML, Should be: messageBox.appendChild(message)    
    messageBox.innerHTML = message;
}

//Modal usando appendChild
export function renderAppendModal(elementToAppend) {
    messageModalBackground.style.display = 'flex';
    messageBox.appendChild(elementToAppend)
}


//Lógica do Modal
messageModalBackground?.addEventListener('click',(e)=> {
    messageModalBackground.style.display = 'none';
    messageBox.innerHTML = ``
});
messageModal?.addEventListener('click',(e)=> {
    e.stopImmediatePropagation();
});
messageModalYesButton?.addEventListener('click',(e)=> {
    messageModalBackground.style.display = 'none';
    //inserir mais coisas a fazer aqui (um switch case com a função a ser realizada quando clicar, por exemplo)
    messageBox.innerHTML = ``
});
messageModalNoButton?.addEventListener('click',(e)=> {
    messageModalBackground.style.display = 'none';
    messageBox.innerHTML = ``
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
    sectionAdmin.style.display = 'none';

    //Mostra apenas a Section que passa no parâmetro
    sectionName.style.display = 'flex';
}


//Event Listeners para renderizar as Sections
    btnInicial?.addEventListener('click', (e)=> {
        renderSection(sectionHome);
    });

    //Coleção do Usuário
    btnColecao?.addEventListener('click', (e)=> {
        renderSection(sectionColection);
        getUserItems();
    });
    //Loja
    btnLoja?.addEventListener('click', (e)=> {
        renderSection(sectionStore);
        displayStoreInfo();
    });
    //Trocas
    btnTrocas?.addEventListener('click', (e)=> {
        renderSection(sectionTrading);
        getPublicOffers();
    });
    //Perfil do usuário (editar dados)
    btnPerfil?.addEventListener('click', (e)=> {
        renderSection(sectionProfile);
        showUserInfo()
    });
    //Seção de Login
    btnEntrar?.addEventListener('click', (e)=> {
        renderSection(sectionLogin);
    });
    //Seção de Cadastro
    btnRegisterTabFromRegister?.addEventListener('click', (e)=> {
        renderSection(sectionRegister);
    });

    btnLoginTabFromRegister?.addEventListener('click', (e)=> {
        renderSection(sectionLogin);
    });

    btnRegisterTabFromLogin?.addEventListener('click', (e)=> {
        renderSection(sectionRegister);
    });

    btnLoginTabFromLogin?.addEventListener('click', (e)=> {
        renderSection(sectionLogin);
    });

    btnUpload?.addEventListener('click', (e)=> {
        renderSection(sectionAdmin);
        nameAdmin();
    });

    btnPagamentosFromPerfil?.addEventListener('click', (e)=> {
        renderSection(sectionPayment);
    });

    btnPerfilFromPagamentos?.addEventListener('click', (e)=> {
        renderSection(sectionProfile);
    });

    offersTab?.addEventListener('click',(e)=>{
        renderSection(sectionTrading)
        getPublicOffers()
    })
    requestsTab?.addEventListener('click',(e)=>{
        renderSection(sectionMyRequests)
        getMyOffers();
    })

//EventListener para dos elementos que fazem coisas de verdade (comunica com o back)

btnLogin?.addEventListener('click',(e) => {
    e.preventDefault();
    jsLogin();
});

btnSair?.addEventListener('click',(e) => {
    logout();
});

btnRegister?.addEventListener('click',(e)=>{
    jsRegister()
})

btnEditUserInfo?.addEventListener('click', (e) => {
    editUserInfo();
})

bonusDiary?.addEventListener('click', (e)=>{
    collectDaily()
})


buyCommonImage?.addEventListener('click', (e)=>{
    buyCard(false)
})
    btnBuyCommon?.addEventListener('click', (e)=>{
        buyCard(false)
    })


buyRareImage?.addEventListener('click', (e)=>{
    buyCard(true)
})
    btnBuyRare?.addEventListener('click', (e)=>{
        buyCard(true)
    })


buyCredits?.addEventListener('click', (e)=>{
    createDepositOrder()
})

checkSession()