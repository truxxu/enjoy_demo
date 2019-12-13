import axios from "axios";

import { env } from "../env";
import { GET_SERVICES, GET_CITIES } from ".";

export const getServices = () => dispatch => {
  axios
    .get(env.apiUrl + "services/")
    .then(res => {
      dispatch({
        type: GET_SERVICES,
        payload: res.data
      });
    })
    .catch(err => window.alert("No se pudieron cargar los servicios."));
};

export const getCities = () => dispatch => {
  axios
    .get(env.apiUrl + "cities/")
    .then(res => {
      dispatch({
        type: GET_CITIES,
        payload: res.data
      });
    })
    .catch(err => window.alert("No se pudieron cargar las ciudades."));
};
