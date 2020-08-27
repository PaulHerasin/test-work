import React from "react";
import { Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { hideModalUserData, userLogIn } from "../../../redux/actions";
import MyForm from "./ProfileDataForm/ProfileDataForm";
import { useHistory } from "react-router-dom";

const ModalProfileData = () => {
  const dispatch = useDispatch();

  const showModal = useSelector((state) => {
    return state.user.userModalDate;
  });

  let history = useHistory();

  const userData = (formData) => {
    console.log(formData);
    localStorage.setItem("User Data", JSON.stringify(formData));

    function handleClick() {
      history.push("/profile");
    }

    if (formData) {
      handleClick();
      dispatch(userLogIn());
      dispatch(hideModalUserData());
    }
  };

  return (
    <Modal title="User Data" visible={showModal} footer={null}>
      <MyForm onSubmit={userData}></MyForm>
    </Modal>
  );
};

export default ModalProfileData;
