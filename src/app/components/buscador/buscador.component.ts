import { Component, OnInit, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {
  heroes:any[] = [];
  termino:any;
  
  constructor( private activatedRoute:ActivatedRoute, private _heroes:HeroesService ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.heroes = this._heroes.buscarHeroe(params['palabra']);
      this.termino = params['palabra'];
    });
  }

}
