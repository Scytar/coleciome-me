
    const colecao = document.getElementById("colecao");
    const store = document.getElementById("store");
    const perfil = document.getElementById("perfil");
    const trocas = document.getElementById("trocas");
    const loginAnchorButton = document.getElementById("loginAnchorButton");
    const logoutAnchorButton = document.getElementById("logoutAnchorButton");


export default function logoutClearHeader(){

    colecao.classList.add('invisible')
    store.classList.add('invisible')
    perfil.classList.add('invisible')
    trocas.classList.add('invisible')
    loginAnchorButton.classList.remove('invisible')
    logoutAnchorButton.classList.add('invisible')

    return {}
}