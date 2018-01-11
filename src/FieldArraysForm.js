import React from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';

const renderField = ({
  id,
  input,
  label,
  placeholder,
  meta: { touched, error, warning },
}) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...input} placeholder={placeholder} />
      {touched &&
        ((error && <span className="error">{error}</span>) ||
          (warning && <span className="warning">{warning}</span>))}
    </div>
  );
};

const renderMembers = ({ fields }) => {
  return (
    <ul>
      <li>
        <button
          type="button"
          className="button"
          onClick={() => fields.push({})}
        >
          + Add Member
        </button>
      </li>
      {fields.map((member, index) => (
        <li key={index} className="member">
          <div className="header">
            <h4>Member #{index + 1}</h4>
            <button
              type="button"
              className="button remove"
              onClick={() => fields.remove(index)}
            >
              x
            </button>
          </div>
          <Field
            name={`${member}.nick`}
            component={renderField}
            label="Nick"
            placeholder="Nick"
          />
        </li>
      ))}
    </ul>
  );
};

const FieldArraysForm = props => {
  const { handleSubmit, reset } = props;
  return (
    <form onSubmit={handleSubmit} className="club-form">
      <Field
        name="clubName"
        component={renderField}
        label="Club Name"
        placeholder="Club Name"
      />
      <FieldArray name="members" component={renderMembers} />
      <div>
        <button type="submit" className="button success">
          Submit
        </button>
        <button type="button" className="button" onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'fieldArrays',
})(FieldArraysForm);
