import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import {AboutMe} from "./screens/AboutMe";
import {Initial} from "./screens/Initial";
import {Pokemon} from "./screens/Pokemon";
import {Pokemons} from "./screens/Pokemons";

const router = createBrowserRouter(
  [
    {
      element: <Initial/>,
      path: "/"
    },
    {
      element: <AboutMe/>,
      path: "/about-me",
    },
    {
      element: <Pokemons/>,
      path: "/pokemons",
    },
    {
      element: <Pokemon/>,
      path: "/pokemons/:pokemonName"
    }
  ]
);

function Application() {
  return <RouterProvider router={router}/>;
}

export default Application;
