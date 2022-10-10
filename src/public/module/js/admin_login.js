import { getCache , renderSection , renderModal } from '../../index.js'

export function nameAdmin() {
    let name = document.getElementById('welcomeNameDisplay')
    
    const insertName = getCache().data.name
    name.innerHTML = insertName
}
