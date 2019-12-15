import { combineReducers } from "redux";

import categories from "./categories";
import authentication from "./authentication";

export default combineReducers({
  categories,
  authentication
});

