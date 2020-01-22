import {
  ADD_TO_BOOKINGS,
  REMOVE_FROM_BOOKINGS,
  SHOW_FORM
} from "../actions/index";

const initialState =  {
    list: [],
    total: 0,
    show: false,
};

export default function(state = initialState, action) {
    switch (action.type) {
      case ADD_TO_BOOKINGS:
        return {
          ...state,
          list: [...state.list, action.payload]
        };
      case REMOVE_FROM_BOOKINGS:
        return {
          ...state,
          list: state.list.filter(item => item.id !== action.payload.id),
        };
      case SHOW_FORM:
        return {
          ...state,
          show: action.payload,
        };
      default:
        return state;
    }
}
