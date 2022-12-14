function carregar() {
    let agora = new Date()
    let hora = agora.getHours()
    var msg = document.querySelector('#msg')
    var main = document.querySelector('#main')
    if (hora >= 0 && hora < 12 ) {
        msg.innerHTML = 'Bom Dia'
        
    } else if(hora >= 12 && hora < 18) {
        msg.innerHTML = 'Boa Tarde'
    } else {
        msg.innerHTML = 'Boa noite <br> seja bem-vindo/a'
    }
}