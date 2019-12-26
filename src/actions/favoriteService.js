import axios from "axios";
import { env } from "../env";
import { ADD_FAVORITE_SERVICE, GET_FAVORITES } from ".";

export const addFavoriteService = (id_service) => dispatch => {
  let token = localStorage.getItem('token');      
  if(token!=null){
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Token ' + token
    };
    const params = {
      'service': id_service
    };
    axios
    .post(env.apiUrl + "favorite-services/", params, {
      headers: headers
    })
    .then(res => {      
      dispatch({
        type: ADD_FAVORITE_SERVICE,
        payload: res.data
      });
    })
    .catch(err =>{
      window.alert("No se pudo agregar el servicio favorito.");
    });
  }
};

export const getFavorites = () => dispatch => {
  let token = localStorage.getItem('token');      
  if(token!=null){
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Token ' + token
    };
    axios
    .get(env.apiUrl + "favorite-services/", {
      headers: headers
    })
    .then(res => {
      dispatch({
        type: GET_FAVORITES,
        payload: res.data
      });
    })
    .catch(err =>{
      window.alert("No se pudo traer los servicios favoritos.");
    });
  }
};