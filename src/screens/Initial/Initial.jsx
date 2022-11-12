import {Link} from "react-router-dom";

import "./initial.scss";

function Initial() {
  return (
    <section className="initial">
      <header></header>

      <main>
        <ul className="unordered-list">
          <li className="unordered-list__item">
            <Link to="about-me">About me</Link>
          </li>

          <li className="unordered-list__item">
            <Link to="pokemons">Pokemons</Link>
          </li>
        </ul>
      </main>

      <footer></footer>
    </section>
  );
}

export default Initial;
