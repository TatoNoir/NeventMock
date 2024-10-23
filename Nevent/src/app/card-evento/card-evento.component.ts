import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-evento',
  templateUrl: './card-evento.component.html',
  styleUrls: ['./card-evento.component.scss'],
})
export class CardEventoComponent implements OnInit {
  @Input() background: string = '';
  @Input() nombre: string = '';
  @Input() horario: string = '';

  constructor() { }

  ngOnInit() {}

}
