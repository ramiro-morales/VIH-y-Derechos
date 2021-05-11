
const contenedor= document.getElementById("test");
const botonRes = document.getElementById("boton");
const resultadoTest = document.getElementById("resultado");

const open = document.getElementById('boton');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');

open.addEventListener('click', () => {
  modal_container.classList.add('show');  
});

close.addEventListener('click', () => {
  modal_container.classList.remove('show');
});


const preguntas = [{
    pregunta: "Aproximadamente, ¿cuántas personas viven con el VIH en el mundo?",
    respuestas: {
      a: "2000000",
      b: "12000000",
      c: "37000000"
    },
    respuestaCorrecta: "c"
  },
  {
    pregunta: "¿Cuántas personas contraen el VIH cada día en el mundo?",
    respuestas: {
      a: "Menos de 500",
      b: "1000",
      c: "30000",
      d: "cerca de 5000"
    },
    respuestaCorrecta: "d"
  },
  {
    pregunta: "¿Cuál es la principal vía de transmisión del VIH en el mundo?",
    respuestas: {
      a: "Sexo heterosexual sin protección",
      b: "Sexo entre hombres",
      c: "Drogas inyectables",
      d: "Transmisión materno-infantil",
    },
    respuestaCorrecta: "a"
  },
  {
    pregunta: "¿A qué corresponde la sigla VIH?",
    respuestas: {
      a: "Síndrome de inmunodeficiencia activa",
      b: "Síndrome de Inmunodeficiencia Adquirida",
      c: "Síndrome de inmunoderivación adquirida"
    },
    respuestaCorrecta: "b"
  },
 
];


function mostrarTest() {
  const preguntasYrespuestas = [];

  preguntas.forEach((preguntaActual, numeroDePregunta) => {
    const respuestas = [];

    for (letraRespuesta in preguntaActual.respuestas) {
      respuestas.push(
        `<label>
                  <input type="radio" name="${numeroDePregunta}" value="${letraRespuesta}" />
                  ${preguntaActual.respuestas[letraRespuesta]}
              </label>`
      );
    }

    preguntasYrespuestas.push(
      `<div class="cuestion">${preguntaActual.pregunta}</div>
          <div class="respuestas"> ${respuestas.join("")} </div>
          `
    );
  });

  contenedor.innerHTML = preguntasYrespuestas.join("");
}
mostrarTest();

function mostrarResultado() {
  const respuestas = contenedor.querySelectorAll(".respuestas");
  let respuestasCorrectas = 0;

  preguntas.forEach((preguntaActual, numeroDePregunta) => {
    const todasLasRespuestas = respuestas[numeroDePregunta];
    const checkboxRespuestas = `input[name='${numeroDePregunta}']:checked`;
    const respuestaElegida = (
      todasLasRespuestas.querySelector(checkboxRespuestas) || {}
    ).value;

    if (respuestaElegida === preguntaActual.respuestaCorrecta) {
      respuestasCorrectas++;

      respuestas[numeroDePregunta].style.color = "blue";
    } else {
      respuestas[numeroDePregunta].style.color = "red";
    }
  });
  let aciertos = (respuestasCorrectas * (100 / 4));
  var fallos = (100 - aciertos);
  var aciertosConDecimal= aciertos.toFixed(2);
  var fallosConDecimal= fallos.toFixed(2);
  resultadoTest.innerHTML =
    "Usted ha acertado " +
    respuestasCorrectas +
    " preguntas de un total de " +
    preguntas.length + "<br>" + "Porcentaje de respuestas correctas: " +
    aciertosConDecimal + "<br>" + "Porcentaje de fallos: " + fallosConDecimal;


}


botonRes.addEventListener("click", mostrarResultado);