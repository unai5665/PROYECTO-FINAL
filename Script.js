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
            var paisOrigenSeleccionado = document.getElementById("origen-pais").value;
            var paisDestinoSeleccionado = document.getElementById("destino-pais").value;
            cargarAeropuertos("origen-aeropuerto", paisOrigenSeleccionado);
            cargarAeropuertos("destino-aeropuerto", paisDestinoSeleccionado);
        }
    };
    xhttp.open("GET", "paises.xml", true); 
    xhttp.send();
}

// Llamada para cargar países al cargar la página
window.onload = function() {
    cargarPaises();
    // Puedes agregar más inicializaciones aquí si es necesario
};

// Datos de ejemplo para aeropuertos
var aeropuertos = {
    "Estados Unidos": ["Aeropuerto O'Hare International", "Aeropuerto Los Angeles International", "Aeropuerto Hartsfield-Jackson Atlanta International", "Aeropuerto Dallas/Fort Worth International", "Aeropuerto John F. Kennedy International", " Aeropuerto Denver International", "Aeropuerto San Francisco International", "Aeropuerto Harry Reid International", "Aeropuerto Seattle-Tacoma International", "Aeropuerto Miami International"],
    "Canadá": ["Aeropuerto Internacional Toronto Pearson", "Aeropuerto Internacional de Vancouver", "Aeropuerto  Internacional Montréal-Pierre Elliott Trudeau", "Aeropuerto Internacional de Calgary", "Aeropuerto Internacional de Edmonton", " Aeropuerto Internacional de Ottawa Macdonald-Cartier", "Aeropuerto Internacional de Halifax Stanfield", "Aeropuerto Internacional de Winnipeg James Armstrong Richardson", "Aeropuerto Internacional de Victoria", "Aeropuerto Internacional de St. John's"],
    "Reino Unido": ["Aeropuerto de Londres-Heathrow", "Aeropuerto de Londres-Gatwick", "Aeropuerto de Londres-Stansted", "Aeropuerto de Manchester", "Aeropuerto de Londres-Luton", "Aeropuerto de Edimburgo", "Aeropuerto de Birmingham", "Aeropuerto de Glasgow", "Aeropuerto de Bristol", "Aeropuerto de Newcastle"],
    "Francia": ["Aeropuerto Charles de Gaulle", "Aeropuerto de Orly", "Aeropuerto de Lyon-Saint Exupéry", "Aeropuerto de Niza-Costa Azul", "Aeropuerto de Burdeos-Mérignac", "Aeropuerto de Marsella-Provenza", "Aeropuerto de Toulouse-Blagnac", "Aeropuerto de Nantes-Atlantique", "Aeropuerto de Montpellier-Méditerranée", "Aeropuerto de Lille-Lesquin"],
    "España": ["Aeropuerto Adolfo Suárez Madrid-Barajas", "Aeropuerto de Barcelona-El Prat", "Aeropuerto de Palma de Mallorca", "Aeropuerto de Málaga-Costa del Sol", "Aeropuerto de Alicante-Elche", "Aeropuerto de Gran Canaria", "Aeropuerto de Tenerife Sur", "Aeropuerto de Ibiza", "Aeropuerto de Lanzarote", "Aeropuerto de Valencia"],
    "Italia": ["Aeropuerto Leonardo da Vinci-Fiumicino (Roma)", "Aeropuerto de Milán-Malpensa", "Aeropuerto de Venecia-Marco Polo", "Aeropuerto de Florencia-Peretola", "Aeropuerto de Nápoles-Capodichino", "Aeropuerto de Bolonia-Guglielmo Marconi", "Aeropuerto de Pisa-Galileo Galilei", "Aeropuerto de Catania-Fontanarossa", "Aeropuerto de Palermo-Punta Raisi", "Aeropuerto de Turín-Caselle"],
    "Alemania": ["Aeropuerto de Fráncfort del Meno", "Aeropuerto de Múnich-Franz Josef Strauss", "Aeropuerto de Berlín-Tegel", "Aeropuerto de Berlín-Schönefeld", "Aeropuerto de Hamburgo", "Aeropuerto de Düsseldorf", "Aeropuerto de Colonia-Bonn", "Aeropuerto de Stuttgart", "Aeropuerto de Hanóver", "Aeropuerto de Leipzig/Halle"],
    "Japón": ["Aeropuerto Internacional de Haneda (Tokio)", "Aeropuerto Internacional de Narita (Tokio)", "Aeropuerto de Kansai (Osaka)", "Aeropuerto de Chubu Centrair (Nagoya)", "Aeropuerto Internacional de Fukuoka", "Aeropuerto de Sapporo-New Chitose", "Aeropuerto de Naha (Okinawa)", "Aeropuerto de Sendai", "Aeropuerto de Hiroshima", "Aeropuerto de Nanki-Shirahama"],
    "Australia": ["Aeropuerto de Sídney-Kingsford Smith", "Aeropuerto de Melbourne-Tullamarine", "Aeropuerto de Brisbane", "Aeropuerto de Perth", "Aeropuerto de Adelaida", "Aeropuerto de Gold Coast", "Aeropuerto de Canberra", "Aeropuerto de Hobart", "Aeropuerto de Darwin", "Aeropuerto de Cairns"],
    "China": ["Aeropuerto Internacional de Beijing-Capital", "Aeropuerto Internacional de Shanghái-Pudong", "Aeropuerto Internacional de Guangzhou-Baiyun", "Aeropuerto Internacional de Chengdu-Shuangliu", "Aeropuerto Internacional de Shenzhen-Bao'an", "Aeropuerto Internacional de Kunming-Changshui", "Aeropuerto Internacional de Hangzhou-Xiaoshan", "Aeropuerto Internacional de Xi'an-Xianyang", "Aeropuerto Internacional de Chongqing-Jiangbei", "Aeropuerto Internacional de Wuhan-Tianhe"],
    "México": ["Aeropuerto Internacional de la Ciudad de México (AICM)", "Aeropuerto Internacional de Cancún", "Aeropuerto Internacional de Guadalajara", "Aeropuerto Internacional de Monterrey", "Aeropuerto Internacional de Tijuana", "Aeropuerto Internacional de Puerto Vallarta", "Aeropuerto Internacional de Mérida", "Aeropuerto Internacional de Los Cabos", "Aeropuerto Internacional de Oaxaca", "Aeropuerto Internacional de Veracruz"],
    "Brasil": ["Aeropuerto Internacional de São Paulo-Guarulhos", "Aeropuerto Internacional de Río de Janeiro-Galeão", "Aeropuerto Internacional de Brasilia", "Aeropuerto Internacional de Campinas-Viracopos", "Aeropuerto Internacional de Belo Horizonte-Confins", "Aeropuerto Internacional de Porto Alegre-Salgado Filho", "Aeropuerto Internacional de Salvador-Deputado Luís Eduardo Magalhães", "Aeropuerto Internacional de Fortaleza-Pinto Martins", "Aeropuerto Internacional de Recife-Guararapes", "Aeropuerto Internacional de Manaus-Eduardo Gomes"],
    "India": ["Aeropuerto Internacional Indira Gandhi (Nueva Delhi)", "Aeropuerto Internacional Chhatrapati Shivaji Maharaj (Mumbai)", "Aeropuerto Internacional de Kempegowda (Bangalore)", "Aeropuerto Internacional de Chennai", "Aeropuerto Internacional Netaji Subhash Chandra Bose (Kolkata)", "Aeropuerto Internacional de Hyderabad-Rajiv Gandhi", "Aeropuerto Internacional de Cochin", "Aeropuerto Internacional de Pune", "Aeropuerto Internacional de Ahmedabad-Sardar Vallabhbhai Patel", "Aeropuerto Internacional de Jaipur"],
    "Rusia": ["Aeropuerto Internacional Sheremétievo (Moscú)", "Aeropuerto Internacional Domodédovo (Moscú)", "Aeropuerto Internacional de San Petersburgo-Púlkovo", "Aeropuerto Internacional de Vnúkovo (Moscú)", "Aeropuerto Internacional de Ekaterimburgo-Koltsovo", "Aeropuerto Internacional de Novosibirsk-Tolmachevo", "Aeropuerto Internacional de Krasnodar-Pashkovsky", "Aeropuerto Internacional de Rostov del Don-Platov", "Aeropuerto Internacional de Samara-Kúrumoch", "Aeropuerto Internacional de Kazán"],
    "Sudáfrica": ["Aeropuerto Internacional de Johannesburgo-Oliver Reginald Tambo", "Aeropuerto Internacional de Ciudad del Cabo", "Aeropuerto Internacional de Durban-King Shaka", "Aeropuerto Internacional de Puerto Elizabeth", "Aeropuerto Internacional de Bloemfontein", "Aeropuerto Internacional de East London", "Aeropuerto Internacional de George", "Aeropuerto Internacional de Kimberley", "Aeropuerto Internacional de Nelspruit-Kruger Mpumalanga", "Aeropuerto Internacional de Polokwane"],
    "Argentina": ["Aeropuerto Internacional Ministro Pistarini (Ezeiza, Buenos Aires)", "Aeroparque Jorge Newbery (Buenos Aires)", "Aeropuerto Internacional de Córdoba-Ingeniero Aeronáutico Ambrosio L.V. Taravella", "Aeropuerto Internacional de Rosario-Islas Malvinas", "Aeropuerto Internacional de Mendoza-Gobernador Francisco Gabrielli", "Aeropuerto Internacional de Bariloche-Teniente Luis Candelaria", "Aeropuerto Internacional de Tucumán-Teniente General Benjamín Matienzo", "Aeropuerto Internacional de Salta-Martín Miguel de Güemes", "Aeropuerto Internacional de Neuquén-Presidente Perón", "Aeropuerto Internacional de Mar del Plata-Astor Piazzolla"],
    "Colombia": ["Aeropuerto Internacional El Dorado (Bogotá)", "Aeropuerto Internacional José María Córdova (Medellín)", "Aeropuerto Internacional Rafael Núñez (Cartagena)", "Aeropuerto Internacional Alfonso Bonilla Aragón (Cali)", "Aeropuerto Internacional Ernesto Cortissoz (Barranquilla)", "Aeropuerto Internacional Matecaña (Pereira)", "Aeropuerto Internacional Palonegro (Bucaramanga)", "Aeropuerto Internacional Gustavo Rojas Pinilla (San Andrés)", "Aeropuerto Internacional Camilo Daza (Cúcuta)", "Aeropuerto Internacional El Edén (Armenia)"],
    "Chile": ["Aeropuerto Internacional Arturo Merino Benítez (Santiago)", "Aeropuerto Internacional Comodoro Arturo Merino Benítez (Santiago)", "Aeropuerto Internacional Carriel Sur (Concepción)", "Aeropuerto Internacional Diego Aracena (Iquique)", "Aeropuerto Internacional La Araucanía (Temuco)", "Aeropuerto Internacional Cerro Moreno (Antofagasta)", "Aeropuerto Internacional Mataveri (Isla de Pascua)", "Aeropuerto Internacional El Tepual (Puerto Montt)", "Aeropuerto Internacional Presidente Carlos Ibáñez del Campo (Punta Arenas)", "Aeropuerto Internacional Desierto de Atacama (Copiapó)"],
    "Perú": ["Aeropuerto Internacional Jorge Chávez (Lima)", "Aeropuerto Internacional Alejandro Velasco Astete (Cusco)", "Aeropuerto Internacional Rodríguez Ballón (Arequipa)", "Aeropuerto Internacional Alférez FAP Alfredo Vladimir Sara Bauer (Trujillo)", "Aeropuerto Internacional Capitán FAP Carlos Martínez de Pinillos (Chiclayo)", "Aeropuerto Internacional Coronel FAP Francisco Secada Vignetta (Iquitos)", "Aeropuerto Internacional Teniente FAP Jaime Montreuil Morales (Tacna)", "Aeropuerto Internacional Teniente General Gerardo Pérez Pinedo (Pucallpa)", "Aeropuerto Internacional Alférez FAP David Figueroa Fernandini (Huánuco)", "Aeropuerto Internacional FAP Guillermo del Castillo Paredes (Tarapoto)"],
    "Tailandia": ["Aeropuerto Internacional Suvarnabhumi (Bangkok)", "Aeropuerto Internacional Don Mueang (Bangkok)", "Aeropuerto Internacional de Phuket", "Aeropuerto Internacional de Chiang Mai", "Aeropuerto Internacional de Krabi", "Aeropuerto Internacional de Hat Yai", "Aeropuerto Internacional de Samui", "Aeropuerto Internacional de U-Tapao (Pattaya)", "Aeropuerto Internacional de Surat Thani", "Aeropuerto Internacional de Hua Hin"]
    
};


// Obtén el modal
var modal = document.getElementById("registerModal");

// Obtén el botón que abre el modal
var btn = document.querySelector(".register-button");

// Obtén el elemento <span> que cierra el modal
var span = document.getElementsByClassName("close")[0];

// Cuando el usuario hace clic en el botón, abre el modal
btn.onclick = function() {
    modal.style.display = "block";
}

// Cuando el usuario hace clic en <span> (x), cierra el modal
span.onclick = function() {
    modal.style.display = "none";
}

// Cuando el usuario hace clic fuera del modal, lo cierra
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}