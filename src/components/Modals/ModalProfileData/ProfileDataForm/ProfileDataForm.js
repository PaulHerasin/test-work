import React from "react";
import { Field, reduxForm } from "redux-form";
// import { validate } from "../../../utils/validators/validators";
import { RenderField } from "../../../common/FormsControls/FormsControls";
// import { useDispatch } from "react-redux";
// import { hideModalSing } from "../../../redux/actions";
import { Button } from "antd";

const FormProfileData = (props) => {
  //   const { handleSubmit } = props;

  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name="First Name"
          type="text"
          label="First Name"
          component={RenderField}
        />
        <Field
          name="lastName"
          type="text"
          label="Last Name"
          component={RenderField}
        />
        <Field name="age" type="number" label="Age" component={RenderField} />
        <Field
          name="dateBirthday"
          type="date"
          label="Date Birthday"
          defultValue="Date Birthday"
          component={RenderField}
        />
      </div>
      <Button type="primary" style={{ marginRight: "10px" }} htmlType="submit">
        Submit
      </Button>
    </form>
  );
};

// Decorate with redux-form
export default reduxForm({
  form: "myForm",
  //   validate,
})(FormProfileData);
