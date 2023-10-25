// Función de la sección Cotizador

function cotizador(tamañoLargo, tamañoAncho, colores, tinta, detalle) {
    let valor = 0;

    const largo = () => tamañoLargo * 4000;
    const ancho = () => tamañoAncho * 4000;
    const color = () => colores * 7000;
    const tintas = () => tinta * 7000;
    const detalles = () => detalle * 7000;

    valor = largo() + ancho() + color() + tintas() + detalles();
    return valor;
}

const formulario = document.getElementById("formularioCotizador");

formulario.addEventListener("submit", function (event) {
    event.preventDefault(); 

    const tamañoLargo = parseFloat(document.querySelector('select[name="tamaño-largo"]').value);
    const tamañoAncho = parseFloat(document.querySelector('select[name="tamaño-ancho"]').value);
    const colores = parseFloat(document.querySelector('select[name="colores"]').value);
    const tinta = parseFloat(document.querySelector('select[name="tinta"]').value);
    const detalle = parseFloat(document.querySelector('select[name="detalle"]').value);

    const valorTotal = cotizador(tamañoLargo, tamañoAncho, colores, tinta, detalle);

    const resultadoElement = document.getElementById("resultado");
    resultadoElement.textContent = `El valor total es: $${valorTotal}`;
});

// Función de cambiar colores de la página para el modo oscuro


// Función del mapa de Google
function iniciarMap(){
    var coord = {lat:-34.5956145 ,lng: -58.4431949};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}

// Función para el botón de la barra de Menú
document.getElementById("icon-menu").addEventListener("click", mostrar_menu);

function mostrar_menu(){
    document.getElementById("move-content").classList.toggle('move-container-all');
    document.getElementById("show-menu").classList.toggle('show-lateral');
}