function carregar() {
    let agora = new Date()
    let hora = agora.getHours()
<<<<<<< HEAD
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
=======
    var msg = document.querySelector('#msg')
    var main = document.querySelector('#main')
    if (hora >= 0 && hora < 12 ) {
        msg.innerHTML = 'Bom Dia'
        
    } else if(hora >= 12 && hora < 18) {
        msg.innerHTML = 'Boa Tarde'
    } else {
        msg.innerHTML = 'Boa noite <br> seja bem-vindo/a'
>>>>>>> 951f069914e8b0b8bf3bdc524eaee9a9aad82840
    }
}