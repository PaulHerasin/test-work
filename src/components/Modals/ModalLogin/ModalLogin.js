import React from "react";
import { Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { hideModalSing, showModalUserData } from "../../../redux/actions";
import LoginFrom from "./LoginFrom/LoginFrom";

const ModalLogin = () => {
  const dispatch = useDispatch();

  const userAuthentication = useSelector((state) => {
    return state.user.userModalSing;
  });

  const handleCancel = () => dispatch(hideModalSing());

  const userSubmitAuthentication = (formData) => {
    console.log(formData);

    localStorage.setItem("Registered Users", JSON.stringify(formData));

    if (formData) {
      dispatch(showModalUserData());
      handleCancel();
    }
  };

  return (
    <Modal
      title="User Authentication"
      visible={userAuthentication}
      onCancel={() => {
        handleCancel();
      }}
      footer={null}
    >
      {userAuthentication ? (
        <LoginFrom onSubmit={userSubmitAuthentication}></LoginFrom>
      ) : null}
    </Modal>
  );
};

export default ModalLogin;
