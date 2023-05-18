import {FC} from 'react';
import BurgerImg from '../../assets/Burger.svg'
import NotificationImg from '../../assets/Notification.svg'
import CardImg from '../../assets/Card.svg'
import styles from './Header.module.scss'

const Header: FC = () => {
    return (
        <header className={styles.header}>
            <img src={BurgerImg} alt="Картинка"/>
            <div>
                <h4>Управление компани...</h4>
                <img src={NotificationImg} alt="Картинка"/>
                <img src={CardImg} alt="Картинка"/>
            </div>
        </header>
    );
}

export default Header;