document.addEventListener('DOMContentLoaded', function () {

    document.getElementById('registrationForm').addEventListener('input', function() {
        const form = this;
        const table = document.getElementById('resultTable');

        table.rows[0].cells[1].innerText = form.nombre.value;
        table.rows[1].cells[1].innerText = form.apellido.value;
        table.rows[2].cells[1].innerText = form.email.value;
        table.rows[3].cells[1].innerText = form.telefono.value;
        table.rows[4].cells[1].innerText = form.edad.value;
        table.rows[5].cells[1].innerText = form.direccion.value;
        table.rows[6].cells[1].innerText = form.provincia.value;
        table.rows[7].cells[1].innerText = form.codigoPostal.value;
        table.rows[8].cells[1].innerText = form.metodoContacto.value;

        const suscripciones = Array.from(form.suscripcion)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.value)
            .join(', ');

        table.rows[9].cells[1].innerText = suscripciones || 'Ninguna';
    });

    function toggleCV() {
        const fullCV = document.getElementById('fullCV');
        const shortCV = document.getElementById('shortCV');
        const readMoreBtn = document.querySelector('.read-more-btn');

        if (fullCV.style.display === 'none') {
            fullCV.style.display = 'block';
            shortCV.style.display = 'none';
            readMoreBtn.textContent = 'Leer menos';
        } else {
            fullCV.style.display = 'none';
            shortCV.style.display = 'block';
            readMoreBtn.textContent = 'Leer más';
        }
    }

    document.querySelector('.read-more-btn').addEventListener('click', toggleCV);

});
