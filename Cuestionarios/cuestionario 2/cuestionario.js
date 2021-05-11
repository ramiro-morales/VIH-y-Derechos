const contenedor = document.getElementById("test");
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
    pregunta: "Si una persona tiene el VIH, siempre desarrollará sida.",
    respuestas: {
      a: "Verdadero",
      b: "Falso"
    },
    respuestaCorrecta: "b"
  },
  {
    pregunta: "Una persona puede contraer la misma infección de transmisión sexual (ITS) más de una vez.",
    respuestas: {
      a: "Verdadero",
      b: "Falso"
    },
    respuestaCorrecta: "a"
  }, {
    pregunta: "El VIH puede curarse si se trata en una etapa temprana.",
    respuestas: {
      a: "Verdadero",
      b: "Falso"
    },
    respuestaCorrecta: "b"
  }, {
    pregunta: "Muchas personas con infecciones de transmisión sexual, incluida el VIH, no muestran síntomas",
    respuestas: {
      a: "Verdadero",
      b: "Falso"
    },
    respuestaCorrecta: "a"
  }, {
    pregunta: "Estar infectado por una ITS puede aumentar el riesgo de contraer VIH si se mantienen relaciones sexuales sin protección.",
    respuestas: {
      a: "Verdadero",
      b: "Falso"
    },
    respuestaCorrecta: "a"
  }, {
    pregunta: "La circuncisión evita que los hombres contraigan la infección por VIH.",
    respuestas: {
      a: "Verdadero",
      b: "Falso"
    },
    respuestaCorrecta: "b"
  }, {
    pregunta: "Una persona puede mirar a alguien y saber si está infectado por VIH o si tiene sida.",
    respuestas: {
      a: "Verdadero",
      b: "Falso"
    },
    respuestaCorrecta: "b"
  }, {
    pregunta: "Existe una vacuna eficaz que protege de la infección por VIH.",
    respuestas: {
      a: "Verdadero",
      b: "Falso"
    },
    respuestaCorrecta: "b"
  }, {
    pregunta: "Una persona puede estar infectada por el VIH desde hace 10 o más años y no desarrollar el sida.",
    respuestas: {
      a: "Verdadero",
      b: "Falso"
    },
    respuestaCorrecta: "a"
  }, {
    pregunta: "La realización de perforaciones en las orejas (piercing) y tatuajes con material sin esterilizar es una posible vía de transmisión del VIH.",
    respuestas: {
      a: "Verdadero",
      b: "Falso"
    },
    respuestaCorrecta: "a"
  }, {
    pregunta: "Una persona puede contraer VIH por la picadura de un mosquito.",
    respuestas: {
      a: "Verdadero",
      b: "Falso"
    },
    respuestaCorrecta: "b"
  }, {
    pregunta: "Una persona puede evitar la infección por el VIH mediante una alimentación saludable y la práctica de ejercicio de forma regular.",
    respuestas: {
      a: "Verdadero",
      b: "Falso"
    },
    respuestaCorrecta: "b"
  }, {
    pregunta: "Una persona VIH indetectable con adherencia al tratamiento y sin otras ITS, no transmite el virus incluso si no usara preservativo.",
    respuestas: {
      a: "Verdadero",
      b: "Falso"
    },
    respuestaCorrecta: "a"
  }, {
    pregunta: "El PreP protege frente al VIH y otras ITS.",
    respuestas: {
      a: "Verdadero",
      b: "Falso"
    },
    respuestaCorrecta: "b"
  }, {
    pregunta: "Las mujeres con VIH, siempre transmitirán VIH el virus a sus bebes si quedan embarazadas",
    respuestas: {
      a: "Verdadero",
      b: "Falso"
    },
    respuestaCorrecta: "b"
  }, {
    pregunta: "La saliva contiene VIH, por lo tanto es una vía de transmisión.",
    respuestas: {
      a: "Verdadero",
      b: "Falso"
    },
    respuestaCorrecta: "b"
  }, {
    pregunta: "Para la atención odontológica a personas con VIH, debe usarse material especial.",
    respuestas: {
      a: "Verdadero",
      b: "Falso"
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
  let aciertos = (respuestasCorrectas * (100 / 17));
  var fallos = (100 - aciertos);
  var aciertosConDecimal= aciertos.toFixed(2);
  var fallosConDecimal= fallos.toFixed(2);
  resultadoTest.innerHTML =
    "Usted ha acertado " +
    respuestasCorrectas +
    " preguntas de un total de 17 preguntas" + "<br>" + "Porcentaje de respuestas correctas: " +
    aciertosConDecimal + "<br>" + "Porcentaje de fallos: " + fallosConDecimal;


}


botonRes.addEventListener("click", mostrarResultado);