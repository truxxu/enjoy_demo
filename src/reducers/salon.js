import { GET_SALON } from "../actions/index";

const initialState = {
  salon: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_SALON:
      return {
        ...state,
        salon: action.payload
      };

    default:
      return state;
  }
}
