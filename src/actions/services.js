import axios from "axios";

import { env } from "../env";
import { GET_SERVICES } from ".";

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
