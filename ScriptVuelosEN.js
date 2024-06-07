document.addEventListener('DOMContentLoaded', function() {
    const vuelosLink = document.getElementById('vuelos-link');
    const asientosLink = document.getElementById('asientos-link');
    const hotelesLink = document.getElementById('hoteles-link');
    const tableContainer = document.getElementById('table-container');

    const vuelosTable = `
        <table>
            <tr><th>Flights</th><th>Time</th><th>Price</th></tr>
            <tr><td>United States - Canada</td><td>10:00 - 11:30</td><td>£150 - £250</td></tr>
            <tr><td>United Kingdom - France</td><td>01:00 - 03:00</td><td>£150 - £250</td></tr>
            <tr><td>Spain - Italy</td><td>13:00 - 15:15</td><td>£150 - £250</td></tr>
            <tr><td>Germany - Japan</td><td>10:00 - 21:30</td><td>£500 - £800</td></tr>
            <tr><td>Australia - China</td><td>05:00 - 16:00</td><td>£600 - £1000</td></tr>
            <tr><td>Mexico - Brazil</td><td>01:00 - 11:30</td><td>£200 - £300</td></tr>
            <tr><td>India - Russia</td><td>04:00 - 10:00</td><td>£500 - £600</td></tr>
            <tr><td>South Africa - Argentina</td><td>19:00 - 6:00</td><td>£100 - £400</td></tr>
            <tr><td>Colombia - Chile</td><td>05:00 - 10:00</td><td>£200 - £500</td></tr>
            <tr><td>Chile - Peru</td><td>04:00 - 08:00</td><td>£100 - £300</td></tr>
        </table>`;
    tableContainer.innerHTML = vuelosTable;

    vuelosLink.addEventListener('click', function(event) {
        event.preventDefault();
        tableContainer.innerHTML = vuelosTable;
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
