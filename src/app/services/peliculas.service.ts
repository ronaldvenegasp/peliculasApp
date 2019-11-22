import { Injectable } from '@angular/core';
import { HttpClientJsonpModule, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private apiKey = '2ad65cd7ac40aba57b33b8bae3fe682e';
  private urlMoviedb = 'https://api.themoviedb.org/3';

  peliculas: any[] = [];

  constructor(private jsonp: HttpClientJsonpModule, private http: HttpClient) { }

  getCartelera() {
    let desde = new Date();
    let desdeStr = `${desde.getFullYear()}-${desde.getMonth() + 1}-${desde.getDate()}`;
    let hasta = new Date();
    hasta.setDate(hasta.getDate() + 7);
    let hastaStr = `${hasta.getFullYear()}-${hasta.getMonth() + 1 }-${hasta.getDate()}`;

    const url = `${this.urlMoviedb}/discover/movie?primary_release_date.gte=${desdeStr}&primary_release_date.lte=${hastaStr}&api_key=${this.apiKey}&language=es`;
    return this.http.jsonp(url, 'callback');
  }

  getPopulares() {
    const url = `${this.urlMoviedb}/discover/movie?sort_by=popularity.desc&api_key=${this.apiKey}&language=es`;
    return this.http.jsonp(url, 'callback');
  }

  getPopularesNinos() {
    const url = `${this.urlMoviedb}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${this.apiKey}&language=es`;
    return this.http.jsonp(url, 'callback');
  }

  buscarPelicula(nombrePelicula: string) {
    const url = `${ this.urlMoviedb }/search/movie?query=${nombrePelicula}&sort_by=popularity.desc&api_key=${this.apiKey}&language=es`;
    return this.http.jsonp(url, 'callback').pipe(map((data:[]) => {
      console.log(this.peliculas);
      this.peliculas = data['results'];
      return data['results'];
    }));
  }
}
