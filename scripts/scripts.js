const iconoBurger = document.getElementById('icono-burger');
const menu = document.getElementById('mostrar-menu');

iconoBurger.addEventListener('click', () => {
    console.log('Click en el ícono de burger');
    menu.classList.toggle('mostrar');
    iconoBurger.classList.toggle('fa-burger');
    iconoBurger.classList.toggle('fa-times');
});

// Ingreso y registro
document.getElementById('form-link').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('form-modal').style.display = 'flex';
});

document.getElementById('form-close').addEventListener('click', function () {
    document.getElementById('form-modal').style.display = 'none';
    resetForm();
});

document.querySelector('#form-modal input[type="submit"]').addEventListener('click', function () {
    resetForm();
});

function resetForm() {
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
}