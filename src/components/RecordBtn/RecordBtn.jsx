import React from 'react';
import './recordBtn.scss';

const RecordBtn = ({ setIsModalVisible }) => {
	return (
		<>
			<button
				className="recordBtn"
				onClick={() => setIsModalVisible(true)}
			>
				Записаться
			</button>
		</>
	);
};

export default RecordBtn;
