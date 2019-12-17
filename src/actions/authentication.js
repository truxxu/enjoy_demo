import axios from "axios";
import { env } from "../env";
import { LOGIN } from ".";

export const authUser = (username, password) => dispatch => {
  axios
    .post(env.apiUrl + "auth/login/", {
        username: username,
        password: password
    })
    .then(res => {
      dispatch({
        type: LOGIN,
        payload: res.data
      });
      localStorage.setItem('token',res.data.token);      
    })
    .catch(err =>{
      window.alert("No se pudo realizar la autenticación.");
    });
};