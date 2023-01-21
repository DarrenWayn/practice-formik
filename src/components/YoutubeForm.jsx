import React from "react";
import { Formik, Form, Field, ErrorMessage, FastField } from "formik";
import * as Yup from "yup";
import TextError from "./TextError";
import FormControl from "./FormControl";

const initialValues = {
  name: "Darren",
  email: "",
  channel: "",
  comments: "",
  address: "",
  social: {
    facebook: "",
    twitter: "",
  },
  phoneNumbers: ["", ""],
  phNumbers: [""],
};

const onSubmit = (values) => {
  console.log("Form Data", values);
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required!"),
  email: Yup.string().email("Invalid email format!").required("Required"),
  channel: Yup.string().required("Write down your channel"),
  comments: Yup.string().required("Write down your comments!"),
  address: Yup.string().required("Write down your address!"),
});

function YoutubeForm() {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      validateOnChange={false}
      validateOnBlur={false}
    >
      <Form>
        <FormControl
          label="Name"
          htmlFor="name"
          type="text"
          id="name"
          name="name"
        />

        <div className="form-control">
          <label htmlFor="email">E-mail</label>
          <Field type="email" id="email" name="email" />
          <ErrorMessage name="email">
            {(errorMsg) => <div className="error">{errorMsg}</div>}
          </ErrorMessage>
        </div>

        <FormControl
          label="Channel"
          htmlFor="channel"
          type="text"
          id="channel"
          name="channel"
          placeholder="Your Youtube Channel Here!"
        />

        <FormControl
          label="Comments"
          htmlFor="comments"
          as="textarea"
          id="comments"
          name="comments"
          placeholder="Comment Your Thoughts Here!"
        />

        <div className="form-control">
          <label htmlFor="address">Address</label>
          <FastField name="address">
            {(props) => {
              console.log("Field render");
              const { field, form, meta } = props;
              return (
                <div>
                  <input type="text" id="address" {...field} />
                  {meta.touched && meta.error ? <div>{meta.error}</div> : null}
                </div>
              );
            }}
          </FastField>
          <ErrorMessage name="address" component={TextError} />
        </div>

        <FormControl
          label="Facebook Profile"
          htmlFor="facebook"
          type="text"
          id="facebook"
          name="social.facebook"
          placeholder="Enter Your Facebook"
        />

        <FormControl
          label="Twitter Profile"
          htmlFor="twitter"
          type="text"
          id="twitter"
          name="social.twitter"
          placeholder="Enter Your Twitter"
        />

        <FormControl
          label="Primary Phone Number"
          htmlFor="primaryPh"
          type="text"
          id="primaryPh"
          name="phonenumbers[0]"
          placeholder="Enter Your First Phone Number"
        />

        <FormControl
          label="Secondary Phone Number"
          htmlFor="secondaryPh"
          type="text"
          id="secondaryPh"
          name="phonenumbers[1]"
          placeholder="Enter Your Second Phone Number"
        />

        <FormControl
          label="List of Phone Number"
          name="phNumbers"
          isArray={true}
        />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}

export default YoutubeForm;
