import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  cartelera: any;
  populares: any;
  popularesNinos: any;

  constructor(private peliculasService: PeliculasService, private router: Router) {
    this.peliculasService.getCartelera().subscribe(data => {
      console.log('Cartelera', data);
      this.cartelera = data;
    });

    this.peliculasService.getPopulares().subscribe(data => {
      console.log('Populares', data);
      this.populares = data;
    });

    this.peliculasService.getPopularesNinos().subscribe(data => {
      console.log('Populares niños', data);
      this.popularesNinos = data;
    });
  }

  ngOnInit() {
  }

}
