import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import myInput from '../FormsControls/FormsControl';
import { validate } from 'fast-xml-parser';

class LoginPage extends Component {
  render () {
    const {handleSubmit} = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Field
          name="username"
          component={myInput}
          type="text"
          placeholder="Username"
        />
        <Field
          name="password"
          component={myInput}
          type="password"
          placeholder="Password"
        />
        <button type="submit" label="submit">Submit</button>
      </form>
    );
  }
}

LoginPage = reduxForm ({
  form: 'login',
  validate
}) (LoginPage);

export default LoginPage;