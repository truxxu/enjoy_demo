import { env } from "../env";
import {
  ADD_TO_BOOKINGS,
  REMOVE_FROM_BOOKINGS,
  SHOW_FORM
} from ".";
import store from "../store";

export const addOrRemoveFromBookings = (id_service, price) => dispatch => {
  let action_to_bookings = '';
  let servicePosition = store.getState().bookings.list.indexOf(id_service);

  if(servicePosition<0){
    action_to_bookings = ADD_TO_BOOKINGS;
  }else{
    action_to_bookings = REMOVE_FROM_BOOKINGS;
  }

  dispatch({
    type: action_to_bookings,
    payload: {
      id_service: id_service,
      price: price
    }
  });
};

export const showForm = param => dispatch => {
  dispatch({
    type: SHOW_FORM,
    payload: param
  });
};
