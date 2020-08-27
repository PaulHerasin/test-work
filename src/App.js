import React from "react";

import "antd/dist/antd.css";
import Header from "./components/Header/Header";
import ModalLogin from "./components/Modals/ModalLogin/ModalLogin";
import { userLogIn } from "./redux/actions";
import { useDispatch } from "react-redux";
import ModalProfileData from "./components/Modals/ModalProfileData/ModalProfileData";

const App = (props) => {
  const loginAut = localStorage.getItem("Registered Users");

  const dispatch = useDispatch();

  if (loginAut) {
    dispatch(userLogIn());
  }

  // const clearLocal = () => {
  //   localStorage.clear();
  // };

  return (
    <div className="App">
      <Header></Header>
      <ModalLogin></ModalLogin>
      <ModalProfileData></ModalProfileData>
      {props.children}
      {/* <button
        onClick={() => {
          clearLocal();
        }}
      >
        Clear
      </button> */}
    </div>
  );
};

export default App;
