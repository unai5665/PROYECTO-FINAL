document.addEventListener('DOMContentLoaded', function() {
    const languageToggle = document.getElementById('lenguaje-toggle');
    const languageMenu = document.getElementById('lenguaje-menu');

    languageToggle.addEventListener('click', function() {
        languageMenu.classList.toggle('show');
    });

    const languageOptions = document.querySelectorAll('.opcion-lenguaje');
    languageOptions.forEach(option => {
        option.addEventListener('click', function() {
            const flagIcon = option.querySelector('.flag-icon');
            const selectedLanguage = option.getAttribute('data-lang');
            languageToggle.innerHTML = ''; // Limpiar el contenido actual
            languageToggle.appendChild(flagIcon.cloneNode(true)); // Agregar la bandera seleccionada
            languageToggle.innerHTML += '<span class="dropdown-arrow">▼</span>'; // Agregar el icono de desplegable
            languageMenu.classList.remove('show'); // Ocultar el menú
        });
    });
});
