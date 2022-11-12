import {pokemonsService} from "../../../services";

const initialState = {
  count: null,
  data: null,
  loading: false,
  nextPageURL: null,
  previousPageURL: null

};

function pokemonsReducer(state = initialState, action) {
  switch (action.type) {
    case "fetchPokemonsRequest": {
      return {
        ...initialState,
        loading: true,
      };
    }

    case "fetchPokemonsSuccess": {
      return {
        ...state,
        count: action.payload.count,
        data: action.payload.data,
        loading: false,
        nextPageURL: action.payload.nextPageURL,
        previousPageURL: action.payload.previousPageURL,
      };
    }

    default: {
      return state;
    }
  }
}

function fetchPokemons() {
  return async function (dispatch) {
    dispatch(fetchPokemonsRequest());

    try {
      const pokemonsInformation = await pokemonsService.getPokemonsInformation();

      dispatch(fetchPokemonsSuccess(pokemonsInformation));
    } catch (error) {
      throw new Error(error);
    }
  };
}

function fetchPokemonsRequest() {
  return {
    type: "fetchPokemonsRequest"
  };
}

function fetchPokemonsSuccess(data) {
  return {
    payload: data,
    type: "fetchPokemonsSuccess"
  };
}

export {fetchPokemons, pokemonsReducer};
