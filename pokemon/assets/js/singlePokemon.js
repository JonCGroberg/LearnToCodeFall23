import { capitalize, convertDeciToFeet, convertHectoToLbs } from "./utils.js";

window.onload = () => {
  const singleContainer = document.getElementById("single-container");

  const urlParams = new URLSearchParams(location.search);
  const selectedPokemon = urlParams.get("name");
  const url =
    "https://pokemon-backend-dfea.onrender.com/api/pokemon/" + selectedPokemon;

  fetch(url)
    .then((res) => res.json())
    .then((pokemonData) => {
      console.log(pokemonData);
      singleContainer.innerHTML = addPokemon(pokemonData);
    });
};

function addPokemon(pokemonData) {
    return `<div class = "card">
              <h4>${capitalize(pokemonData.name)}</h4>
              <div>
                  <img class="img" src = "${
                    pokemonData.official_artwork_default
                  }">
                </div>
              <div class = "card-grid">

                <div>
                  <h4>Stats</h4>
                  <p> Height: ${convertDeciToFeet(pokemonData.height)} ft</p>
                  <p> Weight: ${convertHectoToLbs(pokemonData.weight)} lbs </p>
                </div>
                <div>
                  <h4>Types</h4>
                  <div>${pokemonData.types
                    .map((type) => `<p>${type}</p>`)
                    .join("")}</div>
                </div>
                <div>
                  <h4>Base Stats</h4>
                    <div>${Object.entries(pokemonData.base_stats)
                      .map(([stat, value]) => `<p>${stat}: ${value}</p>`)
                      .join("")}
                    </div>
                </div>
                <div>
                  <h4>Abilites</h4>
                  <div>${pokemonData.abilities
                    .map((ability) => `<p>${ability}</p>`)
                    .join("")}</div>
                </div>
              </div>
            <div>
              <h4>Moves</h4>
              <div  class ="moves-grid">${pokemonData.moves
                .map((move) => `<p>${move}</p>`)
                .join("")}</div>
              </div>
            </div>`;
  }