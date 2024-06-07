// Función para cargar aeropuertos basados en el país seleccionado
function cargarAeropuertos(selectId, pais, aeropuertos) {
    var selectElement = document.getElementById(selectId);
    selectElement.innerHTML = "";
    if (aeropuertos[pais]) {
        aeropuertos[pais].forEach(function(aeropuerto) {
            var option = document.createElement("option");
            option.text = aeropuerto;
            option.value = aeropuerto;
            selectElement.add(option);
        });
    } else {
        console.error("No se encontraron aeropuertos para el país seleccionado.");
    }
}

// Función para cargar países desde un archivo XML
function cargarPaises() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var xmlDoc = this.responseXML;
            var paises = xmlDoc.getElementsByTagName("pais");
            var selectOrigenPaises = document.getElementById("origen-pais");
            var selectDestinoPaises = document.getElementById("destino-pais");

            // Iterar sobre cada elemento <pais> en el XML
            for (var i = 0; i < paises.length; i++) {
                var nombre = paises[i].getElementsByTagName("nombre")[0].textContent;

                // Crear una nueva opción para el selector de países de origen
                var optionOrigen = document.createElement("option");
                optionOrigen.value = nombre;
                optionOrigen.text = nombre;
                selectOrigenPaises.appendChild(optionOrigen);

                // Crear una nueva opción para el selector de países de destino
                var optionDestino = document.createElement("option");
                optionDestino.value = nombre;
                optionDestino.text = nombre;
                selectDestinoPaises.appendChild(optionDestino);
            }

            // Cargar aeropuertos para la opción seleccionada por defecto (países)
            fetch("aeropuertosEN.json")
                .then(response => response.json())
                .then(data => {
                    var paisOrigenSeleccionado = document.getElementById("origen-pais").value;
                    var paisDestinoSeleccionado = document.getElementById("destino-pais").value;
                    cargarAeropuertos("origen-aeropuerto", paisOrigenSeleccionado, data);
                    cargarAeropuertos("destino-aeropuerto", paisDestinoSeleccionado, data);
                })
                .catch(error => console.error('Error al cargar los aeropuertos:', error));
        }
    };
    xhttp.open("GET", "paisesEN.xml", true);
    xhttp.send();
}

// Llamada para cargar países al cargar la página
window.onload = function() {
    cargarPaises();
    // Puedes agregar más inicializaciones aquí si es necesario
};

// Evento para cargar aeropuertos cuando se selecciona un país de origen
document.getElementById("origen-pais").addEventListener("change", function() {
    var paisSeleccionado = this.value;
    fetch("aeropuertosEN.json")
        .then(response => response.json())
        .then(data => {
            cargarAeropuertos("origen-aeropuerto", paisSeleccionado, data);
        })
        .catch(error => console.error('Error al cargar los aeropuertos:', error));
});

// Evento para cargar aeropuertos cuando se selecciona un país de destino
document.getElementById("destino-pais").addEventListener("change", function() {
    var paisSeleccionado = this.value;
    fetch("aeropuertosEN.json")
        .then(response => response.json())
        .then(data => {
            cargarAeropuertos("destino-aeropuerto", paisSeleccionado, data);
        })
        .catch(error => console.error('Error al cargar los aeropuertos:', error));
});

// Función para buscar viajes
function buscarViaje() {
    var origenPais = document.getElementById("origen-pais").value;
    var origenAeropuerto = document.getElementById("origen-aeropuerto").value;
    var destinoPais = document.getElementById("destino-pais").value;
    var destinoAeropuerto = document.getElementById("destino-aeropuerto").value;

    // Aquí puedes realizar alguna acción, como redireccionar a una página de resultados de búsqueda.
    console.log("Origen:", origenPais, "-", origenAeropuerto);
    console.log("Destino:", destinoPais, "-", destinoAeropuerto);
    // Agrega tu lógica de búsqueda aquí
}
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
