import React from 'react';
import { Modal } from 'antd';
import { telephone } from '../../data/masterContacts';
import './RecordBox.scss';

const RecordBox = ({ isModalVisible, setIsModalVisible }) => {
	return (
		<Modal
			title="Basic Modal"
			visible={isModalVisible}
			onCancel={() => setIsModalVisible(false)}
			footer={null}
		>
			<p>
				<span>Позвонить </span>
				<tel tel={telephone}>{telephone}</tel>
			</p>
			<p>Some contents...</p>
			<p>Some contents...</p>
		</Modal>
	);
};

export default RecordBox;
