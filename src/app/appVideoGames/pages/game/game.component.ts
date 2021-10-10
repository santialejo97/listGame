import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { GamesService } from '../../../services/games.service';
import { Ofertas, Info, Precio  } from '../../../interfaces/videoGames-interfaces';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  id:string = "";
  cheapestPriceEver!: Precio;
  deals!: Ofertas[];
  info!: Info;
  fecha!: Date;
  
  constructor(private gameServices:GamesService, private route: ActivatedRoute, private routenav: Router) { }

  ngOnInit(): void {
    let logo = document.querySelector('#logo');
    if(this.routenav.url === '/app/game'){
      if(logo?.classList.contains('scroll')){
        logo?.classList.remove('scroll');
      }
    }
    this.route.params.pipe().subscribe(({id})=>this.id= id);
    this.gameServices.game(this.id).subscribe(resp => {
      this.cheapestPriceEver= resp.cheapestPriceEver;
      this.deals= resp.deals;
      this.info= resp.info;
      this.fecha = new Date(this.cheapestPriceEver.date * 1000);
    })
  }

}
