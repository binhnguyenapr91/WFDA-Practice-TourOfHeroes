import { from } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import {HEROES} from '../mock-heros';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',

})
export class HeroesComponent implements OnInit {
  heroes = HEROES;
  selectedHero : Hero;
  hero:Hero;

  setName(value){
    this.selectedHero.name = value;
  }

  selectHero(hero):void{
    this.selectedHero = hero;
  }
  constructor() { }

  ngOnInit(): void {
  }
}
