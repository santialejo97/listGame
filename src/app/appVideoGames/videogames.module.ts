import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { VideogamesRoutingModule } from './videogames-routing.module';
import { ListgamesComponent } from './pages/listgames/listgames.component';
import { GameComponent } from './pages/game/game.component';
import { HeaderComponent } from './pages/components/header/header.component';
import { FormsModule } from '@angular/forms';






@NgModule({
  declarations: [
    ListgamesComponent,
    GameComponent,
    HeaderComponent

  ],
  imports: [
    CommonModule,
    VideogamesRoutingModule,
    FormsModule
  ]
})
export class VideogamesModule { }
