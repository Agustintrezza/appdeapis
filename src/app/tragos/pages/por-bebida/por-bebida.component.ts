import { Component, OnInit } from '@angular/core';
import { ChukService } from '../../services/chuk.service';
import { Chuk } from '../../model/chuk';

@Component({
  selector: 'app-por-bebida',
  templateUrl: './por-bebida.component.html',
  styleUrls: ['./por-bebida.component.css']
})
export class PorBebidaComponent implements OnInit {

  termino: string = '';
  chuk : Chuk[] = [];
  categorias : any;
  chiste: Chuk = new Chuk();


  constructor(private chukService: ChukService) { }

  ngOnInit(): void {
    let chuck = this.obtenerLocalStorage('chuck')
    if (chuck) {
      this.chuk = chuck;
      console.log(chuck);
      console.log(this.chuk);
    }

    this.chukService.buscarCategoriasChuk().subscribe((categorias : any) => {
      this.categorias = categorias;
      this.buscarPorCategoria(this.categorias[0]);
    })
  }

  buscarPorCategoria( categoria: string) {
    this.chukService.buscarPorCategoria(categoria).subscribe((chiste : Chuk) => {
      this.chiste = chiste;
    })
  }

  buscarPorCategoriaEvent(event : any) {
    this.buscarPorCategoria(event.target.value);
  }



  buscarChuck() {
    console.log('Hola');
    this.chukService
      .terminoChuk(this.termino)
      .subscribe((chuk : Chuk[])=> {
        this.chuk = chuk;
        console.log(chuk);
        this.guardarLocalStorage('chuck', this.chuk)
      })
  }


  guardarLocalStorage(key: string, elemento: any) {
    localStorage.setItem(key, JSON.stringify(elemento));
  }

  obtenerLocalStorage(key: string) {
    return JSON.parse(localStorage.getItem(key) || '{}');
  }
}


