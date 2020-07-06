import { HEROES } from './mock-heros';
import { Hero } from './hero';
import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  getHeros() : Observable <Hero[]> {
    return of(HEROES);
  }
  constructor() { }
}
