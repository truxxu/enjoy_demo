import axios from "axios";

import { env } from "../env";
import { ADD_TO_BOOKINGS, REMOVE_FROM_BOOKINGS, GET_BOOKINGS } from ".";
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

export const getBookings = () => dispatch => {
  let token = localStorage.getItem('token');
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Token ' + token
  };
  axios
    .get(env.apiUrl + "reservations/", { headers: headers })
    .then(res => {
      dispatch({
        type: GET_BOOKINGS,
        payload: res.data
      });
    })
    .catch(err => window.alert("No se pudieron cargar las reservas"));
};
