import { getCache } from '../../index.js'

const walletDisplay = document.getElementById('walletDisplay'); //valor da carteira para mostrar
const tempoMemeiro = document.getElementById("tempoMemeiro");
const nameUser = document.getElementById("nameUser");
const nameData = document.getElementById("nameData");
const cpfData = document.getElementById("cpfData");
const celularData = document.getElementById("celularData");
const emailData = document.getElementById("emailData");

const nameUserFromPayment = document.getElementById('nameUserFromPayment');
const tempoMemeiroFromPayment = document.getElementById('tempoMemeiroFromPayment');
const pocketFromPayment = document.getElementById('pocketFromPayment');
const numberCard = document.getElementById('numberCard');
const nameCard = document.getElementById('nameCard');
const validity = document.getElementById('validity');




export default function showUserInfo(){

    const user = getCache().data;

    let dataUser = user.creation_date.split('T')
    dataUser = dataUser[0].split('-').reverse().join('/');
    

    nameUser.innerHTML = user.name.split(" ", 1);
    walletDisplay.innerHTML = user.wallet;
    tempoMemeiro.innerHTML = dataUser;
    
    nameData.value = user.name;
    cpfData.value = user.cpf;
    celularData.value = user.phone;
    emailData.value = user.email;

    nameUserFromPayment.innerHTML = user.name.split(" ", 1);;
    tempoMemeiroFromPayment.innerHTML = dataUser;
    pocketFromPayment.innerHTML = user.wallet;
    numberCard.value = user.cardname;
    nameCard.value = user.cardnum;
    validity.value = user.card_expiration;

    

    return true;
}