import axios from "axios";

import { env } from "../env";
import { GET_CATEGORIES, SER_CATEGORY } from ".";

export const getCategories = () => dispatch => {
  axios
    .get(env.apiUrl + "categories/")
    .then(res => {
      dispatch({
        type: GET_CATEGORIES,
        payload: res.data
      });
    })
    .catch(err => window.alert("No se pudo cargarga las categorias."));
};

export const setCategory = category => dispatch => {
  dispatch({
    type: SER_CATEGORY,
    payload: category
  });
};
