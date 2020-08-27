import React from "react";
import { Menu, Dropdown } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLogOut } from "../../../redux/actions";

const DropdownMenu = () => {
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(userLogOut());
    localStorage.clear();
  };

  const menu = (
    <Menu>
      <Menu.Item key="0">
        <Link style={{ fontSize: "20px" }} to="/profile">
          Profile
        </Link>
      </Menu.Item>
      <Menu.Item key="1">
        <Link
          style={{ fontSize: "20px" }}
          to="/"
          onClick={() => {
            logOut();
          }}
        >
          Logout
        </Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={["click"]}>
      <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
        <MenuOutlined
          style={{ fontSize: "29px", color: "#000000" }}
        ></MenuOutlined>
      </a>
    </Dropdown>
  );
};

export default DropdownMenu;
