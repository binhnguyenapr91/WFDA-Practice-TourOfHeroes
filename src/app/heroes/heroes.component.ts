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
    name:"England FC",
    position: 'CM',
    image: './assets/resources/images/gerrard.png'
  };

  setName(value){
    this.hero.name = value;
  }
  constructor() { }

  ngOnInit(): void {
  }
}
