import { capitalize, convertDeciToFeet, convertHectoToLbs } from "./utils.js";

let decimalPlace = 2;

window.onload = () => {
    addTypeFilterIcons();
    getAllPokemonList();
};

const addTypeFilterIcons = () => {
    let typesContainer = document.getElementById("search-sort-filter-container");
    let listEl = document.getElementById("list");

    let types = [
        {
            name: "all",
            hoverBackgroundColor: "lightGray",
            iconPath: "assets/images/icons/fire.png",
        },
        {
            name: "fire",
            hoverBackgroundColor: "red",
            iconPath: "assets/images/icons/fire.png",
        },
        {
            name: "grass",
            hoverBackgroundColor: "lightGreen",
            iconPath: "assets/images/icons/grass.png",
        },
        {
            name: "electric",
            hoverBackgroundColor: "yellow",
            iconPath: "assets/images/icons/electric.png",
        },
        {
            name: "water",
            hoverBackgroundColor: "blue",
            iconPath: "assets/images/icons/water.png",
        },
        {
            name: "bug",
            hoverBackgroundColor: "green",
            iconPath: "assets/images/icons/bug.png",
        },
    ];

    for (let type of types) {
        let iconContainerEl = document.createElement("div");
        iconContainerEl.className = "icon-container " + type.name;

        iconContainerEl.onmouseover = () => {
            iconContainerEl.style.backgroundColor = type.hoverBackgroundColor;
        };

        iconContainerEl.onmouseleave = () => {
            iconContainerEl.style.backgroundColor = "white";
        };

        iconContainerEl.onclick = () => {
            let currentActiveEl = document.querySelector(".active");
            if (currentActiveEl) {
                currentActiveEl.classList.remove("active");
            }
            iconContainerEl.classList.add("active");

            // Erase all pokemon
            listEl.innerHTML = "";
            // Add pokemon that match currently selected type
            getPokemonListByType(type.name);
        };

        iconContainerEl.innerHTML = `
            <img src=${type.iconPath} alt="fire type" />
            <div>${capitalize(type.name)}</div>
        `;

        typesContainer.appendChild(iconContainerEl);
    }
};

let getPokemonListByType = (type) => {
    if (type === "all") {
        getAllPokemonList();
    } else {
        // Get pokemon by type
        fetch(`https://pokemon-backend-dfea.onrender.com/api/pokemon?type=${type}`)
            .then((res) => res.json())
            .then((pokemonList) => {
                displayPokemonDetails(pokemonList);
            });
    }
};

let getAllPokemonList = () => {
    // Get all pokemon
    fetch("https://pokemon-backend-dfea.onrender.com/api/pokemon?sort=asc")
        .then((res) => res.json())
        .then((pokemonList) => {
            displayPokemonDetails(pokemonList);
        });
};

let displayPokemonDetails = (pokemonList) => {
    let listEl = document.getElementById("list");
    for (let pokeDetails of pokemonList) {
        let typeStrArr = pokeDetails.types.map((typeName) => capitalize(typeName));
        let cardDiv = document.createElement("div");
        cardDiv.className = "card";

        cardDiv.onclick = () => {
            window.location.href = "singlePokemon.html?name=" + pokeDetails.name;
        };

        cardDiv.innerHTML = `<div
                            class="thumbnail"
                            style="
                                background-image: url(${pokeDetails.official_artwork_default});
                            "
                        ></div>
                        <div class="details">
                            <div>Name: ${capitalize(pokeDetails.name)}</div>
                            <div>Type: ${typeStrArr.join(", ")}</div>
                            <div>Height: ${convertDeciToFeet(pokeDetails.height)} ${
            pokeDetails.height === 1 ? "Foot" : "Feet"
        }</div>
                            <div>Weight: ${convertHectoToLbs(pokeDetails.weight)} lb(s)</div>
                        </div>`;
        listEl.appendChild(cardDiv);
    }
};
