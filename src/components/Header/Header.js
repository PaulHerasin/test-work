import React from "react";
import DropdownMenu from "./Dropdown/Dropdown";
import Container from "../Container/Container";
import styles from "./Header.module.scss";
import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { showModalSing } from "../../redux/actions";
import { Link } from "react-router-dom";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

const Header = () => {
  const dispatch = useDispatch();

  const userLogIn = useSelector((state) => {
    return state.app.login;
  });

  const userDate = JSON.parse(localStorage.getItem("User Data"));

  const login = () => {
    if (!userLogIn) {
      return (
        <div className={styles.Login}>
          <Button
            onClick={() => {
              handleOpen();
            }}
          >
            Sing In
          </Button>
        </div>
      );
    }
    return (
      <>
        <Link to="/profile">
          <Avatar size={45} icon={<UserOutlined />} />
        </Link>
        <h2> Привествуваем</h2>
        <Link to="/profile"> {userDate.firstName}</Link>
        <Link style={{ fontSize: "20px" }} to="/contacts">
          Contacts
        </Link>
        <DropdownMenu />
      </>
    );
  };

  const handleOpen = () => dispatch(showModalSing());

  return (
    <header className={styles.Header}>
      <Container>
        <div className={styles.Menu}>{login()}</div>
      </Container>
    </header>
  );
};

export default Header;
