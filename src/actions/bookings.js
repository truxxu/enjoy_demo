import axios from "axios";

import { env } from "../env";
import {
  ADD_TO_BOOKINGS,
  REMOVE_FROM_BOOKINGS,
  SHOW_FORM,
  CLEAN_BOOKINGS,
  GET_BOOKINGS
} from ".";
import store from "../store";

export const addBooking = (param) => dispatch => {
  let list = store.getState().bookings.list;
  let salonFilter = list.filter(item => item.salon_id !== param.salon_id)
  let serviceFilter = list.filter(item => item.id === param.id)
  let countPrice = parseInt(param.discount_price || param.price);
  let countTime = param.duration;

  if (salonFilter.length === 0 && serviceFilter.length === 0) {
    list.map(item => {
      if (item.discount_price !== null) {
        countPrice += parseInt(item.discount_price)
      } else {
        countPrice += parseInt(item.price)
      }
    });
    list.map(item => {
      countTime += item.duration
    })
    dispatch({
      type: ADD_TO_BOOKINGS,
      payload: {
        data: param,
        total: countPrice,
        duration: countTime
      }
    })
  } else if (serviceFilter.length > 0) {
    list.map(item => {
      if (item.discount_price !== null) {
        countPrice -= parseInt(item.discount_price)
      } else {
        countPrice -= parseInt(item.price)
      }
    });
    list.map(item => {
      countTime -= item.duration
    });
    dispatch({
      type: REMOVE_FROM_BOOKINGS,
      payload: {
        data: param,
        total: Math.abs(countPrice),
        duration: Math.abs(countTime)
      }
    });
  }
};

export const removeBooking = (param) => dispatch => {
  let list = store.getState().bookings.list;
  let salonFilter = list.filter(item => item.salon_id !== param.salon_id)
  let serviceFilter = list.filter(item => item.id === param.id)
  let countPrice = parseInt(param.discount_price || param.price);
  let countTime = param.duration;

  if (salonFilter.length === 0 && serviceFilter.length > 0) {
    list.map(item => {
      if (item.discount_price !== null) {
        countPrice -= parseInt(item.discount_price)
      } else {
        countPrice -= parseInt(item.price)
      }
    });
    list.map(item => {
      countTime -= item.duration
    });
    dispatch({
      type: REMOVE_FROM_BOOKINGS,
      payload: {
        data: param,
        total: Math.abs(countPrice),
        duration: Math.abs(countTime)
      }
    });
  }
};

export const showForm = param => dispatch => {
  dispatch({
    type: SHOW_FORM,
    payload: param
  })
};

export const cleanBookings = () => dispatch => {
  dispatch({
    type: CLEAN_BOOKINGS,
    payload: []
  })
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
