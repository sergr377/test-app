import React from 'react';
import { Link } from "react-router-dom"
import s from './Navbar.module.css';

function Navbar(props) {

    return (
        <div className={s.navbar}>
            <div className={s.navbuttonR}>
                <div >
                    <Link className={s.navLink} to={'/mainPage'} >
                        Мои новости
                </Link>
                </div>
                <div >
                    {props.isAuth
                        ? <Link className={s.navLink} to={'/editPage'} >Редактировать</Link>
                        : <a className={s.navLinkOff}>Редактировать</a>
                    }
                </div>
            </div>
            <div className={s.navbuttonl}>
                <div >
                    <Link className={s.navLink} to={'/feedbackPage'} >
                        Написать
                    </Link>
                </div>
                <div >
                    <Link className={s.navLink} to={'/loginPage'} >
                        Войти
                </Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar

