import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";

import {pokemonsService} from "../../services";
import {DescriptionDetails, DescriptionList, DescriptionTerm} from "../../components/DescriptionList";

import "./pokemon.scss";

function Pokemon() {
  const params = useParams();
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    fetchData();

    async function fetchData() {
      const pokemon = await pokemonsService.getPokemonByName(params.pokemonName);

      console.log("**** Pokemon > useEffect() > fetchData() > pokemon:", pokemon);

      setPokemon(pokemon);
    }
  }, []);

  console.log("**** Pokemon > pokemon:", pokemon);

  return pokemon ? (
    <section className="pokemon">
      <header className="pokemon__header">
        <h1 className="pokemon__name">{params.pokemonName}</h1>
      </header>

      <main className="pokemon__main">
        <div className="pokemon__images">
          {pokemon.imageFront ?
            <img alt="Pokemon front image" className="pokemon__image" src={pokemon.imageFront}/> : null}

          {pokemon.imageBack ?
            <img alt="Pokemon back image" className="pokemon__image" src={pokemon.imageBack}/> : null}
        </div>

        <div className="pokemon__details">
          <DescriptionList className="pokemon__description-list">
            <DescriptionTerm>Abilities:</DescriptionTerm>

            {
              pokemon
                .abilities
                .map(({ability}) => (
                  <DescriptionDetails key={ability.name}>
                    <Link to={`/abilities/${ability.name}`}>
                      {ability.name}
                    </Link>
                  </DescriptionDetails>
                ))
            }
          </DescriptionList>

          <DescriptionList className="pokemon__description-list">
            <DescriptionTerm>Moves:</DescriptionTerm>

            {
              pokemon
                .moves
                .map(({move}) => (
                  <DescriptionDetails key={move.name}>
                    <Link to={`/moves/${move.name}`}>
                      {move.name}
                    </Link>
                  </DescriptionDetails>
                ))
            }
          </DescriptionList>

          <DescriptionList className="pokemon__description-list">
            <DescriptionTerm>Stats:</DescriptionTerm>

            {
              pokemon
                .stats
                .map(({stat}) => (
                  <DescriptionDetails key={stat.name}>
                    <Link to={`/stats/${stat.name}`}>
                      {stat.name}
                    </Link>
                  </DescriptionDetails>
                ))
            }
          </DescriptionList>
        </div>
      </main>

      <footer></footer>
    </section>
  ) : null;
}

export default Pokemon;
