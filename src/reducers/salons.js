import { GET_SALON } from "../actions/index";

const initialState = {
  activeItem: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_SALON:
      return {
        ...state,
        activeItem: action.payload
      };

    default:
      return state;
  }
}
