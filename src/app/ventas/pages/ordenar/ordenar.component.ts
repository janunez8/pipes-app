import { Component, OnInit } from '@angular/core';
import { Hereoe, Color } from '../../interfaces/ventas.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.css']
})
export class OrdenarComponent implements OnInit {

  enMayusculas: boolean = false;
  porOrder: string = '';

  heroes: Hereoe[] = [
    {
      nombre: 'Aquaman',
      vuela: false,
      color: Color.azul,
    },
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.rojo,
    },
    {
      nombre: 'Batman',
      vuela: true,
      color: Color.negro,
    },
    {
      nombre: 'Hulk',
      vuela: false,
      color: Color.verde,
    }
  ];

  ordenarPor(termino: string) {
    console.log(termino)
    this.porOrder = termino;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
