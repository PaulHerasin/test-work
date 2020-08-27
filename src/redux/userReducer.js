import {
  SHOW_MODAL_SIGN,
  HIDE_MODAL_SIGN,
  USER_EMAIL,
  SHOW_MODAL_USERDATA,
  HIDE_MODAL_USERDATA,
} from "./types";

const initialState = {
  userModalSing: false,
  userModalDate: false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL_SIGN:
      return { ...state, userModalSing: true };
    case HIDE_MODAL_SIGN:
      return { ...state, userModalSing: false };
    case USER_EMAIL:
      return {
        ...state,
        userDate: { ...state.userDate, email: action.payload },
      };
    case SHOW_MODAL_USERDATA:
      return { ...state, userModalDate: true };
    case HIDE_MODAL_USERDATA:
      return { ...state, userModalDate: false };
    default:
      return state;
  }
};
