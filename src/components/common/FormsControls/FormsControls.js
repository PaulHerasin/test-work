import React, { useState } from "react";
import styles from "./FormsControls.module.scss";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

export const RenderField = ({
  input,
  label,
  type,
  meta: { touched, error },
}) => {
  const hasError = touched && error;

  const [visiblePassword, setVisiblePassword] = useState({ newType: type });

  const showPassword = () => {
    setVisiblePassword({
      newType: "text",
    });
  };

  const hidePassword = () => {
    setVisiblePassword({
      newType: "password",
    });
  };

  return (
    <div className={styles.fromControl + " " + (hasError ? styles.error : "")}>
      <label>{label}:</label>
      <div className={styles.boxInput}>
        <input
          {...input}
          type={visiblePassword.newType}
          className="form-control"
        />
        {visiblePassword.newType === "password" && input.name === "password" ? (
          <div
            className={styles.visiblePassword}
            onClick={() => {
              showPassword();
            }}
          >
            <EyeInvisibleOutlined></EyeInvisibleOutlined>
          </div>
        ) : null}
        {visiblePassword.newType === "text" && input.name === "password" ? (
          <div
            className={styles.visiblePassword}
            onClick={() => {
              hidePassword();
            }}
          >
            <EyeTwoTone></EyeTwoTone>
          </div>
        ) : null}
      </div>

      {hasError && <span className={styles.errorSpan}>{error}</span>}
    </div>
  );
};
