import { env } from "../env";
import {
  ADD_TO_BOOKINGS,
  REMOVE_FROM_BOOKINGS,
  SHOW_FORM,
} from ".";
import store from "../store";

export const addBooking = (param) => dispatch => {
  let list = store.getState().bookings.list;
  let salonFilter = list.filter(item => item.salon_id !== param.salon_id)
  let serviceFilter = list.filter(item => item.id === param.id)

  if (salonFilter.length === 0 && serviceFilter.length === 0) {
    dispatch({
      type: ADD_TO_BOOKINGS,
      payload: param
    })
  }
};

export const removeBooking = (param) => dispatch => {
  let list = store.getState().bookings.list;
  let salonFilter = list.filter(item => item.salon_id !== param.salon_id)
  let serviceFilter = list.filter(item => item.id === param.id)

  if (salonFilter.length === 0 && serviceFilter.length > 0) {
    dispatch({
      type: REMOVE_FROM_BOOKINGS,
      payload: param
    })
  }
};

export const showForm = param => dispatch => {
  dispatch({
    type: SHOW_FORM,
    payload: param
  });
};
