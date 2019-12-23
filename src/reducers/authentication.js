import { LOGIN } from "../actions/index";
import { USER } from "../actions/index";
import { USER_LOGOUT } from "../actions/index";

const initialState =  { 
  loggedIn: false, 
  currentUser: [],
  token : ''
};

export default function(state = initialState, action) {
    switch (action.type) {
      case LOGIN:
        return {
          ...state,
          currentUser: action.payload.user,
          token: action.payload.token,
          loggedIn: true
        };
      case USER:
        return {
          ...state,
          currentUser: action.payload.user,
          token: action.payload.token,
          loggedIn: true
        };
      case USER_LOGOUT:
        return {
          ...state,
          currentUser: null,
          token: null,
          loggedIn: false
        };
      default:
        return state;
    }
  }
  