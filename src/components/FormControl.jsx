import { Field, ErrorMessage, FieldArray } from "formik";
import TextError from "./TextError";

const FormControl = ({ label, name, isArray = false, ...props }) => {
  const renderArray = () => {
    return (
      <FieldArray name={name} {...props}>
        {({ push, remove, form }) => {
          const { values } = form;
          const { phNumbers } = values;
          console.log("Form Errors", form.errors);
          return (
            <div>
              {phNumbers.map((_phNumber, index) => (
                <div key={index}>
                  <Field name={`phNumbers[${index}]`} />
                  {index > 0 && (
                    <button type="button" onClick={() => remove(index)}>
                      -
                    </button>
                  )}
                  <button type="button" onClick={() => push("")}>
                    +
                  </button>
                </div>
              ))}
            </div>
          );
        }}
      </FieldArray>
    );
  };
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      {isArray ? renderArray() : <Field id={name} name={name} {...props} />}
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default FormControl;
