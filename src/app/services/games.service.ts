import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { GameUnico, game } from '../interfaces/videoGames-interfaces';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  private url :string = environment.urlApi;
  constructor(private http: HttpClient) { }


  listaGames(game :string): Observable<game[]>{

    const params = new HttpParams()
    .set('title', game)
    .set('limit', '10')
    return this.http.get<game[]>(this.url,{params})
  }

  game(id:string):Observable<GameUnico>{
    const params = new HttpParams()
    .set('id', id);
    return this.http.get<GameUnico>(this.url,{params})
  }

}
