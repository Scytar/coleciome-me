import {getCache} from "../../index.js";

const bonusDiary = document.getElementById("bonusDiary")
const bonus = document.getElementById("bonus")

export default function displayStoreInfo() {

        bonusDiary.style.cursor = 'pointer';
        bonus.style.opacity = 1;
    
    // bonusDiary.style.cursor = 'not-allowed';
    // bonus.style.opacity = 0.5;

    // const collectDate = Date.parse(getCache().data.daily_collect)
    // console.log('Alterar /module/js/jsStore.js linha 9 a 11')
    // if (Math.floor((Date.now()-collectDate)/10000)>=1) {
    //     bonusDiary.style.cursor = 'pointer';
    //     bonus.style.opacity = 1;
    // }
};