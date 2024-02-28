import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { Autocomplete } from "@mui/material";
import { TextField } from "@mui/material";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  color: Yup.string().required("Required"),
});

const colors = ["Red", "Green", "Blue"];

const FormikAutocomplete = () => (
  <Formik
    initialValues={{ color: "" }}
    validationSchema={validationSchema}
    onSubmit={(values) => {
      console.log(values);
    }}
  >
    {({ setFieldValue, errors, touched, values }) => (
      <Form>
        <Autocomplete
          options={colors}
          value={values.color}
          onChange={(event, newValue) => {
            setFieldValue("color", newValue);
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              error={touched.color && !!errors.color}
              helperText={touched.color && errors.color}
            />
          )}
        />
        <ErrorMessage name="color" component="div" />
        <button type="submit">Submit</button>
      </Form>
    )}
  </Formik>
);

export default FormikAutocomplete;
