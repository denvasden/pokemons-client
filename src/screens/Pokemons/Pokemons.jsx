import {createSelector} from "reselect";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {fetchPokemons} from "./redux";

import "./pokemons.scss";

const pokemonsSelector = (state) => state.pokemons;
const countSelector = createSelector(pokemonsSelector, (pokemons) => pokemons.count);
const loadingSelector = createSelector(pokemonsSelector, (pokemons) => pokemons.loading);
const pokemonsInformationSelector = createSelector(pokemonsSelector, (pokemons) => pokemons.data);

function Pokemons() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const count = useSelector(countSelector);
  const loading = useSelector(loadingSelector);
  const pokemonsInformation = useSelector(pokemonsInformationSelector);

  useEffect(() => {
    dispatch(fetchPokemons());
  }, []);

  function handlePokemonClick(name) {
    navigate(`/pokemons/${name}`);
  }

  return !loading && pokemonsInformation ? (
    <section className="pokemons">
      <header className="pokemons__header">
        <h1>Pokemons</h1>
      </header>

      <main className="pokemons__main">
        <table className="pokemons__table">
          <thead>
            <tr>
              <th>#</th>

              <th>Image</th>

              <th>Name</th>

              <th>Height</th>

              <th>Weight</th>

              <th>Type</th>
            </tr>
          </thead>

          <tbody>
            {
              pokemonsInformation
                .map((pokemon, index) => (
                  <tr className="" key={pokemon.name} onClick={handlePokemonClick.bind(null, pokemon.name)}>
                    <td>{index + 1}</td>

                    <td>
                      <img alt="Pokemon image" src={pokemon.imageFront}/>
                    </td>

                    <td>{pokemon.name}</td>

                    <td>{pokemon.height}</td>

                    <td>{pokemon.weight}</td>

                    <td>{pokemon.types.map((type) => type.type.name).join(", ")}</td>
                  </tr>
                ))
            }
          </tbody>

          <tfoot>
            <tr>
              <td colSpan="6" style={{textAlign: "right"}}>
                <strong>Count: {count}
                </strong>
              </td>
            </tr>
          </tfoot>
        </table>
      </main>

      <footer></footer>
    </section>
  ) : null;
}

export default Pokemons;
