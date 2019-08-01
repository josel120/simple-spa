import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor( private _router:Router ) { }

  ngOnInit() {
  }

  buscarHeroe(palabra){
    this._router.navigate(['/buscador',palabra]);
  }
  
}
