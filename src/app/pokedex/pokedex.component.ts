import { Component } from '@angular/core';

@Component({
  selector: 'app-pokedex',
  standalone: true,
  imports: [],
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.css'
})
export class PokedexComponent {

}
const listaPokemon = document.querySelector<HTMLDivElement>("#listaPokemon");
const botonesHeader = document.querySelectorAll<HTMLButtonElement>(".btn-header");
const url = "https://pokeapi.co/api/v2/pokemon/";

for (let i = 1; i <= 151; i++) {
  fetch(url + i)
    .then((response) => response.json())
    .then((data: any) => mostrarPokemon(data));
}

function mostrarPokemon(poke: any) {
  let tipos = poke.types.map((type: any) => `<p class="${type.type.name} tipo">${type.type.name}</p>`);
  tipos = tipos.join('');

  let pokeId = poke.id.toString();
  if (pokeId.length === 1) {
    pokeId = "00" + pokeId;
  } else if (pokeId.length === 2) {
    pokeId = "0" + pokeId;
  }

  const div = document.createElement("div");
  div.classList.add("pokemon");
  div.innerHTML = `
        <p class="pokemon-id-back">#${pokeId}</p>
        <div class="pokemon-imagen">
            <img src="${poke.sprites.other["official-artwork"].front_default}" alt="${poke.name}">
        </div>
        <div class="pokemon-info">
            <div class="nombre-contenedor">
                <p class="pokemon-id">#${pokeId}</p>
                <h2 class="pokemon-nombre">${poke.name}</h2>
            </div>
            <div class="pokemon-tipos">
                ${tipos}
            </div>
            <div class="pokemon-stats">
                <p class="stat">${poke.height}m</p>
                <p class="stat">${poke.weight}kg</p>
            </div>
        </div>
    `;
  listaPokemon?.append(div);
}

botonesHeader.forEach(boton => boton.addEventListener("click", (event) => {
  const botonId = (event.currentTarget as HTMLButtonElement).id;

  // @ts-ignore
  listaPokemon.innerHTML="";

  for (let i = 1; i <= 151; i++) {
    fetch(url + i)
      .then((response) => response.json())
      .then((data: any) => {

        if(botonId === "ver-todos") {
          mostrarPokemon(data);
        } else {
          const tipos = data.types.map((type: any) => type.type.name);
          if (tipos.some((tipo: string) => tipo.includes(botonId))) {
            mostrarPokemon(data);
          }
        }

      });
  }
}));
