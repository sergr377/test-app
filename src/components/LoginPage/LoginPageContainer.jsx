import React from 'react';
import LoginPage from './LoginPage';
import { connect } from 'react-redux';
import { usersAPI } from '../../api/api';
import { authAC } from '../../redux/loginReducers';


class LoginPageContainer extends React.Component {

    submit = values => {
        usersAPI.login(values.username, values.password).then(response => {
            console.log(response);
            if (response === 'Ok') {
                this.props.authAC(true)
            } else {
                this.props.authAC(false)
            }
        });
        console.log(values)
        //  window.alert(JSON.stringify(values));
    };

    logout = () => {
        this.props.authAC(false)
    }

    getInitialValues() {
        return {
            username: 'admin',
            password: 'admin',
        };
    }

    render() {
        return (
            <LoginPage
                logout={this.logout}
                onSubmit={this.submit}
                isAuth={this.props.isAuth}
                initialValues={this.getInitialValues()}
            />
        )
    }
}
let mapStateToProps = (state) => ({
    isAuth: state.login.isAuth
})

export default connect(mapStateToProps, { authAC })(LoginPageContainer);
