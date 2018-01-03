import React from 'react';
import { Field, reduxForm } from 'redux-form';

const formatСardNumber = (value, name) => {
  if (value === undefined) {
    return '';
  }
  value = value.replace(/([\d]{4})/g, '$1 ');
  console.log('display', value); // del
  return value;
};

const normalizeСardNumber = (
  value,
  previousValue,
  allValues,
  previousAllValues,
) => {
  value = value.replace(/\s/g, '');
  console.log('save in store', value); // del
  return value;
};

const validate = values => {
  const errors = {};

  if (!values.generalField) {
    errors.generalField = 'Required';
  }

  if (!values.firstName) {
    errors.firstName = 'Required';
  }

  if (!values.lastName) {
    errors.lastName = 'Required';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.cardNumber) {
    errors.cardNumber = 'Required';
  }

  return errors;
};

const warn = values => {
  const warnings = {};

  if (values.cardNumber && values.cardNumber.length !== 16) {
    warnings.cardNumber = 'Count numbers must have 16';
  }

  return warnings;
};

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

const ContactForm = props => {
  // handleSubmit and reset - methods from redux-form
  const { handleSubmit, reset } = props;
  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <Field
        id="generalField"
        name="generalField"
        component={renderField}
        label="General Field Label"
        placeholder="General Field Placeholder"
      />
      <Field
        id="firstName"
        name="firstName"
        component={renderField}
        label="First Name"
        placeholder="Mike"
      />
      <Field
        id="lastName"
        name="lastName"
        component={renderField}
        label="Last Name"
        placeholder="Tomson"
      />
      <Field
        id="email"
        name="email"
        component={renderField}
        label="Email"
        placeholder="mike.tomson@gmail.com"
      />
      <Field
        id="cardNumber"
        name="cardNumber"
        component={renderField}
        label="Card Number"
        placeholder="4254 6371 7231 3149"
        format={formatСardNumber}
        normalize={normalizeСardNumber}
      />
      <div>
        <button type="submit" className="button success">
          Send
        </button>
        <button type="button" className="button" onClick={reset}>
          Reset
        </button>
      </div>
    </form>
  );
};

// create new, "configured" function (unique name for form)
const createReduxForm = reduxForm({ form: 'contact', validate, warn });

export default createReduxForm(ContactForm);
