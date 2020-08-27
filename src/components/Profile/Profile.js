import React from "react";
import Container from "../Container/Container";
import styles from "./Profile.module.scss";
import { Row, Col } from "antd";

const Profile = () => {
  const userDate = JSON.parse(localStorage.getItem("User Data"));
  const userMail = JSON.parse(localStorage.getItem("Registered Users"));

  return (
    <div>
      <Container>
        <Row>
          <Col span={24} className={styles}>
            Данные Профиля
          </Col>
        </Row>
        <Row>
          <Col span={8}>Аватар</Col>
          <Col span={16}>
            <div>
              <h3>Имя: {userDate.firstName}</h3>
            </div>
            <div>
              <h3>Фамилия: {userDate.lastName}</h3>
            </div>
            <div>
              <h3>Возраст: {userDate.age}</h3>
            </div>
            <div>
              <h3>Дата рождения: {userDate.dateBirthday}</h3>
            </div>
            <div>
              <h3>E-mail: {userMail.email}</h3>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Profile;
