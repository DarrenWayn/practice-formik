import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

const FormControl = ({ label, name, ...props }) => {
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field id={name} name={name} {...props} />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default FormControl;
