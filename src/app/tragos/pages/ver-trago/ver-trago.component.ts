import { Component, OnInit } from '@angular/core';
import { TragosService } from '../../services/tragos.service';
import { Trago } from '../../model/trago';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ver-trago',
  templateUrl: './ver-trago.component.html',
  styleUrls: ['./ver-trago.component.css'],
})
export class VerTragoComponent implements OnInit {
  // id: any;
  trago: Trago = new Trago();
  constructor(
    private tragosService: TragosService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {

    console.log(this.trago);

    this.activatedRoute.paramMap.subscribe((params) => {
      let id = params.get('id');
      console.log(id);
      this.tragosService.buscarPorId(id).subscribe((t: Trago) => {
        this.trago = t;
        console.log(this.trago);
      });
    });
  }
  VerTrago() {
    console.log('Agus');
  }
}
