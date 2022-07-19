import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent {
  nombreLower: string = 'jefferson'
  nombreUpper: string = 'JEFFERSON'
  nombreCompleto: string = 'JeFFerSon NuñEZ'

  date: Date = new Date();//El dia de hoy

  constructor() { }

}
