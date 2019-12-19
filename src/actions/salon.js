import axios from "axios";

import { env } from "../env";
import { GET_SALON } from ".";

export const getSalon = id => dispatch => {
  axios
    .get(env.apiUrl + `salons/${id}/`)
    .then(res => {
      dispatch({
        type: GET_SALON,
        payload: res.data
      });
    })
    .catch(err => window.alert("No se pududo cargar el salon."));
};
