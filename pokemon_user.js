let gachaDone = false;

async function fetchRandomPokemon() {
  if (gachaDone) {
    alert("You can only gacha once!");
    return;
  }

  //Fungsi untuk clear hasil gacha sebelumnya
  const pokemonContainer = document.getElementById("pokemon-container");
  pokemonContainer.innerHTML = "";

  try {
    const totalPokemon = 1008;
    const randomPokemonPromises = [];

    for (let i = 0; i < 5; i++) {
      const randomId = Math.floor(Math.random() * totalPokemon) + 1;
      const pokemonPromise = fetch(
        `https://pokeapi.co/api/v2/pokemon/${randomId}`
      ).then((response) => response.json());
      randomPokemonPromises.push(pokemonPromise);
    }

    const randomPokemons = await Promise.all(randomPokemonPromises);
    randomPokemons.forEach((pokemon) => {
      displayPokemon(pokemon);
    });

    // Fungsi membatasi gacha
    gachaDone = true;
    document.getElementById("gachaButton").classList.add("disabled");
    document.getElementById("gachaButton").disabled = true;
  } catch (error) {
    console.error("Error fetching Pokémon:", error);
  }
}

function displayPokemon(pokemon) {
  const pokemonContainer = document.getElementById("pokemon-container");
  const pokemonElement = document.createElement("div");
  pokemonElement.classList.add("card");

  pokemonElement.innerHTML = `
                <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
                <div class="card-name">${pokemon.name}</div>
            `;

  pokemonContainer.appendChild(pokemonElement);
}

function logout() {
  localStorage.removeItem("loggedInUser");
  window.location.href = "login.html";
}
