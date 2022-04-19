import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { map, Observable } from 'rxjs';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Ingrediente } from '../model/ingrediente';



@Injectable({
    providedIn: 'root',
  })
  export class IngredienteService {
    private apiUrl: string = 'https://www.thecocktaildb.com/api/json/v1/1';
  
    constructor(private http: HttpClient) {}
  

    buscarIngrediente(ingrediente: any): Observable<Ingrediente> {
      let url = `${this.apiUrl}/search.php?i=${ingrediente}`;
      return this.http
        .get(url)
        .pipe(
          map((data: any = []) => new Ingrediente(data.ingredients[0])))
    }
  }  