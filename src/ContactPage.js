import React, { PureComponent } from 'react';
import ContactForm from './ContactForm';
import showResults from './showResults';

export class ContactPage extends PureComponent {
  render() {
    return <ContactForm onSubmit={showResults} />;
  }
}

export default ContactPage;
