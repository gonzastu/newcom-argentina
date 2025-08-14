document.getElementById('formTorneo').addEventListener('submit', function(e) {
    e.preventDefault();

    let fecha = e.target.fecha.value;
    let categoria = e.target.categoria.value;
    let valor = e.target.valor.value;
    let alojamiento = e.target.alojamiento.value;
    let equipos = e.target.equipos.value;

    let torneoDiv = document.createElement('div');
    torneoDiv.classList.add('torneo');
    torneoDiv.innerHTML = `<strong>${fecha}</strong> - Categoría: ${categoria} - Valor: $${valor} - Alojamiento: ${alojamiento} - Equipos: ${equipos}`;

    document.getElementById('listaTorneos').appendChild(torneoDiv);

    e.target.reset();
});
