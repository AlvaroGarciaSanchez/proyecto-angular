import { Component } from '@angular/core';

@Component({
  selector: 'app-pokedex',
  standalone: true,
  imports: [],
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.css'
})
export class PokedexComponent {
//   const pokemonContainer = document.getElementById("pokemon-container");
// const spinner = document.getElementById("spinner");
// const previous = document.getElementById("previous");
// const next = document.getElementById("next");

// let limit: number = 8;
// let offset: number = 1;

// if (pokemonContainer && spinner && previous && next) {
//   previous.addEventListener("click", () => {
//     if (offset !== 1) {
//       offset -= 9;
//       removeChildNodes(pokemonContainer);
//       fetchPokemons(offset, limit);
//     }
//   });

//   next.addEventListener("click", () => {
//     offset += 9;
//     removeChildNodes(pokemonContainer);
//     fetchPokemons(offset, limit);
//   });
// } else {
//   console.error("One or more elements could not be found.");
// }

// function fetchPokemon(id: number): void {
//   fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
//     .then((res) => res.json())
//     .then((data) => {
//       createPokemon(data);
//       if (spinner) spinner.style.display = "none";
//     });
// }

// function fetchPokemons(offset: number, limit: number): void {
//   if (spinner) spinner.style.display = "block";
//   for (let i = offset; i <= offset + limit; i++) {
//     fetchPokemon(i);
//   }
// }

// function createPokemon(pokemon: any): void {
//   const flipCard = document.createElement("div");
//   flipCard.classList.add("flip-card");

//   const cardContainer = document.createElement("div");
//   cardContainer.classList.add("card-container");

//   flipCard.appendChild(cardContainer);

//   const card = document.createElement("div");
//   card.classList.add("pokemon-block");

//   const spriteContainer = document.createElement("div");
//   spriteContainer.classList.add("img-container");

//   const sprite = document.createElement("img");
//   sprite.src = pokemon.sprites.other.showdown.front_default;

//   spriteContainer.appendChild(sprite);

//   const number = document.createElement("p");
//   number.textContent = `#${pokemon.id.toString().padStart(3, "0")}`;

//   const name = document.createElement("p");
//   name.classList.add("name");
//   name.textContent = pokemon.name;

//   card.appendChild(spriteContainer);
//   card.appendChild(number);
//   card.appendChild(name);

//   const cardBack = document.createElement("div");
//   cardBack.classList.add("pokemon-block-back");

//   cardBack.appendChild(progressBars(pokemon.stats));

//   cardContainer.appendChild(card);
//   cardContainer.appendChild(cardBack);
//   pokemonContainer.appendChild(flipCard);
// }

// function progressBars(stats: any[]): HTMLElement {
//   const statsContainer = document.createElement("div");
//   statsContainer.classList.add("stats-container");

//   for (let i = 0; i < 3; i++) {
//     const stat = stats[i];

//     const statPercent = stat.base_stat / 2 + "%";
//     const statContainer = document.createElement("div");
//     statContainer.classList.add("stat-container");

//     const statName = document.createElement("p");
//     statName.textContent = stat.stat.name;

//     const progress = document.createElement("div");
//     progress.classList.add("progress");

//     const progressBar = document.createElement("div");
//     progressBar.classList.add("progress-bar");
//     progressBar.setAttribute("aria-valuenow", stat.base_stat.toString());
//     progressBar.setAttribute("aria-valuemin", "0");
//     progressBar.setAttribute("aria-valuemax", "200");
//     progressBar.style.width = statPercent;

//     progressBar.textContent = stat.base_stat.toString();

//     progress.appendChild(progressBar);
//     statContainer.appendChild(statName);
//     statContainer.appendChild(progress);

//     statsContainer.appendChild(statContainer);
//   }

//   return statsContainer;
// }

// function removeChildNodes(parent: HTMLElement): void {
//   while (parent.firstChild) {
//     parent.removeChild(parent.firstChild);
//   }
// }

// fetchPokemons(offset, limit);
}