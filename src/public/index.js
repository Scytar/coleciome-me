import home from './module/js/home.js';
import login from './module/js/login.js';
import registration from './module/js/registration.js';
import store from './module/js/store.js';
import profilePayments from './module/js/profilePayments.js';
import profileData from './module/js/profileData.js';
import tradingMyOffers from './module/js/tradingMyOffers.js';
import tradingMyRequests from './module/js/tradingMyRequests.js';
import album from './module/js/album.js';
import colection from './module/js/colection.js';
import cart from './module/js/cart.js';
//imports fetchs
import jsRegister from './module/js/jsRegister.js';
import jsLogin from './module/js/jsLogin.js';

const main = document.getElementById('root');

/* const btnHome = document.getElementById('inicial');
const btnAlbum = document.getElementById('album');
const btnColecao = document.getElementById('colecao');
const btnLoja = document.getElementById('loja');*/
const btnOffers = document.getElementById('offers')
const btnRequests = document.getElementById('requests')
const btnPerfil = document.getElementById('btnPerfil');
const btnPagamentos = document.getElementById('btnPagamentos');
const btnLoja = document.getElementById('loja');
const btnLogin = document.getElementById('loginAnchorButton');
const anchors = document.querySelectorAll('header a');
let navAnchors;

const renderiza = { detail: { name: location.pathaname } };

main.appendChild(home());

function rota() {
    switch (renderiza.detail.name) {
        case '/inicial':
            main.innerHTML = '';
            main.appendChild(home());
            break;

        case '/login':
            main.innerHTML = '';
            main.appendChild(login());
            navAnchors = document.querySelectorAll('nav a');
            navAnchors.forEach(a => {
                a.addEventListener('click', () => {
                    renderiza.detail.name = a.dataset.pathname;
                    rota();
                });
            });
            const btnRegister = document.getElementById('registerAnchorButton');
            btnRegister.addEventListener('click', () => {
                renderiza.detail.name = '/cadastro';
                rota();
            });

            const btnlogon = document.getElementById("btnLogin");
            btnlogon.addEventListener('click', () => jsLogin());
            break;

        case '/cadastro':
            main.innerHTML = '';
            main.appendChild(registration());
            navAnchors = document.querySelectorAll('nav a');
            navAnchors.forEach(a => {
                a.addEventListener('click', () => {
                    renderiza.detail.name = a.dataset.pathname;
                    rota();
                });
            });
            const btn_login = document.getElementById('loginButton'); //aba de login
            btn_login.addEventListener('click', () => {
                renderiza.detail.name = '/login';
                rota();
            });

            const newPwd = document.getElementById("passwordRegister");
            const verifynewPwd = document.getElementById("passwordVerifyRegister");
            const btnRegiter = document.getElementById("btnRegiter");
            btnRegiter.addEventListener('click', () => jsRegister());
            break;

        case '/store':
            main.innerHTML = '';
            main.appendChild(store());

            const buyComum = document.getElementById('buyComum');
            buyComum.addEventListener('click', () => {
                renderiza.detail.name = '/cart';
                rota();
            });

            const buyGold = document.getElementById('buyGold');
            buyGold.addEventListener('click', () => {
                renderiza.detail.name = '/cart';
                rota();
            });
            break;

        case '/perfil':
            main.innerHTML = '';
            main.appendChild(profileData());
            navAnchors = document.querySelectorAll('nav a');
            navAnchors.forEach(a => {
                a.addEventListener('click', () => {
                    renderiza.detail.name = a.dataset.pathname;
                    rota();
                });
            });
            btnPagamentos.addEventListener('click', () => {
                renderiza.detail.name = '/pagamentos';
                rota();
            });
            break;

        case '/pagamentos':
            main.innerHTML = '';
            main.appendChild(profilePayments());
            navAnchors = document.querySelectorAll('nav a');
            navAnchors.forEach(a => {
                a.addEventListener('click', () => {
                    renderiza.detail.name = a.dataset.pathname;
                    rota();
                });
            });
            btnPerfil.addEventListener('click', () => {
                renderiza.detail.name = '/perfil';
                rota();
            });
            break;

        case '/trocas':
            main.innerHTML = '';
            main.appendChild(tradingMyOffers());
            navAnchors = document.querySelectorAll('nav a');
            navAnchors.forEach(a => {
                a.addEventListener('click', () => {
                    renderiza.detail.name = a.dataset.pathname;
                    rota();
                });
            });
            btnPerfil.addEventListener('click', () => {
                renderiza.detail.name = '/perfil';
                rota();
            });
            break;

        case '/solicitacoes':
            main.innerHTML = '';
            main.appendChild(tradingMyRequests());
            navAnchors = document.querySelectorAll('nav a');
            navAnchors.forEach(a => {
                a.addEventListener('click', () => {
                    renderiza.detail.name = a.dataset.pathname;
                    rota();
                });
            });
            btnPerfil.addEventListener('click', () => {
                renderiza.detail.name = '/perfil';
                rota();
            });
        case '/album':
            main.innerHTML = '';
            main.appendChild(album());
            break;

        case '/colection':
            main.innerHTML = '';
            main.appendChild(colection());
            break;

        case '/cart':
            main.innerHTML = '';
            main.appendChild(cart());
            break;

        default:
            `Página não encontrada`;
    }
}

window.addEventListener('onstatechange', rota);

window.addEventListener('load', () => {
    switch (renderiza.detail.name) {
        case '/inicial':
            main.innerHTML = '';
            main.appendChild(home());
            break;

        case '/login':
            main.innerHTML = '';
            main.appendChild(login());
            break;

        case '/cadastro':
            main.innerHTML = '';
            main.appendChild(registration());
            break;

        case '/perfil':
            main.innerHTML = '';
            main.appendChild(profilePayments());
        case '/store':
            main.innerHTML = '';
            main.appendChild(store());
            break;

        case '/album':
            main.innerHTML = '';
            main.appendChild(album());
            break;

        case '/colection':
            main.innerHTML = '';
            main.appendChild(colection());
            break;

        case '/cart':
            main.innerHTML = '';
            main.appendChild(cart());
            break;

        default:
            `Página não encontrada`;
    }
});

/* Atribuindo as funções aos botões */
btnLogin.addEventListener('click', () => {
    renderiza.detail.name = '/login';
    rota();
});

anchors.forEach(a => {
    a.addEventListener('click', () => {
        renderiza.detail.name = a.dataset.pathname;
        rota();
    });
});

