// Botón Ir Arriba
document.getElementById("boton-arriba").addEventListener("click", scrollUp);

function scrollUp() {
    var currentScroll = document.documentElement.scrollTop;
    if (currentScroll > 0) {
        // window.requestAnimationFrame(scrollUp);
        window.scrollTo(0, 0);
        botonArriba.style.transform = "scale(0)";
    }
}

botonArriba = document.getElementById("boton-arriba");
window.onscroll = function () {
    let scroll = document.documentElement.scrollTop;
    if (scroll > 50) {
        botonArriba.style.transform = "scale(1)";
    } else {
        botonArriba.style.transform = "scale(0)";
    }
}


// Formulario Contacto
const iconoBurger = document.getElementById('icono-burger');
const menu = document.getElementById('mostrar-menu');

iconoBurger.addEventListener('click', () => {
    console.log('Click en el ícono de burger');
    menu.classList.toggle('mostrar');
    iconoBurger.classList.toggle('fa-burger');
    iconoBurger.classList.toggle('fa-times');
});

// Formulario de contacto
document.getElementById('form-link').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('form-modal').style.display = 'flex';
});

function resetForm() {
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
}

document.getElementById('form-close').addEventListener('click', function () {
    document.getElementById('form-modal').style.display = 'none';
    resetForm();
});

// document.querySelector('#form-modal input[type="submit"]').addEventListener('click', function () {
//     resetForm();
// });

