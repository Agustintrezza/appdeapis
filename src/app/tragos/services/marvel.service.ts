import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MarvelService {
  PUBLIC_KEY = '85c57327eadf484ea14f7cbbbd645f73';
  HASH = '48E411C25DD9E543F6E1C3F3DDCE1C58';
  URL_API = `https:gateway.marvel.com/v1/public/characters?ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`;
  //   https:gateway.marvel.com/v1/public/characters?ts=1&apikey=85c57327eadf484ea14f7cbbbd645f73&hash=e07b16829d3bb41e2c6d3a79d21d24b0

  constructor(private http: HttpClient) {}

  getAllCharacters(): Observable<any> {
    return this.http.get<any>(this.URL_API).pipe(map((data: any) => data));
  }
}





//   48E411C25DD9E543F6E1C3F3DDCE1C58
//   48e411c25de9e543f6e1c3f3ddce1c58

//   https://gateway.marvel.com/v1/public/characters?ts=1&apikey=85c57327eadf484ea14f7cbbbd645f73&hash=48e411c25de9e543f6e1c3f3ddce1c58
