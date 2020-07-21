import React from 'react';
import s from './MainPage.module.css';
import { Link } from "react-router-dom"
import newsPic from '../../images/news.png';

export default function MainPage(props) {

    return (
        <div className={s.mainPage}>
            <div>
                {props.feeds.map(item =>
                    <div className={s.feedBlock}>
                        <div className={s.picCol}>
                           <img src={newsPic}/>
                        </div>
                        <div className={s.feedCol}>
                            <h4 className={s.feedTitle}>{item.title}</h4>
                            <div className={s.timeCol}>
                                {item.pubDate}
                            </div>
                        </div>
                        <div className={s.feedCol}>
                            {item.description}
                            <a className={s.href} href={item.link}>Читать далее...</a>
                        </div>
                    </div>)
                }
            </div>
        </div >
    );
}



