const btnMobile = document.getElementById('btn-mobile')
btnMobile.addEventListener('click', toggleMenu);
let fechar = document.getElementById('fechar')
const nav = document.getElementById('navResponsivo');

function toggleMenu(){
    nav.style.display = 'block'
}


function fecharMenu()
{
    nav.style.display = 'none';
}


