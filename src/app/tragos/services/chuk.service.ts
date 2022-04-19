import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { map, Observable } from 'rxjs';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Chuk } from '../model/chuk';

@Injectable({
  providedIn: 'root',
})
export class ChukService {
  // private apiUrl: string = 'https://www.thecocktaildb.com/api/json/v1/1';

  constructor(private http: HttpClient) {}

  terminoChuk(termino: string): Observable<Chuk[]> {
    let url = `https://api.chucknorris.io/jokes/search?query=${termino}`;
    return this.http
      .get(url)
      .pipe(
        map((data: any = []) => data.result.map((item: any) => new Chuk(item)))
      );
  }

  buscarCategoriasChuk(): Observable<any> {
    let url = `https://api.chucknorris.io/jokes/categories`;
    return this.http.get(url);
  }

  buscarPorCategoria(categoria: string): Observable<Chuk> {
    let url = `https://api.chucknorris.io/jokes/random?category=${categoria}`;
    return this.http.get(url).pipe(map((data: any) => new Chuk(data)));
  }
}
