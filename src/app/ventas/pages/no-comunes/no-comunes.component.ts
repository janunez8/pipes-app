import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent {
  //i18Select
  nombre: string = 'Jefferson';
  genero: string = 'masculino';
  isPresionado: boolean = false;

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla',
  }

  cambiarNombre() {
    this.isPresionado = !this.isPresionado;
    if (this.isPresionado) {
      this.nombre = 'Juana';
      this.genero = 'femenino';
    } else {
      this.nombre = 'Jefferson';
      this.genero = 'femenino';
    }
  }

  //i18Plural
  clientes: string[] = ['Jefferson', 'Juan', 'Pedro', 'Maria', 'Juana', 'Jorge'];
  clientesMapa = {
    '=0': 'no tenemos ningún cliente',
    '=1': 'tenemos un cliente',
    'other': 'tenemos # clientes'
  }

  eliminarCliente() {
    this.clientes.pop();
  }



  //KeyValie Pipe
  persona = {
    nombre: 'Jefferson',
    edad: 24,
    direccion: 'Calle falsa 123'
  }


  //JsonPipe
  heroes = [
    {
      nombre: 'Aquaman',
      vuela: false,
    },
    {
      nombre: 'Superman',
      vuela: true,
    },
    {
      nombre: 'Hulk',
      vuela: false,
    }
  ]

  //AsyncPipe
  miObservable = interval(5000); //emite un valor cada segundo 0, 1
  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Hola Mundo');
    }, 3500);
  })
}
