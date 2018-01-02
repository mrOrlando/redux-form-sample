import React from 'react';
import { Field, reduxForm } from 'redux-form';

const ContactForm = props => {
  const { handleSubmit, reset } = props; // handleSubmit and reset - methods from redux-form
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
  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div>
        <label htmlFor="firstName">First Name</label>
        <Field
          id="firstName"
          name="firstName"
          component="input"
          placeholder="Mike"
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <Field
          id="lastName"
          name="lastName"
          component="input"
          placeholder="Tomson"
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <Field
          id="email"
          name="email"
          component="input"
          placeholder="mike.tomson@gmail.com"
        />
      </div>
      <div>
        <label htmlFor="cardNumber">Card Number</label>
        <Field
          id="cardNumber"
          name="cardNumber"
          component="input"
          format={formatСardNumber}
          normalize={normalizeСardNumber}
          maxLength="20"
          placeholder="4254 6371 7231 3149"
        />
      </div>
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
const createReduxForm = reduxForm({ form: 'contact' });

export default createReduxForm(ContactForm);
