import { ADD_FAVORITE_SERVICE } from "../actions/index";

const initialState =  { 
  
};

export default function(state = initialState, action) {
    switch (action.type) {
      case ADD_FAVORITE_SERVICE:
        return {
          ...state
        };
      default:
        return state;
    }
  }
  