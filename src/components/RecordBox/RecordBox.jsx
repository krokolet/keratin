import React from 'react';
import { Modal } from 'antd';
import { telephone, telegramm } from '../../data/masterContacts';
import './RecordBox.scss';

const RecordBox = ({ isVisible, setIsVisible }) => {
    return (
        <Modal
            title="Basic Modal"
            visible={isVisible}
            onCancel={() => setIsVisible(false)}
            footer={null}
        >
            <nav>
                <p className="phone">
                    <a
                        className="phone__number contact-text"
                        href={`tel:${telephone}`}
                    >
                        {telephone}
                    </a>
                </p>
                <p className="whatsapp">
                    <a
                        className="whatsapp__number"
                        href={`https://wa.me/${telephone}?text=${encodeURI(
                            'Здравствуйте, я хочу к вам записаться !'
                        )}`}
                    >
                        <span className="whatsapp__text contact-text">
                            WhatsUp
                        </span>
                    </a>
                </p>
                <p className="telegram">
                    <a
                        className="telegram__number"
                        href={`tg://resolve?domain=${telegramm}`}
                    >
                        <span className="telegram__text contact-text">
                            Telegram
                        </span>
                    </a>
                </p>
            </nav>
        </Modal>
    );
};

export default RecordBox;
