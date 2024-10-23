import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  mostrarMensajes = true;

  constructor() { }

  selectedDate = '5/8';

  selectDate(date: string) {
    this.selectedDate = date;
  }

  hours = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];


  schedule = [
    {
      hour: '17',
      agora: {
        background: 'assets/img/bad-bunny.png',
        nombre: 'Nico García',
        horario: '16:00 - 17:00'
      },
      electro: {
        background: null,
        nombre: '',
        horario: ''
      }
    },
    {
      hour: '18',
      agora: {
        background: 'assets/img/bad-bunny.png',
        nombre: 'Refill Time',
        horario: 'Barra 3'
      },
      electro: {
        background: 'assets/img/bad-bunny.png',
        nombre: 'Steve Aoki',
        horario: '17:30 - 19:30'
      }
    },
    {
      hour: '19',
      agora: {
        background: 'assets/img/bad-bunny.png',
        nombre: 'Refill Time',
        horario: 'Barra 3'
      },
      electro: {
        background: 'assets/img/bad-bunny.png',
        nombre: 'Steve Aoki',
        horario: '17:30 - 19:30'
      }
    },
    {
      hour: '20',
      agora: {
        background: 'assets/img/bad-bunny.png',
        nombre: 'Bad Bunny',
        horario: '20:00 - 22:00'
      },
      electro: {
        background: 'assets/img/bad-bunny.png',
        nombre: 'Hardwell',
        horario: '19:30 - 21:30'
      }
    },
    {
      hour: '21',
      agora: {
        background: 'assets/img/bad-bunny.png',
        nombre: 'Bad Bunny',
        horario: '20:00 - 22:00'
      },
      electro: {
        background: 'assets/img/bad-bunny.png',
        nombre: 'Hardwell',
        horario: '19:30 - 21:30'
      }
    },
    {
      hour: '22',
      agora: {
        background: 'assets/img/bad-bunny.png',
        nombre: 'Bad Bunny',
        horario: '20:00 - 22:00'
      },
      electro: {
        background: 'assets/img/bad-bunny.png',
        nombre: 'Hardwell',
        horario: '19:30 - 21:30'
      }
    }
  ];

}
