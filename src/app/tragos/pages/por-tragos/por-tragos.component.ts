import { Component, OnInit } from '@angular/core';
import { TragosService } from '../../services/tragos.service';
import { Trago } from '../../model/trago';


@Component({
  selector: 'app-por-tragos',
  templateUrl: './por-tragos.component.html',
  styleUrls: ['./por-tragos.component.css'],
})
export class PorTragosComponent implements OnInit {
  termino: string = '';
  hayError: boolean = false;
  tragos: Trago[] = [];
  // global: any;
  // http: any;
  idDrink: number = 0;

  constructor(private tragosService: TragosService) {}
  
  
  ngOnInit(): void {
    let tragosh = this.obtenerLocalStorage('tragosh')
    if (tragosh) {
      this.tragos = tragosh;
      console.log(tragosh);
      console.log(this.tragos);
    }
  }

  buscar() {
    this.hayError = false;
    console.log(this.termino);

    this.tragosService
      .buscarTrago(this.termino)
      .subscribe((tragos: Trago[]) => {
        this.tragos = tragos;
        console.log(tragos);
        this.guardarLocalStorage('tragosh', this.tragos)

        if (!tragos || tragos.length == 0) {
          this.hayError = true;
        } else {
          console.log(tragos);
        }
        tragos[0].myFuncion()
      });
  }
  obtenerIngredientes( trago : Trago ) {
    return trago.idDrink + ", " + trago.strIngredient1 + ", " + trago.strIngredient2 + ", " + trago.strIngredient3 + ", " + trago.strIngredient4 + ", " + trago.strIngredient5;
  }

  guardarLocalStorage(key: string, elemento: any) {
    localStorage.setItem(key, JSON.stringify(elemento));
  }

  obtenerLocalStorage(key: string) {
    return JSON.parse(localStorage.getItem(key) || '{}');
  }

  // agregarAlArrayTragos(resultado : any) {
  //   this.tragos.push(resultado);
  // }
}