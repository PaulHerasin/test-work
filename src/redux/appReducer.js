import { APP_LOGIN, APP_LOGOUT } from "./types";

const initialState = {
  login: false,
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case APP_LOGIN:
      return { ...state, login: true };
    case APP_LOGOUT:
      return { ...state, login: false };
    default:
      return state;
  }
};
