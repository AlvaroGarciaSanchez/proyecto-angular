import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { PokedexComponent } from './pokedex/pokedex.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,PokedexComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'prueba_angular';
  constructor (private router: Router){

  }
  navigateToPokedex(){
    this.router.navigate(['/pokedex'])
  }
  navigateToBlog(){
    this.router.navigate(['/blog'])
  }
  navigateToContacts(){
    this.router.navigate(['/contacts'])
  }
  navigateToNosotros(){
    this.router.navigate(['/nosotros'])
  }
  navigateToInicio(){
    this.router.navigate(['/'])
  }
  
//    wrapper = document.querySelector('.wrapper');
//  loginLink = document.querySelector('.form-box login');
//  registerLink = document.querySelector('.form-box register');
//  btnPopup = document.querySelector('.btnLogin-popup');
//  iconClose = document.querySelector('.icon-close');



// //  mostrarFormularioRegistro(){
// //   console.log('inicio')
// //   this.loginLink?.classList.remove('hidden');
// //   console.log('remover')
// //   this.registerLink?.classList.add('active');
// //   console.log('añadir')
// // }


// realizarLogin(){
//   this.registerLink?.addEventListener('click', ()=> {
//     this.wrapper?.classList.add('active');
// });

// this.loginLink?.addEventListener('click', ()=> {
//     this.wrapper?.classList.remove('active');
// });

}


