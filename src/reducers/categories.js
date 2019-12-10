import { GET_CATEGORIES, SET_CATEGORY } from "../actions/index";
const initialState = {
  list: [],
  activeItem: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        list: action.payload
      };
    case SET_CATEGORY:
      return {
        ...state,
        activeItem: action.payload
      };
    default:
      return state;
  }
}
