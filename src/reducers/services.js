import {
  GET_SERVICES,
  GET_CITIES,
  UPDATE_FILTERS,
  GET_SALON_SERVICES
} from "../actions/index";

const initialState = {
  list: [],
  filters: {
    reserve: "",
    city: "",
    zone: "",
    salon: "",
    sub_category: "",
    is_sale: false,
    reserve_options: ["is_at_home", "is_at_salon"],
    cities: []
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_SERVICES:
      return {
        ...state,
        list: action.payload
      };
    case GET_CITIES:
      return Object.assign({}, state, {
        filters: Object.assign({}, state.filters, { cities: action.payload })
      });
    case UPDATE_FILTERS:
      return Object.assign({}, state, {
        filters: Object.assign({}, state.filters, action.payload)
      });
    case GET_SALON_SERVICES:
      return {
        ...state,
        list: action.payload
      };
    default:
      return state;
  }
}
