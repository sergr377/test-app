import React from 'react';
import s from './MainPage.module.css';
import { Link } from "react-router-dom"

export default function MainPage(props) {

    return (
        <div className={s.mainPage}>
            <div>
                {props.feeds.map(item =>
                    <div className={s.feedBlock}>
                        <span>
                            <div>
                                <Link to={item.link}>Ссылка</Link>
                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{item.title}</div>
                                <div>{item.description}</div>
                            </span>
                        </span>
                    </div>)
                }
            </div>
        </div >
    );
}



