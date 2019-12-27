import axios from "axios";
import { env } from "../env";
import { LOGIN } from ".";
import { USER } from ".";
import { USER_LOGOUT } from ".";

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

export const validateUser = () => dispatch => {
  let token = localStorage.getItem('token');
  if(token!=null){
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Token ' + token
    };
    axios
    .get(env.apiUrl + "auth/user/", {
      headers: headers
    })
    .then(res => {
      dispatch({
        type: USER,
        payload: res.data
      });
    })
    .catch(err =>{
      window.alert("No se pudo realizar la validacion del usuario.");

    });
  }
};

export const logOut = () => dispatch => {
  let token = localStorage.getItem('token');
  if(token!=null){
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Token ' + token
    };
    axios
    .post(env.apiUrl + "auth/logout/", null, {
      headers: headers
    })
    .then(res => {
      localStorage.removeItem('token');
      dispatch({
        type: USER_LOGOUT,
        payload: res.data
      });
    })
    .catch(err =>{
      window.alert("No se pudo realizar el cierre de sesión.");
    });
  }
};

export const registerUser = (data) => dispatch => {
  axios
    .post(env.apiUrl + "auth/register/", {
        first_name: data.first_name,
        last_name: data.last_name,
        phone: data.phone,
        username: data.username,
        birth_date: data.birth_date,
        password: data.password,
    })
    .then(res => {
      dispatch({
        type: LOGIN,
        payload: res.data
      });
      localStorage.setItem('token',res.data.token);
    })
    .catch(err =>{
      window.alert("No se pudo completar el registro");
    });
};

