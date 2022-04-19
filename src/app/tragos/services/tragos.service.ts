import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { map, Observable } from 'rxjs';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Trago } from '../model/trago';

@Injectable({
  providedIn: 'root',
})
export class TragosService {
  private apiUrl: string = 'https://www.thecocktaildb.com/api/json/v1/1';

  constructor(private http: HttpClient) {}

  // buscarTrago (termino : string) : Observable<any> {
  //   const url = `${ this.apiUrl }/search.php?s=${termino}`;
  //   return this.http.get<any>( url )
  // }

  buscarTrago(termino: string): Observable<Trago[]> {
    let url = `${this.apiUrl}/search.php?s=${termino}`;
    return this.http
      .get(url)
      .pipe(
        map((data: any = []) => data.drinks.map((item: any) => new Trago(item)))
      );
  }
  buscarPorId(idDrink: any): Observable<Trago> {
    let url = `${this.apiUrl}/lookup.php?i=${idDrink}`;
    return this.http
      .get(url)
      .pipe(map((data: any = []) => new Trago(data.drinks[0])));
  }
}
