import { combineReducers } from "redux";

import categories from "./categories";
import services from "./services";

export default combineReducers({
  categories,
  services
});
