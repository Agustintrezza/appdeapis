import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Pokemon } from '../model/pokemon';



@Injectable({
    providedIn: 'root'
  })


  export class PokemonService {

    // private apiUrl: string = 'https://www.thecocktaildb.com/api/json/v1/1';
  
    constructor(private http: HttpClient) { }


    // Obtener Pokemons
    getPokemons(limit: number, offset: number) {
        return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
    }

    // Traer mas data de los pokemones
    getMoreData(name : string) {
        return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    }

    buscarPokemonPorId(id : any) :Observable<Pokemon> {
      let url = `https://pokeapi.co/api/v2/pokemon/${id}`;
      return this.http
      .get(url)
      .pipe(map((data: any = []) => new Pokemon(data)));
    }

    buscarCaracteristicaPokemon(id: any) {
      return this.http.get(`https://pokeapi.co/api/v2/characteristic/${id}`);
      
    }

    // obtenerPokemones(){
    //     let url = `https://pokeapi.co/api/v2/pokemon?limit=10`
    //     return this.http
    //     .get(url)
    //     .pipe(
    //       map((data: any = []) => data.results.map((item: any) => new Pokemon(item)))
    //     );
    // }
  
    // buscarPokemon(termino: string): Observable<Pokemon[]> {
    //   let url = `https://pokeapi.co/api/v2/pokemon/${termino}`;
    //   return this.http
    //     .get(url)
    //     .pipe(
    //       map((data: any = []) => data.abilities.map((item: any) => new Pokemon(item)))
    //     );
    // }
  }
  