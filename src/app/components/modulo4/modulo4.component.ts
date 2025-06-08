import { Component } from '@angular/core';

interface PreguntaVF {
  texto: string;
  respuestaCorrecta: boolean;
  respondida?: boolean;
  respuestaUsuario?: boolean;
}

@Component({
  selector: 'app-modulo4',
  templateUrl: './modulo4.component.html',
  styleUrls: ['./modulo4.component.css']
})
export class Modulo4Component {

  preguntas: PreguntaVF[] = [
    { texto: 'El Internet se originó con un proyecto llamado ARPANET.', respuestaCorrecta: true },
    { texto: 'Tim Berners-Lee creó Google en 1989.', respuestaCorrecta: false },
    { texto: 'WWW significa World Wide Web.', respuestaCorrecta: true },
    { texto: 'LeonardoAI es un buscador de información.', respuestaCorrecta: false },
    { texto: 'Una buena práctica en Internet es usar contraseñas seguras.', respuestaCorrecta: true }
  ];

  puntaje = 0;
  mostrarResultado = false;

  responder(pregunta: PreguntaVF, respuestaUsuario: boolean) {
    if (pregunta.respondida) return;

    pregunta.respuestaUsuario = respuestaUsuario;
    pregunta.respondida = true;

    if (respuestaUsuario === pregunta.respuestaCorrecta) {
      this.puntaje++;
    }

    // Mostrar resultado si ya todas están respondidas
    this.mostrarResultado = this.preguntas.every(p => p.respondida);
  }

  reiniciar() {
    this.puntaje = 0;
    this.mostrarResultado = false;
    this.preguntas.forEach(p => {
      p.respondida = false;
      p.respuestaUsuario = undefined;
    });
  }
}



