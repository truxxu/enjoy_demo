import { combineReducers } from "redux";

import categories from "./categories";
import services from "./services";
import authentication from "./authentication";

export default combineReducers({
  categories,
  services,
  authentication
});