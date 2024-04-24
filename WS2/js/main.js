
let formularioCalc = document.getElementById('formulario-calculadora');
let generoM = document.getElementById('masculino');
let generoF = document.getElementById('femenino');
let resultadoD = document.getElementById('resultado');

formularioCalc.addEventListener('submit', (evento) => {
    evento.preventDefault();
    calcularCalorias();
})



function calcularCalorias() {
    const edad = formularioCalc.edad.value;
    const peso = formularioCalc.peso.value;
    const altura = formularioCalc.altura.value;
    const actividad = formularioCalc.actividad.value;
    const tipoDoc = formularioCalc.tipodoc.value;
    const docu = formularioCalc.docu.value;
    const nombre = formularioCalc.nombre.value;
    let resultadoC;
    let gp;

    if (generoM.checked) { resultadoC = formulaHombres(edad, peso, altura, actividad); }

    if (generoF.checked) { resultadoC = formulaMujeres(edad, peso, altura, actividad); }

    aparecerResultado();
    if (edad >= 15 && edad <= 29) {
        gp = "jovenes";
    } else if (edad >= 30 && edad <= 59) {
        gp = "adultos"
    } if (edad >= 60) {
        gp = "adultos mayores";
    }
    resultadoD.innerHTML = `<p class="alert alert-success text-center" style="border-radius:8px">El paciente ${nombre} identificado con ${tipoDoc}
    No. ${docu} perteneciente al grupo poblacional de los ${gp}, requiere un total de ${resultadoC} kcal
    para el sostenimiento de su TBM.</p>`;
}


function formulaHombres(edad, peso, altura, actividad) {
    return actividad * 10 * peso + 6.25 * altura - 5 * edad + 5;
}

function formulaMujeres(edad, peso, altura, actividad) {
    return actividad * 10 * peso + 6.25 * altura - 5 * edad - 16;
}

// Animaciones
function aparecerResultado() {
    resultado.style.top = '100vh';
    resultado.style.display = 'block';

    let distancia = 100;
    let resta = 0.3;
    let id = setInterval(() => {
        resta *= 1.1;
        resultado.style.top = `${distancia - resta}vh`;
        if (resta > 100) {
            clearInterval(id);
        }
    }, 10)
}

function desvanecerResultado() {
    let distancia = 1;

    let id = setInterval(() => {
        distancia *= 2;
        resultado.style.top = `${distancia}vh`;
        if (distancia > 100) {
            clearInterval(id);
            resultado.style.display = 'none';
            resultado.style.top = 0;
        }
    }, 10)
}