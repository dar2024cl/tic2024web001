function mostrarMensaje() {

  alert('Daniela Álvarez Rodríguez, curso 2ºB');

}

function ocultarSeccion() {

      var seccion = document.querySelector('.bloque1');

      seccion.style.display = (seccion.style.display === 'none'|| seccion.style.display === '') ? 'block' : 'none';

    }

function MostrarSeccion() {

      var seccion = document.querySelector('.bloque1');

      seccion.style.display = (seccion.style.display === 'none' || seccion.style.display === '') ? 'block' : 'none';

    }

    function cambiarColorFondo() {

      var seccion = document.querySelector('.bloque1');

      seccion.style.backgroundColor = 'purple';

    }

function mostrarFecha() {

    var fechaActual = new Date();

    alert('Fecha actual: ' + fechaActual);

}

function cambiarColorFondoHover() {

    var seccion = document.querySelector('.bloque2');

    seccion.style.backgroundColor = 'green'; 

}

function restaurarColorFondo() {

    var seccion = document.querySelector('.bloque2');

    seccion.style.backgroundColor = 'lightgrey';

}

function obtenerUbicacion() {

      if ("geolocation" in navigator) { navigator.geolocation.getCurrentPosition(function(position) {

          var latitud = position.coords.latitude;

          var longitud = position.coords.longitude;

          var ubicacionInfo = document.getElementById("ubicacion");

          ubicacionInfo.textContent = "Latitud: " + latitud + ", Longitud: " + longitud;

         mostrarMapa(latitud, longitud); document.body.insertBefore(ubicacionInfo, document.querySelector('.container'));

        });

      } else {

        alert("Geolocalización no está disponible en este dispositivo.");

      }

    }

src="https://unpkg.com/leaflet/dist/leaflet.js"

function mostrarMapa(latitud, longitud) {

      var map = L.map('map').setView([latitud, longitud], 13); L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {

        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'

      }).addTo(map);


      L.marker([latitud, longitud]).addTo(map)

        .bindPopup('¡Estás aquí!')

        .openPopup();

    }