import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent {

  heroe:any = {};

  constructor( private activatedRoute:ActivatedRoute, private _heroeService:HeroesService) {
    this.activatedRoute.params.subscribe( params =>{
      this.heroe = this._heroeService.getHeroe(params['id']);
    });
  }


}
