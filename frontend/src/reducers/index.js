import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import loginOwnerReducer from "./loginOwnerReducer";
import signReducer from "./signReducer";

import homeReducer from "./homeReducer";
import travelerSearchReducer from "./travelerSearchReducer";
import errorReducer from "./errorReducer";
import ownerdashboardReducer from "./ownerdashboardReducer";
import listPropertyReducer from "./listPropertyReducer";
import travelerDashboardReducer from "./travelerDashboardReducer";
import messageReducer from "./messageReducer";

export default combineReducers({
  loginOwnerReducer: loginOwnerReducer,
  signReducer: signReducer,

  homeReducer: homeReducer,
  travelerSearchReducer: travelerSearchReducer,
  errorReducer: errorReducer,
  ownerdashboardReducer: ownerdashboardReducer,
  listPropertyReducer: listPropertyReducer,
  travelerDashboardReducer: travelerDashboardReducer,
  messageReducer: messageReducer
});
