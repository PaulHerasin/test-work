import React from "react";

const Cart = () => {
  {
    getResult.map((item, index) => [
      <div className={styles.Cart} key={index} {...item}>
        <p>
          Имя: {item.name.title}. {item.name.first} {item.name.last}
        </p>
        <p>Национальность: {item.nat}</p>
        <p>Дата рождения: {item.dob.date.slice(0, 10)}</p>
        <p>Возраст: {item.dob.age}</p>
        <p>Телефон: {item.phone}</p>
        <p>
          Адресс: {item.location.country} {item.location.street.number}{" "}
          {item.location.street.name} {item.location.city}{" "}
          {item.location.postcode}
        </p>
        <p>Пол: {item.gender}</p>
        <p>Email: {item.email}</p>
        <p>Дата регистрации: {item.registered.date.slice(0, 10)}</p>
      </div>,
    ]);
  }
};

export default Cart;
