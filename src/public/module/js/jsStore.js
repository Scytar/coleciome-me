import {getCache} from "../../index.js";

const bonusDiary = document.getElementById("bonusDiary")
const bonus = document.getElementById("bonus")

export default function displayStoreInfo() {

    const collectDate = Date.parse(getCache().data.daily_collect)
    if (Math.floor((Date.now()-collectDate)/82800000)>0) {
        bonusDiary.style.cursor = 'pointer';
        bonus.style.opacity = 1;
    }
};