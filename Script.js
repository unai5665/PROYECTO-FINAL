// Función para cargar aeropuertos basados en el país seleccionado
function cargarAeropuertos(selectId, pais) {
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

// Evento para cargar aeropuertos cuando se selecciona un país de origen
document.getElementById("origen-pais").addEventListener("change", function() {
    var paisSeleccionado = this.value;
    cargarAeropuertos("origen-aeropuerto", paisSeleccionado);
});

// Evento para cargar aeropuertos cuando se selecciona un país de destino
document.getElementById("destino-pais").addEventListener("change", function() {
    var paisSeleccionado = this.value;
    cargarAeropuertos("destino-aeropuerto", paisSeleccionado);
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

// Función para cargar países desde un archivo XML
function cargarPaises() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var xmlDoc = this.responseXML;
            var paises = xmlDoc.getElementsByTagName("pais");
            var selectPaises = document.getElementById("origen-pais");
            
            // Iterar sobre cada elemento <pais> en el XML
            for (var i = 0; i < paises.length; i++) {
                var nombre = paises[i].getElementsByTagName("nombre")[0].textContent;
                
                // Crear una nueva opción para el selector de países
                var option = document.createElement("option");
                option.value = nombre;
                option.text = nombre;
                selectPaises.appendChild(option);
            }

            // Cargar aeropuertos para la opción seleccionada por defecto (países)
            var paisOrigenSeleccionado = document.getElementById("origen-pais").value;
            cargarAeropuertos("origen-aeropuerto", paisOrigenSeleccionado);
        }
    };
    xhttp.open("GET", "paises.xml", true); // Especifica la ruta al archivo XML
    xhttp.send();
}

// Llamada para cargar países al cargar la página
window.onload = function() {
    cargarPaises();
    // Puedes agregar más inicializaciones aquí si es necesario
};
