import { combineReducers } from "redux";

import { login } from "../pages/Login/LoginRedux/reduce";
import { newUserId } from "../pages/Cadastro/NewUserRedux/reduce";

const appReducer = combineReducers({
  login,
  newUserId
});

const rootReducer = (state, action) => {
  if (action.type === "LOGOUT_AUTH") {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
