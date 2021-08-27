import React from 'react';

import './header.scss';

const Header = () => {
    return (
        <header className="header">
            <div className="menu">
                <button className="btnMenu" />
            </div>
            <div className="title">
                <h1 className="title__name">Реконструкция волос</h1>
                <div className="town">г.Анжеро-Судженск</div>
            </div>
            <span className="master">
                <i>Мастер:</i> Татьяна Шадрина
            </span>
        </header>
    );
};

export default Header;
