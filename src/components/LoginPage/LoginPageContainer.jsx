import React from 'react';
import LoginPage from './LoginPage';
import { usersAPI } from '../../api/api';



class LoginPageContainer extends React.Component {

    submit = values => {
        usersAPI.login(values.username, values.password).then(response => {
            console.log(response);
        });
        console.log(values)
      //  window.alert(JSON.stringify(values));
    };

    getInitialValues() {
        return {
            username: 'admin',
            password: 'admin',
        };
    }

    render() {
        return (
            <LoginPage
                onSubmit={this.submit}
                initialValues={this.getInitialValues()}
            />
        )
    }
}

export default LoginPageContainer;
