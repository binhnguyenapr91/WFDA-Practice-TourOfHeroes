import { MessageService } from './../message.service';
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


  getHeros():void{
    this.heroService.getHeros().subscribe(heroes => this.heroes = heroes);
  }
  constructor(private heroService : HeroService, private messageService : MessageService) {
    
   }

  ngOnInit(): void {
    this.getHeros();
  }
}
