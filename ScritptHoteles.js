document.addEventListener('DOMContentLoaded', function() {
    const hotelesLink = document.getElementById('hoteles-link');
    const tableContainer = document.getElementById('table-container');

    const hotelesTable = `
        <table class="table-hotel">
            <tr><th>Lugar</th><th>Hotel</th><th>Precio-Semanal</th><th>Calificación</th><th>Interior</th></tr>
            <tr><td>Nueva York</td><td>Renaissance New York Harlem Hotel</td><td>1.000€ - 1.500€</td><td>8,2/10</td><td><img src="IMAGENES/imghotel1.jpg" alt="Foto del hotel"></td></tr>
            <tr><td>Toronto, Ontario, Canadá</td><td>Private Rooms in House in North York Shared Kitchen</td><td>300€ - 400€</td><td>7,3/10</td><td><img src="IMAGENES/imghotel2.jpg" alt="Foto del hotel"></td></tr>
            <tr><td>Reino Unido</td><td>Oaktree Appartment Moffat</td><td>600€ - 750€</td><td>8,9/10</td><td><img src="IMAGENES/imghotel3.jpg" alt="Foto del hotel"></td></tr>
            <tr><td>Sur de Francia, Francia</td><td>Les Pieds dans l'Eau</td><td>900€ - 1100€</td><td>7,1/10</td><td><img src="IMAGENES/imghotel4.jpg" alt="Foto del hotel"></td></tr>
            <tr><td>España</td><td>Hotel Beleret</td><td>500€ - 650€</td><td>7,8/10</td><td><img src="IMAGENES/imghotel5.jpg" alt="Foto del hotel"></td></tr>
            <tr><td>Italia</td><td>Casale Serena</td><td>1000€ - 1100€</td><td>9,0/10</td><td><img src="IMAGENES/imghotel6.jpg" alt="Foto del hotel"></td></tr>
        </table>`;

    tableContainer.innerHTML = hotelesTable;

    hotelesLink.addEventListener('click', function(event) {
        event.preventDefault();
        tableContainer.innerHTML = hotelesTable;
    });
});

// Obtener los elementos del DOM
const registerButton = document.querySelector('.register-button');
const loginButton = document.querySelector('.login-button');
const registerModal = document.getElementById('registerModal');
const loginModal = document.getElementById('loginModal');
const closeButtons = document.querySelectorAll('.close');
const toggleRegisterPassword = document.getElementById('toggleRegisterPassword');
const toggleLoginPassword = document.getElementById('toggleLoginPassword');
const registerPassword = document.getElementById('registerPassword');
const loginPassword = document.getElementById('loginPassword');

// Función para mostrar el modal de registro
registerButton.addEventListener('click', () => {
    registerModal.style.display = 'block';
});

// Función para mostrar el modal de inicio de sesión
loginButton.addEventListener('click', () => {
    loginModal.style.display = 'block';
});

// Función para cerrar los modales
closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        registerModal.style.display = 'none';
        loginModal.style.display = 'none';
    });
});

// Función para cerrar los modales si se hace clic fuera de ellos
window.addEventListener('click', (event) => {
    if (event.target == registerModal) {
        registerModal.style.display = 'none';
    }
    if (event.target == loginModal) {
        loginModal.style.display = 'none';
    }
});

// Función para mostrar/ocultar contraseña de registro
toggleRegisterPassword.addEventListener('click', () => {
    if (registerPassword.type === 'password') {
        registerPassword.type = 'text';
        toggleRegisterPassword.textContent = 'Ocultar';
    } else {
        registerPassword.type = 'password';
        toggleRegisterPassword.textContent = 'Mostrar';
    }
});

// Función para mostrar/ocultar contraseña de inicio de sesión
toggleLoginPassword.addEventListener('click', () => {
    if (loginPassword.type === 'password') {
        loginPassword.type = 'text';
        toggleLoginPassword.textContent = 'Ocultar';
    } else {
        loginPassword.type = 'password';
        toggleLoginPassword.textContent = 'Mostrar';
    }
});
