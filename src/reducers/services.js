import { GET_SERVICES } from "../actions/index";
const initialState = {
  list: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_SERVICES:
      return {
        ...state,
        list: action.payload
      };
    default:
      return state;
  }
}
