
// https://codesandbox.io/s/eager-pine-54k19?fontsize=14&hidenavigation=1&theme=dark&file=/src/components/UI/InputField.js:0-489

import React from "react";
import { Formik } from "formik";
import { BasicForm } from "../form2/BasicForm";

const validation = values => {
  let errors = {};

  if (!values.name) {
    errors.name = "Name is required!";
  } else if (values.name.length <= 1) {
    errors.name = "Name has to be 1 character at less!";
  }
  if (!values.lastName) {
    errors.lastName = "Last name is required!";
  }
  if (!values.team) {
    errors.team = "Team is required!";
  } else if (values.team.length < 2) {
    errors.team = "Team is required!";
  }
  if (!values.number) {
    errors.number = "Number is required!";
  } else if (isNaN(values.number)) {
    errors.number = "Must be a number!";
  }
  return errors;
};

const Basic = () => (
  <Formik
    initialValues={{
      name: "",
      lastName: "",
      number: "",
      position: "pg",
      team: ""
    }}
    onSubmit={(values, actions) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        console.log(values);
        console.log(actions);
        actions.setSubmitting(false);
      }, 2000);
    }}
    validate={validation}
  >
    {props => <BasicForm {...props} />}
  </Formik>
);

export default Basic;
