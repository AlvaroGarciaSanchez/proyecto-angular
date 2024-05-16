import { Component } from '@angular/core';
import {Router, RouterLink, RouterLinkActive} from '@angular/router';
import { PokedexComponent } from '../pokedex/pokedex.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [PokedexComponent, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor (private router: Router){

  }

}
