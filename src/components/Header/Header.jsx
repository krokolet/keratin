import React from 'react';
import { telephone } from '../../data/masterContacts';

import './header.scss';

const Header = () => {
    return (
        <header className="header grid">
            <div className="menu grid">
                <button className="btnMenu" />
            </div>
            <div className="title grid">
                <h1 className="title__name">Реконструкция волос</h1>
                <div className="town">г.Анжеро-Судженск</div>
            </div>
            <span className="master">Мастер: Татьяна Шадрина</span>
            <span className="header__phone phone__number">
                <em>
                    <b>{telephone}</b>
                </em>
            </span>
        </header>
    );
};

export default Header;
