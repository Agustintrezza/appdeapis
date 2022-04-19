import { Component, OnInit } from '@angular/core';
import { Ingrediente } from '../../model/ingrediente';
import { IngredienteService } from '../../services/ingrediente.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-por-ingrediente',
  templateUrl: './por-ingrediente.component.html',
  styleUrls: ['./por-ingrediente.component.css']
})
export class PorIngredienteComponent implements OnInit {
  // termino: string = '';
  // trago: string = '';
  ingrediente : Ingrediente = new Ingrediente();
  
  
  constructor(private IngredienteService: IngredienteService,  private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.ingrediente);

    this.activatedRoute.paramMap.subscribe((params) => {
      let ingrediente = params.get('ingrediente');
      console.log(ingrediente);
      this.IngredienteService.buscarIngrediente(ingrediente).subscribe((i: Ingrediente) => {
        this.ingrediente = i;
        console.log(this.ingrediente);
      })
    })}

    volver() {
      console.log('Hola');
      history.back()
    }
   
  }
  
