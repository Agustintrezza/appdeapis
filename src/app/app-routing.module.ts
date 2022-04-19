import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PorTragosComponent } from './tragos/pages/por-tragos/por-tragos.component';
import { VerTragoComponent } from './tragos/pages/ver-trago/ver-trago.component';
import { PorBebidaComponent } from './tragos/pages/por-bebida/por-bebida.component';
import { PorIngredienteComponent } from './tragos/pages/por-ingrediente/por-ingrediente.component';
import { VerPokemonComponent } from './tragos/pages/ver-pokemon/ver-pokemon.component';
import { MarvelComponent } from './tragos/pages/marvel/marvel.component';
import { PokemonComponent } from './tragos/pages/pokemon/pokemon.component';

    const routes: Routes = [
        {
            path: '',
            component: PorTragosComponent,
            pathMatch: 'full'
        },
        {
            path: 'por-bebida',
            component: PorBebidaComponent,
        },
        {
            path: 'por-ingrediente/:ingrediente',
            component: PorIngredienteComponent,
        },
        {
            path: 'ver-trago/:id',
            component: VerTragoComponent,
        },
        {
            path: 'ver-pokemon',
            component: VerPokemonComponent
        },
        {
            path: 'marvel',
            component: MarvelComponent
        },
        {
            path: 'pokemon/:id',
            component: PokemonComponent
        },
        {
            path: '**',
            redirectTo: ''   // Acá tmb se puede armar un componente tipo page de Error.
        }
        
    ]

    @NgModule ({
        imports: [
            RouterModule.forRoot( routes )
        ],
        exports: [
            RouterModule
        ]
    })


export class AppRoutingModule {}