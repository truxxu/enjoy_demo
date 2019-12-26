import { ADD_FAVORITE_SERVICE, GET_FAVORITES } from "../actions/index";

const initialState =  { 
  favoritesList: []
};

export default function(state = initialState, action) {
    switch (action.type) {
      case ADD_FAVORITE_SERVICE:
        return {
          ...state
        };
      case GET_FAVORITES:
        return {
          ...state,
          favoritesList: action.payload
        };
      default:
        return state;
    }
  }
  