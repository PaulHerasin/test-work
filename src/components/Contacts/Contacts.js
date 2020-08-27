import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContacts } from "../../redux/actions";
// import styles from "./Contacts.module.scss";
import Table from "./Table/Table";

const Contacts = () => {
  const dispatch = useDispatch();

  dispatch(getContacts());
  const userLogIn = useSelector((state) => {
    return state.app.login;
  });

  if (userLogIn) {
    return (
      <div>
        Contacts
        <Table></Table>
      </div>
    );
  }

  return null;
};

export default Contacts;
