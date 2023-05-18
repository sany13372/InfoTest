import {FC} from 'react';
import FilterImg from '../../assets/Filter.svg'
import styles from './ButtonFilter.module.scss'
const ButtonFilter: FC = () => {
    return (
        <button className={styles.button}>
            <img src={FilterImg} alt="Картинка"/>
            <h4>Фильтр</h4>
            <div>1</div>
        </button>
    );
}

export default ButtonFilter;