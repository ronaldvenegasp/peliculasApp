import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pelicula-tarjeta',
  templateUrl: './pelicula-tarjeta.component.html',
  styles: []
})
export class PeliculaTarjetaComponent implements OnInit {
  @Input() pelicula: any = {};
  @Input() idPelicula: any;

  @Output() peliculaSeleccionada: EventEmitter<any>;

  constructor(private router: Router) {
    this.peliculaSeleccionada = new EventEmitter();
  }

  ngOnInit() {
  }

  verPelicula() {
    this.router.navigate(['pelicula', this.idPelicula]);
  }

}
