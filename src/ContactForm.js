import React from 'react';
import { Field, reduxForm } from 'redux-form';

const ContactForm = props => {
  const { handleSubmit } = props; // handleSubmit - method from redux-form
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
        <button type="submit" className="button success">
          Send
        </button>
      </div>
    </form>
  );
};

// create new, "configured" function (unique name for form)
const createReduxForm = reduxForm({ form: 'contact' });

export default createReduxForm(ContactForm);
