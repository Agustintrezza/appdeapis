import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { PorTragosComponent } from './pages/por-tragos/por-tragos.component';
import { VerTragoComponent } from './pages/ver-trago/ver-trago.component';
import { PorIngredienteComponent } from './pages/por-ingrediente/por-ingrediente.component';
import { PorBebidaComponent } from './pages/por-bebida/por-bebida.component';
import { VerPokemonComponent } from './pages/ver-pokemon/ver-pokemon.component';
import { MarvelComponent } from './pages/marvel/marvel.component';
import { PokemonComponent } from './pages/pokemon/pokemon.component';




@NgModule({
  declarations: [
    PorTragosComponent,
    VerTragoComponent,
    PorIngredienteComponent,
    PorBebidaComponent,
    VerPokemonComponent,
    MarvelComponent,
    PokemonComponent
  ],
  exports: [
    PorTragosComponent,
    VerTragoComponent,
    PorBebidaComponent,
    PorIngredienteComponent,
    VerPokemonComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxPaginationModule
  ]
})
export class TragosModule { }
