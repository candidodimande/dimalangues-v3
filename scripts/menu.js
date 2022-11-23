var menu_button = document.querySelector ('.menu-button')
var menu = document.querySelector('.active-menu')
var menu_list = document.querySelector('.menu-list')
var line1 = document.querySelector('.line1')
var line2 = document.querySelector('.line2')
var line3 = document.querySelector('.line3')



var menubtn = document.querySelector('#menubtn')

menu_button.addEventListener('click', function(){
    menu.classList.toggle('show-menu')
     menu_list.classList.toggle('show-menu-list')
    line1.classList.toggle('line1-rotation')
     line2.classList.toggle('line2-opacity')
     line3.classList.toggle('line3-rotation')
});
