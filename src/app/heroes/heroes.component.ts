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
  hero : Hero = {
    id:1,
    name:"Gerrard"
  };

  setName(value){
    this.hero.name = value;
  }
  constructor() { }

  ngOnInit(): void {
  }
}
