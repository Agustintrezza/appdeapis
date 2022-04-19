import { Component, OnInit } from '@angular/core';
import { MarvelService } from '../../services/marvel.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-marvel',
  templateUrl: './marvel.component.html',
  styleUrls: ['./marvel.component.css']
})
export class MarvelComponent implements OnInit {

  constructor(private marvelService: MarvelService ) { }
  
  allCharacters: Observable<any> | undefined;

  ngOnInit(): void {
  }


  // getCharacters() {
  //   this.allCharacters = this.marvelService
  // }

}

