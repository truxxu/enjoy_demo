import { GET_SERVICES, GET_CITIES } from "../actions/index";
const initialState = {
  list: [],
  filters: {
    reserve: null,
    city: null,
    zone: null,
    is_sale: null,
    reserve_options: ['is_at_home','is_at_salon'],
  },
  cities: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_SERVICES:
      return {
        ...state,
        list: action.payload
      };
    case GET_CITIES:
      return {
        ...state,
        cities: action.payload
      };
    default:
      return state;
  }
}
