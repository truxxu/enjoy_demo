import { GET_SERVICES, GET_CITIES, UPDATE_FILTERS } from "../actions/index";
const initialState = {
  list: [],
  filters: {
    reserve: '',
    city: '',
    zone: '',
    is_sale: '',
    // reserve_options: ['is_at_home','is_at_salon'],
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
    case UPDATE_FILTERS:
      console.log(action.payload)
      return {
        ...state,
        filters: {
          reserve: action.payload.reserve,
          city: action.payload.city,
          zone: action.payload.zone,
          is_sale: action.payload.is_sale,
        }
      }
    default:
      return state;
  }
}
