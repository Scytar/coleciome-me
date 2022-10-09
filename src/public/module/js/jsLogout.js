

export default function logoutClearHeader(){
    const colecao = document.getElementById("colecao");
    const store = document.getElementById("store");
    const perfil = document.getElementById("perfil");
    const trocas = document.getElementById("trocas");
    const loginAnchorButton = document.getElementById("loginAnchorButton");
    const logoutAnchorButton = document.getElementById("logoutAnchorButton");


    colecao.classList.remove('invisible')
    store.classList.remove('invisible')
    perfil.classList.remove('invisible')
    trocas.classList.remove('invisible')
    loginAnchorButton.classList.remove('invisible')
    logoutAnchorButton.classList.add('invisible')
    browser.cookies.remove({name:'userSession'})
}