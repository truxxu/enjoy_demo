import {
  ADD_TO_BOOKINGS,
  REMOVE_FROM_BOOKINGS,
  SHOW_FORM,
  CLEAN_BOOKINGS
} from "../actions/index";

const initialState =  {
    list: [],
    total: 0,
    duration: 0,
    show: false,
};

export default function(state = initialState, action) {
    switch (action.type) {
      case ADD_TO_BOOKINGS:
        return {
          ...state,
          list: [...state.list, action.payload.data],
          total: action.payload.total,
          duration: action.payload.duration,
        };
      case REMOVE_FROM_BOOKINGS:
        return {
          ...state,
          list: state.list.filter(item => item.id !== action.payload.data.id),
          total: action.payload.total,
          duration: action.payload.duration,
        };
      case SHOW_FORM:
        return {
          ...state,
          show: action.payload,
        };
      case CLEAN_BOOKINGS:
        return {
          ...state,
          list: action.payload,
          total: 0,
          duration: 0
        };
      default:
        return state;
    }
}
