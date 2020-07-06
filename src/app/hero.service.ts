import { HEROES } from './mock-heros';
import { Hero } from './hero';
import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  getHeros() : Observable <Hero[]> {
    this.messageService.add("Hero Service: All heroes fetched");
    return of(HEROES);
  }
  constructor(private messageService : MessageService) { }

  getHero(id: number): Observable<Hero>{
    this.messageService.add(`Hero service: get Hero id = ${id}`);
    return of(HEROES.find(hero =>hero.id === id))
  }
}
