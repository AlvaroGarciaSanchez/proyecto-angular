import { Routes } from '@angular/router';
import { PokedexComponent } from './pokedex/pokedex.component';
import {LoginComponent} from "./formulario/login/login.component";
import {RegisterComponent} from "./formulario/register/register.component";
import {InicioComponent} from "./inicio/inicio.component";


export const routes: Routes = [
    {path: ' ',
      redirectTo: 'inicio',
      pathMatch: 'full'
    },
    {
      path: 'inicio',
      component: InicioComponent,
    },
    {path: 'pokedex',
      component: PokedexComponent
    },
    {path: "login",
    component:LoginComponent
    },
    {path: "register",
    component:RegisterComponent
    },
    {path: '**',
      redirectTo: "inicio",
      pathMatch: 'full'
    }
];
export class AppRoutingModule{

}
