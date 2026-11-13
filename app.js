//buscador
const buscador = document.getElementById('buscador');
const tarjetas = document.querySelectorAll('.card_vulnerabilidad');

buscador.addEventListener('input', function(evento) {
    const textoBuscado = evento.target.value.toLowerCase();
    tarjetas.forEach(function(tarjeta) {
        const contenidoTarjeta = tarjeta.textContent.toLowerCase();
        if (contenidoTarjeta.includes(textoBuscado)) {
            tarjeta.style.display = ''; 
        } else {
            tarjeta.style.display = 'none'; 
        }
    });
});