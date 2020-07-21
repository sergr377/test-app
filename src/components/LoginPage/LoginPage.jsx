import React, { Component } from 'react';
import s from './Login.module.css';
import { Field, reduxForm } from 'redux-form';
import { validate } from 'fast-xml-parser';
import { myInput } from '../FormsControls/FormsControl';
import { required, maxLengthCreator } from '../../Validation/Validation';

const maxLength10 = maxLengthCreator(10)

class LoginPage extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <div className={s.mainBlock}>
        <span className={s.title}>
          <h2>Авторизация</h2>
        </span>
        {this.props.isAuth ?
          <div className={s.blockButton}>
            <button className={s.button} onClick={this.props.logout}>Выйти</button>
          </div>
          : <form onSubmit={handleSubmit}>
            <div className={s.fieldBlock}>
              <Field
                className={s.field}
                name="username"
                component={myInput}
                type="text"
                placeholder="Username"
                validate={[required, maxLength10]}
              />
            </div>
            <div className={s.fieldBlock}>
              <Field
                className={s.field}
                name="password"
                component={myInput}
                type="password"
                placeholder="Password"
                validate={[required, maxLength10]}
              />
            </div>
            <div className={s.blockButton}>
              <button className={s.button} type="submit" label="submit">Войти</button>
            </div>
          </form>}

      </div>
    );
  }
}

LoginPage = reduxForm({
  form: 'login',
  validate
})(LoginPage);

export default LoginPage;