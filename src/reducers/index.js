import { combineReducers } from "redux";

import categories from "./categories";
import services from "./services";
import salons from "./salons";
import authentication from "./authentication";
import favoriteService from "./favoriteService";
import bookings from "./bookings";
import reserves from "./reserves";

export default combineReducers({
  categories,
  services,
  salons,
  authentication,
  favoriteService,
  bookings,
  reserves
});
