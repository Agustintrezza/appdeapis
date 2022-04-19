import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../model/pokemon';

@Component({
  selector: 'app-ver-pokemon',
  templateUrl: './ver-pokemon.component.html',
  styleUrls: ['./ver-pokemon.component.css'],
})
export class VerPokemonComponent implements OnInit {
  

  constructor(private PokemonService: PokemonService) {}

  pokemons : any[] = [];
  page = 1 ;
  totalPokemons: number = 0;


  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons() {
  this.PokemonService.getPokemons(10, this.page + 0)
  .subscribe((response: any) => {
    this.totalPokemons = response.count;
    response.results.forEach(((result: { name: string; }) => {
      this.PokemonService.getMoreData(result.name)
        .subscribe((uniqresponse: any) => {
          this.pokemons.push(uniqresponse);
          console.log(this.pokemons);
        });
    }));
  });
}
}







    //   this.PokemonService
  //   .obtenerPokemones()
  //     .subscribe((pokemon: Pokemon[]) => {
  //       this.pokemon = pokemon;
  //       console.log(pokemon);
  //     })
  // }

  // buscarPokemon() {
  //   console.log('Hola');

  //   this.PokemonService
  //     .buscarPokemon(this.termino)
  //     .subscribe((pokemon : Pokemon[]) => {
  //       this.pokemon = pokemon;
  //       console.log(pokemon);
  //     })
  
