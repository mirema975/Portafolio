window.onload = function() {
    getCard();
}

function saltarA(id, tiempo) {
    var tiempo = tiempo || 500;
    $("html, body").animate({ scrollTop: $(id).offset().top }, tiempo);
}

async function getCard() {

    const rawResponse = await fetch('https://190.138.132.45:8081/api/proyecto', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    });

    const proyectos = await rawResponse.json();

    let HTMLParaAgregar = ''

    for (pro of proyectos) {

        HTMLParaAgregar  += `
        <div class="card">
        <div class="card__img">
        </div>
        <div class="card__title">
        <h1>${pro.nombre}</h1>
        <span>${pro.descripcion}</span>
        </div>
        <div class="card__projects-links">
        <a href="${pro.repositorio}" target="_blank">
        <i class="fab fa-github"></i><br> <br>
        <span>Repositorio</span>
        </a>
        </div>
        </div>`;
    }
    
    document.getElementById('portafolio-container').innerHTML = HTMLParaAgregar;

}