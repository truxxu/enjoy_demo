
import { LOGIN } from "../actions/index";

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
      default:
        return state;
    }
  }
  