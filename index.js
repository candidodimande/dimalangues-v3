function carregar() {
    let agora = new Date()
    let hora = agora.getHours()
    let msg = document.querySelector('#msg')
    let msg_menu = document.querySelector('#msg-menu')
    var main = document.querySelector('#main')
    if (hora >= 0 && hora < 12 ) {
        msg.innerHTML = 'Bom Dia <br> seja bem-vindo/a'
        msg_menu.innerHTML = 'Bom Dia <br> seja bem-vindo/a'
        
    } else if(hora >= 12 && hora < 18) {
        msg.innerHTML = 'Boa Tarde <br> seja bem-vindo/a'
        msg_menu.innerHTML = 'Boa Tarde <br> seja bem-vindo/a'
    } else {
        msg.innerHTML = 'Boa noite <br> seja bem-vindo/a'
        msg_menu.innerHTML = 'Boa noite <br> seja bem-vindo/a'
    }
}