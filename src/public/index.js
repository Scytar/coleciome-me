import home from './module/js/home.js';
import login from './module/js/login.js';
import registration from './module/js/registration.js';
import store from './module/js/store.js';

const main = document.getElementById('root');

/* const btnHome = document.getElementById('inicial');
const btnAlbum = document.getElementById('album');
const btnColecao = document.getElementById('colecao');
const btnLoja = document.getElementById('loja');
const btnPerfil = document.getElementById('perfil');
const btnTrocas = document.getElementById('trocas'); */
const btnLogin = document.getElementById('loginAnchorButton');
const btnRegister = document.getElementById('registerAnchorButton');
const btn_login = document.getElementById('loginButton'); //aba de login
const anchors = document.querySelectorAll('header a');
var navAnchors;

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
            btnRegister.addEventListener('click', () => {
                renderiza.detail.name = '/cadastro';
                rota();
            });
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
            btn_login.addEventListener('click', () => {
                renderiza.detail.name = '/login';
                rota();
            });
            break;

        case '/store':
            main.innerHTML = '';
            main.appendChild(store());
            navAnchors = document.querySelectorAll('#cartBtn');
            navAnchors.forEach(cartBtn => {
                cartBtn.addEventListener('click', () => {
                    renderiza.detail.name = cartBtn.dataset.pathname;
                    rota();
                });
            });
            btn_login.addEventListener('click', () => {
                renderiza.detail.name = '/login';
                rota();
            });
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
