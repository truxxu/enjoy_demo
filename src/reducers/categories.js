import { GET_CATEGORIES } from "../actions/index";
const initialState = {
  list: [],
  activeItem: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        business: action.payload
      };
    // case GET_CURRENT_BUSINESS:
    //   return {
    //     ...state,
    //     currentBusiness: action.payload,
    //     isLoading: false
    //   };
    // case DELETE_BUSINESS:
    //   return {
    //     ...state,
    //     business: state.business.filter(
    //       business => business.id !== action.payload
    //     )
    //   };
    // case ADD_BUSINESS:
    //   return {
    //     ...state,
    //     business: [...state.business, action.payload]
    //   };
    default:
      return state;
  }
}
