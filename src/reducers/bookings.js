import { ADD_TO_BOOKINGS, REMOVE_FROM_BOOKINGS } from "../actions/index";

const initialState =  {
    list: [],
    total: 0
};

export default function(state = initialState, action) {
    switch (action.type) {
      case ADD_TO_BOOKINGS:
        return {
          ...state,
          list: state.list.concat(action.payload.id_service),
          total: state.total + parseInt(action.payload.price)
        };
      case REMOVE_FROM_BOOKINGS:
        return {
          ...state,
          list: state.list.filter(item => item !== action.payload.id_service),
          total: state.total - parseInt(action.payload.price)
        };
      default:
        return state;
    }
}