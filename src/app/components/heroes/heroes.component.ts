import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from 'src/app/services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes:Heroe[] = [];

  constructor(private _heroesService:HeroesService, private router:Router ) { 
    console.log(" servicio se puede usar!");
  }

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
  }
  verHeroe(i:number){
    this.router.navigate(['heroe', i]);
  }
}
