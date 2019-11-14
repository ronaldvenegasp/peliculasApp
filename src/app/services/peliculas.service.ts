import { Injectable } from '@angular/core';
import { HttpClientJsonpModule, HttpClient } from '@angular/common/http';
import 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private apiKey = '2ad65cd7ac40aba57b33b8bae3fe682e';
  private urlMoviedb = 'https://api.themoviedb.org/3';

  constructor(private jsonp: HttpClientJsonpModule, private http: HttpClient) { }

  getPopulares() {
    const url = `${this.urlMoviedb}/discover/movie?sort_by=popularity.desc&api_key=${this.apiKey}&language=es`;
    return this.http.jsonp(url, 'callback');
  }

  buscarPelicula(nombrePelicula: string) {
    const url = `${ this.urlMoviedb }/search/movie?query=${nombrePelicula}&sort_by=popularity.desc&api_key=${this.apiKey}&language=es`;
    return this.http.jsonp(url, 'callback');
  }
}
