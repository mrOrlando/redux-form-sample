import React, { PureComponent, Fragment } from 'react';
import ContactPage from './ContactPage';
import FieldArraysForm from './FieldArraysForm';
import showResults from './showResults';

class App extends PureComponent {
  render() {
    return (
      <Fragment>
        <ContactPage />
        <FieldArraysForm onSubmit={showResults} />
      </Fragment>
    );
  }
}

export default App;
