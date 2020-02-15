
import { GET_RESERVES } from "../actions/index";

const initialState =  {
  reservesList: []
};

export default function(state = initialState, action) {
    switch (action.type) {
      case GET_RESERVES:
        return {
          ...state,
          reservesList: action.payload
        };
      default:
        return state;
    }
  }
