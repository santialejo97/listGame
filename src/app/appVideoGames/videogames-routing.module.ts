import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListgamesComponent } from './pages/listgames/listgames.component';
import { GameComponent } from './pages/game/game.component';


const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:'listGames',
        component: ListgamesComponent
      },
      {
        path:'games/:id',
        component:GameComponent
      },
      {
        path:'**',
        redirectTo:'listGames'
      }

    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideogamesRoutingModule { }
