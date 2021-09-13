import React from 'react';
import { Modal } from 'antd';
import { telephone, telegramm } from '../../data/masterContacts';
import './RecordBox.scss';

const RecordBox = ({ isVisible, setIsVisible }) => {
    return (
        <Modal
            title="Всегда на связи !"
            visible={isVisible}
            onCancel={() => setIsVisible(false)}
            footer={null}
            centered
        >
            <nav className="contactList">
                <p className="phone messengerBtn">
                    <a
                        className="phone__number contact-text"
                        href={`tel:${telephone}`}
                    >
                        {telephone}
                    </a>
                </p>
                <p className="whatsapp messengerBtn">
                    <a
                        className="whatsapp__number  contact-text"
                        href={`https://wa.me/${telephone}?text=${encodeURI(
                            'Здравствуйте, я хочу к вам записаться !'
                        )}`}
                    >
                        <span className="whatsapp__text">Whatsapp</span>
                    </a>
                </p>
                <p className="telegram messengerBtn">
                    <a
                        className="telegram__number  contact-text"
                        href={`tg://resolve?domain=${telegramm}`}
                    >
                        <span className="telegram__text">Telegram</span>
                    </a>
                </p>
                <div>- или -</div>
                <section>
                    <a>
                        <span className="odnoklassniki social"></span>
                    </a>
                    <a>
                        <span className="vkontakte social"></span>
                    </a>
                    <a>
                        <span className="instagram social"></span>
                    </a>
                </section>
            </nav>
        </Modal>
    );
};

export default RecordBox;
