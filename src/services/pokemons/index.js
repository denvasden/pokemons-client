import httpService from "../http";

const baseURL = "https://pokeapi.co/api/v2";
const pokemonURL = `${baseURL}/pokemon`;

async function getPokemonByName(name) {
  try {
    const response = await httpService.get(`${pokemonURL}/${name}`);

    return {
      abilities: response.data.abilities,
      imageBack: response.data.sprites.back_default,
      imageFront: response.data.sprites.front_default,
      moves: response.data.moves,
      stats: response.data.stats,
    };
  } catch (error) {
    throw new Error(error);
  }
}

async function getPokemons(url = pokemonURL) {
  try {
    const response = await httpService.get(url);

    return {
      count: response.data.count,
      data: response.data.results,
      nextPageURL: response.data.next,
      previousPageURL: response.data.previous
    };
  } catch (error) {
    throw new Error(error);
  }
}

async function getPokemonsInformation(url = pokemonURL) {
  try {
    const pokemons = await getPokemons(url);
    const responses = await Promise
      .all(
        pokemons
          .data
          .map((item) => httpService.get(item.url))
      );
    const data = responses
      .map((response) => (
        {
          abilities: response.data.abilities,
          height: response.data.height,
          imageBack: response.data.sprites.back_default,
          imageFront: response.data.sprites.front_default,
          moves: response.data.moves,
          name: response.data.name,
          stats: response.data.stats,
          types: response.data.types,
          weight: response.data.weight,
        }
      ));

    return {
      count: pokemons.count,
      data,
      nextPageURL: pokemons.nextPageURL,
      previousPageURL: pokemons.previousPageURL,
    };
  } catch (error) {
    throw new Error(error);
  }
}

export {
  getPokemonByName,
  getPokemons,
  getPokemonsInformation
};
