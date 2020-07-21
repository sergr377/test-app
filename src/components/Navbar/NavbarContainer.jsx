import React from 'react';
import Navbar from './Navbar';
import { connect } from 'react-redux';


class NavbarContainer extends React.Component {

    render() {
        return (
            <Navbar isAuth={this.props.isAuth}/>
        )
    }
}
let mapStateToProps = (state) => ({
    isAuth: state.login.isAuth,
})

export default connect(mapStateToProps, {})(NavbarContainer);
