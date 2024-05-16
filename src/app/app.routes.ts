import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PokedexComponent } from './pokedex/pokedex.component';

export const routes: Routes = [
    {'path': ' ', redirectTo: 'inicio',pathMatch: 'full'},
    {path: 'pokedex', component: PokedexComponent},
    {path: '**',pathMatch: 'full',redirectTo: ''}
];
export class AppRoutingModule{

}