import thunk from "redux-thunk";
import {createStore, combineReducers, applyMiddleware} from "redux";

import {pokemonsReducer} from "../screens/Pokemons/redux";

const reducers = {
  pokemons: pokemonsReducer
};

const combinedReducers = combineReducers(reducers);
const store = createStore(combinedReducers, applyMiddleware(thunk));

export default store;
