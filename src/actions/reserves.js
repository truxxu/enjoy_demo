
import axios from "axios";
import Moment from 'react-moment';

import { env } from "../env";
import { GET_RESERVES } from ".";

export const getReserves = (token, month) => dispatch => {
    if(token!=null && token!=""){
      let year = new Date().getFullYear();
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Token ' + token
      };
      axios
      .get(env.apiUrl + `reservations/?year=${year}&month=${month}`, {
        headers: headers
      })
      .then(res => {
        dispatch({
          type: GET_RESERVES,
          payload: res.data
        });
      })
      .catch(err =>{
        window.alert("No se pudo traer las reservas.");
      });
    }
  };