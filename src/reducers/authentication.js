import { LOGIN } from "../actions/index";
import { USER } from "../actions/index";
import { USER_LOGOUT } from "../actions/index";
import { REGISTER_USER } from "../actions/index";
import { UPDATE_USER_FIELD } from "../actions/index";

const initialState =  {
  loggedIn: false,
  currentUser: {},
  token : '',
  isLoading: true,
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
          loggedIn: true,
          isLoading: false,
        };
      case USER_LOGOUT:
        return {
          ...state,
          currentUser: null,
          token: null,
          loggedIn: false
        };
      case UPDATE_USER_FIELD:
        return Object.assign({}, state, {
          currentUser: Object.assign({}, state.currentUser, action.payload)
        });
      default:
        return state;
    }
  }
