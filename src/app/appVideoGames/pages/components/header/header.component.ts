import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { game } from 'src/app/interfaces/videoGames-interfaces';
import { GamesService } from 'src/app/services/games.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  {


  @Output() list  : EventEmitter<game[]> = new EventEmitter();
  @Output() errorEnvio  : EventEmitter<boolean> = new EventEmitter();
  @Output() terminoEnvio  : EventEmitter<string> = new EventEmitter();
  
  listGames:game[] =[];
  termino: string = '';
  error: boolean = false;

  @HostListener("window:scroll",['$event'])scrollHeader($event:Event){
    let logo = document.querySelector('#logo');
    
    if(logo?.classList.contains('scroll')){
        logo?.classList.remove('scroll');
      
    }
    logo?.classList.add('scroll');

  }

  constructor(private gameServices:GamesService, private route: Router) {}

  buscar(){
    this.gameServices.listaGames(this.termino).subscribe((resp) => {
      
      if(!resp.length){
        this.validarCampo()
        return
      }
      this.listGames = resp;
      this.list.emit(this.listGames);
      this.error= false;
      this.errorEnvio.emit(this.error);
      this.termino = '';
    })
  }
  
  validarCampo(){
  this.terminoEnvio.emit(`juego ${this.termino} no encontrado`);
   this.termino = '';
   this.error = true;
   this.errorEnvio.emit(this.error);
  }

}
