import React from "react";
import { Field, reduxForm } from "redux-form";
import { validate } from "../../../../utils/validators/validators";
import { RenderField } from "../../../common/FormsControls/FormsControls";
import { useDispatch } from "react-redux";
import { hideModalSing } from "../../../../redux/actions";
import { Button } from "antd";

const LoginFrom = (props) => {
  const { handleSubmit } = props;

  const dispatch = useDispatch();

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ marginBottom: "20px" }}>
        <Field
          name="email"
          type="email"
          label="Email"
          component={RenderField}
        />
        <Field
          name="password"
          type="password"
          label="Password"
          component={RenderField}
        />
      </div>
      <Button type="primary" style={{ marginRight: "20px" }} htmlType="submit">
        Submit
      </Button>
      <Button
        htmlType="button"
        onClick={() => {
          dispatch(hideModalSing());
        }}
      >
        Cansel
      </Button>
    </form>
  );
};

export default reduxForm({
  form: "login",
  validate,
})(LoginFrom);
