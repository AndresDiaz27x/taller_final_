import { Component, OnInit } from '@angular/core';

interface Pregunta {
  texto: string;
  opciones: string[];
  respuestaCorrecta: string;
  seleccionada?: string;
}

@Component({
  selector: 'app-modulo3',
  templateUrl: './modulo3.component.html',
  styleUrls: ['./modulo3.component.css']
})
export class Modulo3Component implements OnInit {

  preguntas: Pregunta[] = [
  {
    texto: '¿En qué año nació la World Wide Web?',
    opciones: ['1989', '1995', '2001'],
    respuestaCorrecta: '1989'
  },
  {
    texto: '¿Quién inventó el Internet tal como lo conocemos?',
    opciones: ['Elon Musk', 'Tim Berners-Lee', 'Bill Gates'],
    respuestaCorrecta: 'Tim Berners-Lee'
  },
  {
    texto: '¿Qué significa WWW?',
    opciones: ['World Wireless Web', 'World Wide Web', 'Web With Widgets'],
    respuestaCorrecta: 'World Wide Web'
  }
];


  mostrarResultado = false;
  puntaje = 0;

  constructor() {}

  ngOnInit(): void {}

  seleccionar(pregunta: Pregunta, opcion: string) {
    pregunta.seleccionada = opcion;
  }

  verificarRespuestas() {
    this.puntaje = this.preguntas.reduce((acc, pregunta) => {
      return acc + (pregunta.seleccionada === pregunta.respuestaCorrecta ? 1 : 0);
    }, 0);
    this.mostrarResultado = true;
  }

  reiniciar() {
    this.preguntas.forEach(p => p.seleccionada = undefined);
    this.mostrarResultado = false;
    this.puntaje = 0;
  }

}


