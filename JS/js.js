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
