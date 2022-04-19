import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../model/pokemon';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  pokemon: any[] = [];
  descriptions: any[] = [];

  

  constructor( 
        private pokemonService: PokemonService,
        private activatedRoute: ActivatedRoute
    ) {}

  ngOnInit(): void {

    console.log(this.pokemon)

    this.activatedRoute.paramMap.subscribe((params) => {
      let id = params.get('id');
      console.log(id);
      this.pokemonService.buscarPokemonPorId(id).subscribe((id: Pokemon) => {
        this.pokemon.push(id);
        console.log(this.pokemon)
      })
    })

    this.activatedRoute.paramMap.subscribe((params) => {
      let id = params.get('id');
      console.log(id);
      this.pokemonService.buscarCaracteristicaPokemon(id).subscribe((id: any)=> {
        // this.pokemon.push(id);
        this.descriptions.push(id);
        console.log(this.descriptions[0])
      });

  }); 
  
  
  
  
}
// volver() {
//   console.log('Hola');
//   history.back()
// }
};
