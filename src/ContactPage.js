import React, { PureComponent } from 'react';
import ContactForm from './ContactForm';

export class ContactPage extends PureComponent {
  submit = values => {
    // print the form values to the console
    console.log('form values', values);
    alert(JSON.stringify(values));
  };
  render() {
    return <ContactForm onSubmit={this.submit} />;
  }
}

export default ContactPage;
