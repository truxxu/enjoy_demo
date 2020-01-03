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
      let errorMessage = '';
      if(err.response) {
        errorMessage = `\nDatos incorrectos.`;
      }
      window.alert("No se pudo completar el registro. " + errorMessage);
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
      localStorage.removeItem('token');
      dispatch({
        type: USER_LOGOUT
      });
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
      localStorage.setItem('token', res.data.token);
    })
    .catch(err =>{
      let errorMessage = '';
      if(err.response) {
        let errors = err.response.data
        const ATTRIBUTES = {
          first_name: 'Nombres',
          last_name: 'Apellidos',
          phone: 'Celular',
          username: 'Correo',
          birth_date: 'Fecha de nacimiento',
          password: 'Constraseña',
        }
        for (let key in errors) {
          errorMessage += `\n${ATTRIBUTES[key]}: ${errors[key]}`;
        }
      }
      window.alert("No se pudo completar el registro. " + errorMessage);
    });
};

