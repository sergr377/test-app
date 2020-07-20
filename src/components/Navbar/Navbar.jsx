import React from 'react';
import { Link } from "react-router-dom"
import s from './Navbar.module.css';

function Navbar(props) {

    return (
        <div className={s.navbar}>
            <div className={s.navbutton}>
                <Link to={'/mainPage'} >
                    Main
                </Link>
            </div>
            <div className={s.navbutton}>
                <Link to={'/editPage'} >
                    EditPage
                </Link>
            </div>
            <div className={s.navbutton}>
                <Link to={'/loginPage'} >
                    LoginPage
                </Link>
            </div>
            <div className={s.navbutton}>
                <Link to={'/feedbackPage'} >
                    FeedbackPage
                </Link>
            </div>
        </div>
    );
}

export default Navbar

