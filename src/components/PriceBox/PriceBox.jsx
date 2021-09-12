import React from 'react';

import './priceBox.scss';

const PriceBox = () => {
    return (
        <article className="priceBox  grid">
            <div className="service  grid">
                <span className="service__name">Кератин</span>
                <span className="service__cost">от 2500р.</span>
                <button className="service__btn"></button>
            </div>
            <div className="service grid">
                <span className="service__name">Ботокс</span>
                <span className="service__cost">от 2500р.</span>
                <button className="service__btn"></button>
            </div>
            <div className="service grid">
                <span className="service__name">Нанопластика</span>
                <span className="service__cost">от 2500р.</span>
                <button className="service__btn"></button>
            </div>
            <div className="service grid">
                <span className="service__name">Холодное восстановление</span>
                <span className="service__cost">от 2500р.</span>
                <button className="service__btn"></button>
            </div>
        </article>
    );
};

export default PriceBox;
