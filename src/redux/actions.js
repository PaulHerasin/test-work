import {
  SHOW_MODAL_SIGN,
  HIDE_MODAL_SIGN,
  APP_LOGIN,
  APP_LOGOUT,
  USER_EMAIL,
  SHOW_MODAL_USERDATA,
  HIDE_MODAL_USERDATA,
  GET_CONTACTS,
} from "./types";

export function showModalSing() {
  return {
    type: SHOW_MODAL_SIGN,
  };
}

export function hideModalSing() {
  return {
    type: HIDE_MODAL_SIGN,
  };
}

export function userLogIn() {
  return {
    type: APP_LOGIN,
  };
}

export function userLogOut() {
  return {
    type: APP_LOGOUT,
  };
}

export function showModalUserData() {
  return {
    type: SHOW_MODAL_USERDATA,
  };
}

export function hideModalUserData() {
  return {
    type: HIDE_MODAL_USERDATA,
  };
}

export function userGetEmail(email) {
  return {
    type: USER_EMAIL,
    payload: email,
  };
}

export function getContacts() {
  const random = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  };

  return async (dispatch) => {
    const response = await fetch(
      `https://randomuser.me/api/?results=${random(
        5000
      )}&inc=gender,name,nat,dob,email,phone,location,registered&noinfo`
    );
    const json = await response.json();
    localStorage.setItem("Contacts", JSON.stringify(json));

    dispatch({ type: GET_CONTACTS, payload: json });
  };
}
