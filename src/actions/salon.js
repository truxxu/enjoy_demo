import axios from "axios";

import { env } from "../env";
import { GET_SALON, GET_SALON_SERVICES } from ".";

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

export const getSalonServices = (id, category) => dispatch => {
  axios
    .get(env.apiUrl + `services/?salon=${id}&category=${category}`)
    .then(res => {
      dispatch({
        type: GET_SALON_SERVICES,
        payload: res.data
      });
    })
    .catch(err =>
      window.alert("No se pudieron cargar los servicios del salon.")
    );
};
