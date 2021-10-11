import { Component} from '@angular/core';

import { GamesService } from '../../../services/games.service';
import { game } from '../../../interfaces/videoGames-interfaces';
import { flatten } from '@angular/compiler';


@Component({
  selector: 'app-listgames',
  templateUrl: './listgames.component.html',
  styleUrls: ['./listgames.component.scss']
})
export class ListgamesComponent  {

  listGame !:game[];
  errorLista!:boolean ;
  termino: string= '';
  inicio:boolean = true;
  constructor() {}


  buscar(list:game[]){
    this.inicio = false;
    this.listGame= list;
  }

  campoValidar(error:boolean){
    this.inicio = false;
    this.errorLista= error
  }

  campoBuscado(termino:string){
    this.termino = termino
  }

}
