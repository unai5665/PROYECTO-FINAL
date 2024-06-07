document.addEventListener('DOMContentLoaded', function() {
    const asientosLink = document.getElementById('asientos-link');
    const tableContainer = document.getElementById('table-container');

    const asientosTable = `
        <div class="table-image-container">
        <table>
            <tr><th>Asientos</th><th>Clase</th><th>Precio</th></tr>
            <tr><td>1A</td><td>Primera</td><td>50€</td></tr>
            <tr><td>1B</td><td>Primera</td><td>50€</td></tr>
            <tr><td>1C</td><td>Primera</td><td>50€</td></tr>
            <tr><td>1D</td><td>Primera</td><td>50€</td></tr>
            <tr><td>2A</td><td>Primera</td><td>50€</td></tr>
            <tr><td>2B</td><td>Primera</td><td>50€</td></tr>
            <tr><td>2C</td><td>Primera</td><td>50€</td></tr>
            <tr><td>2D</td><td>Primera</td><td>50€</td></tr>
            <tr><td>3A</td><td>Primera</td><td>50€</td></tr>
            <tr><td>3B</td><td>Primera</td><td>50€</td></tr>
            <tr><td>3C</td><td>Primera</td><td>50€</td></tr>
            <tr><td>3D</td><td>Primera</td><td>50€</td></tr>
            <tr><td>4A</td><td>Primera</td><td>50€</td></tr>
            <tr><td>4B</td><td>Primera</td><td>50€</td></tr>
            <tr><td>4C</td><td>Primera</td><td>50€</td></tr>
            <tr><td>4D</td><td>Primera</td><td>50€</td></tr>
            <tr><td>5A</td><td>Primera</td><td>50€</td></tr>
            <tr><td>5B</td><td>Primera</td><td>50€</td></tr>
            <tr><td>5C</td><td>Primera</td><td>50€</td></tr>
            <tr><td>5D</td><td>Primera</td><td>50€</td></tr>
            <tr><td>1A</td><td>Economía</td><td>10€</td></tr>
            <tr><td>1B</td><td>Economía</td><td>10€</td></tr>
            <tr><td>1C</td><td>Economía</td><td>10€</td></tr>
            <tr><td>1D</td><td>Economía</td><td>10€</td></tr>
            <tr><td>1E</td><td>Economía</td><td>10€</td></tr>
            <tr><td>1F</td><td>Economía</td><td>10€</td></tr>
            <tr><td>2A</td><td>Economía</td><td>10€</td></tr>
            <tr><td>2B</td><td>Economía</td><td>10€</td></tr>
            <tr><td>2C</td><td>Economía</td><td>10€</td></tr>
            <tr><td>2D</td><td>Economía</td><td>10€</td></tr>
            <tr><td>2E</td><td>Economía</td><td>10€</td></tr>
            <tr><td>2F</td><td>Economía</td><td>10€</td></tr>
            <tr><td>3A</td><td>Economía</td><td>10€</td></tr>
            <tr><td>3B</td><td>Economía</td><td>10€</td></tr>
            <tr><td>3C</td><td>Economía</td><td>10€</td></tr>
            <tr><td>3D</td><td>Economía</td><td>10€</td></tr>
            <tr><td>3E</td><td>Economía</td><td>10€</td></tr>
            <tr><td>3F</td><td>Economía</td><td>10€</td></tr>
            <tr><td>4A</td><td>Economía</td><td>10€</td></tr>
            <tr><td>4B</td><td>Economía</td><td>10€</td></tr>
            <tr><td>4C</td><td>Economía</td><td>10€</td></tr>
            <tr><td>4D</td><td>Economía</td><td>10€</td></tr>
            <tr><td>4E</td><td>Economía</td><td>10€</td></tr>
            <tr><td>4F</td><td>Economía</td><td>10€</td></tr>
            <tr><td>5A</td><td>Economía</td><td>10€</td></tr>
            <tr><td>5B</td><td>Economía</td><td>10€</td></tr>
            <tr><td>5C</td><td>Economía</td><td>10€</td></tr>
            <tr><td>5D</td><td>Economía</td><td>10€</td></tr>
            <tr><td>5E</td><td>Economía</td><td>10€</td></tr>
            <tr><td>5F</td><td>Economía</td><td>10€</td></tr>
            <tr><td>6A</td><td>Economía</td><td>10€</td></tr>
            <tr><td>6B</td><td>Economía</td><td>10€</td></tr>
            <tr><td>6C</td><td>Economía</td><td>10€</td></tr>
            <tr><td>6D</td><td>Economía</td><td>10€</td></tr>
            <tr><td>6E</td><td>Economía</td><td>10€</td></tr>
            <tr><td>6F</td><td>Economía</td><td>10€</td></tr>
            <tr><td>7A</td><td>Economía</td><td>10€</td></tr>
            <tr><td>7B</td><td>Economía</td><td>10€</td></tr>
            <tr><td>7C</td><td>Economía</td><td>10€</td></tr>
            <tr><td>7D</td><td>Economía</td><td>10€</td></tr>
            <tr><td>7E</td><td>Economía</td><td>10€</td></tr>
            <tr><td>7F</td><td>Economía</td><td>10€</td></tr>
            <tr><td>8A</td><td>Economía</td><td>10€</td></tr>
            <tr><td>8B</td><td>Economía</td><td>10€</td></tr>
            <tr><td>8C</td><td>Economía</td><td>10€</td></tr>
            <tr><td>8D</td><td>Economía</td><td>10€</td></tr>
            <tr><td>8E</td><td>Economía</td><td>10€</td></tr>
            <tr><td>8F</td><td>Economía</td><td>10€</td></tr>
            <tr><td>9A</td><td>Economía</td><td>10€</td></tr>
            <tr><td>9B</td><td>Economía</td><td>10€</td></tr>
            <tr><td>9C</td><td>Economía</td><td>10€</td></tr>
            <tr><td>9D</td><td>Economía</td><td>10€</td></tr>
            <tr><td>9E</td><td>Economía</td><td>10€</td></tr>
            <tr><td>9F</td><td>Economía</td><td>10€</td></tr>
            <tr><td>10A</td><td>Economía</td><td>10€</td></tr>
            <tr><td>10B</td><td>Economía</td><td>10€</td></tr>
            <tr><td>10C</td><td>Economía</td><td>10€</td></tr>
            <tr><td>10D</td><td>Economía</td><td>10€</td></tr>
            <tr><td>10E</td><td>Economía</td><td>10€</td></tr>
            <tr><td>10F</td><td>Economía</td><td>10€</td></tr>
        </table>
        <img src="IMAGENES/imgasientos.PNG" alt="Imagen de los asientos" width="900" height="1500">
        </div>`;    
        
        tableContainer.innerHTML = asientosTable;
    
    asientosLink.addEventListener('click', function(event) {
        event.preventDefault();
        
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
