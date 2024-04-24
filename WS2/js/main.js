
let formularioCalc = document.getElementById('formulario-calculadora');
let generoM = document.getElementById('masculino');
let generoF = document.getElementById('femenino');
let resultadoD = document.getElementById('resultado');



 //Formula hombres: valor actividad x (10 x peso en kg) + (6,25 × altsura en cm) - (5 × edad en años) + 5
  //Formula mujeres: valor actividad x (10 x peso en kg) + (6,25 × altura en cm) - (5 × edad en años) - 161
 

    formularioCalc.addEventListener('submit', (evento) => {

    evento.preventDefault();
    calcularCalorias();

    })



function calcularCalorias() {

     
    const edad = formularioCalc.edad.value;
    const peso = formularioCalc.peso.value;
    const altura = formularioCalc.altura.value;
    const actividad = formularioCalc.actividad.value;
    let resultadoC;
   
    if (generoM.checked)
    { resultadoC = formulaHombres(edad,peso,altura,actividad);}
    
    if(generoF.checked)
    {resultadoC = formulaMujeres(edad, peso, altura, actividad);}
    
    aparecerResultado();

    resultadoD.innerHTML = `<p class="alert alert-danger text-center">El resultado es ${resultadoC}</p>`;
}


function formulaHombres(edad,peso,altura,actividad){

    return  actividad*10*peso + 6.25*altura - 5*edad + 5; 

}

function formulaMujeres(edad,peso,altura,actividad){

return actividad*10*peso + 6.25*altura- 5*edad - 16;

}



function mostrarMensajeDeError(msg) {
    const calculo = document.querySelector('#calculo');
    if (calculo) {
        calculo.remove();
    }

    const divError = document.createElement('div');
    divError.className = 'd-flex justify-content-center align-items-center h-100';
    divError.innerHTML = `<span class="alert alert-danger text-center">${msg}</span>`;

    resultado.appendChild(divError);

    setTimeout(() => {
        divError.remove();
        desvanecerResultado();
    }, 5000);
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
