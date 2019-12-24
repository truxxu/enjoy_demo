import axios from "axios";

import { env } from "../env";
import { GET_SERVICES, GET_CITIES, UPDATE_FILTERS } from ".";
import store from "../store";

export const getServices = data => (dispatch, getState) => {
  const filters = store.getState().services.filters;
  const url = `${env.apiUrl}services/?category=${data}`;

  const filterParams = () => {
    let string = "";
    for (const [key, value] of Object.entries(filters)) {
      if (value !== "" && !Array.isArray(value)) {
        string = string + `&${key}=${value}`;
      }
    }
    return url + string;
  };

  axios
    .get(filterParams())
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

export const updateFilters = param => dispatch => {
  const activeItem = store.getState().categories.activeItem.id;
  dispatch({
    type: UPDATE_FILTERS,
    payload: param
  });
  dispatch(getServices(activeItem));
};
