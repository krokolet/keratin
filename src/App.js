import React, { useState } from 'react';

import './App.scss';
import 'antd/dist/antd.css';
import { Spin } from 'antd';

import Header from './components/Header/Header';
import Slider from './components/Slider/Slider';
import PriceBox from './components/PriceBox/PriceBox';
import RecordBtn from './components/RecordBtn/RecordBtn';
import RecordBox from './components/RecordBox/RecordBox';

function App() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    window.addEventListener('resize', () => {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    });

    const [isReady, setReady] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);

    window.addEventListener('load', () => setReady(true));

    return !isReady ? (
        <Spin />
    ) : (
        <div className="wrapper grid">
            <Header />
            <Slider />
            <PriceBox />
            <RecordBtn setIsModalVisible={setIsModalVisible} />
            <RecordBox
                isVisible={isModalVisible}
                setIsVisible={setIsModalVisible}
            />
        </div>
    );
}

export default App;
