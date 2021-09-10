import './App.scss';
import 'antd/dist/antd.css';

import './components/Header/Header';
import Header from './components/Header/Header';
import Slider from './components/Slider/Slider';
import PriceBox from './components/PriceBox/PriceBox';
import RecordBtn from './components/RecordBtn/RecordBtn';
import RecordBox from './components/RecordBox/RecordBox';

import React, { useState } from 'react';
import { Modal, Button, Row, Col } from 'antd';

function App() {
	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);
	window.addEventListener('resize', () => {
		let vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', `${vh}px`);
	});

		const [isModalVisible, setIsModalVisible] = useState(false);
	return (
		<div className="wrapper">
			<Header />
			<Slider />
			<PriceBox />
			{/* <button className="recordBtn">Записаться</button> */}
			<RecordBtn setIsModalVisible={setIsModalVisible }/>
			<RecordBox isModalVisible={isModalVisible} setIsModalVisible={ setIsModalVisible}/>
		</div>

	);
}

export default App;
