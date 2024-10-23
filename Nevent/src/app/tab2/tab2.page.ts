import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  mostrarMensajes = false;

  constructor() { }

  event = {
    name: 'Bad Bunny',
    date: 'Jue 5/8',
    time: '15:00-22:00',
    location: 'Escenario ágora',
    description: 'Benito Antonio Martínez Ocasio (Almirante Sur, 10 de marzo de 1994) conocido artísticamente como Bad Bunny, es un cantante, compositor, productor discográfico y luchador puertorriqueño. Caracterizado por su entonación grave, sus estilos musicales son generalmente definidos como reguetón y trap latino, aunque también ha interpretado otros géneros y estilos variados.',
    map: 'location',
    image: 'assets/img/bad-bunny.png'
  }

}
