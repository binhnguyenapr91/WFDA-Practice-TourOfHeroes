import { HeroService } from './../hero.service';
import { from } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',

})
export class HeroesComponent implements OnInit {
  heroes : Hero[];
  selectedHero : Hero;
  hero:Hero;

  setName(value){
    this.selectedHero.name = value;
  }

  getHeros():void{
    this.heroService.getHeros().subscribe(heroes => this.heroes = heroes);
  }
  selectHero(hero):void{
    this.selectedHero = hero;
  }
  constructor(private heroService : HeroService) {
    
   }

  ngOnInit(): void {
    this.getHeros();
  }
}
