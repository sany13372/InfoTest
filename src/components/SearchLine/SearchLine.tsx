import {FC} from 'react';
import SearchImg from '../../assets/Search.svg'
import styles from './SearchLine.module.scss'

const SearchLine: FC = () => {
    return (
        <div className={styles.line}>
            <div>
                <img src={SearchImg} alt="Картинка"/>
            </div>
            <input type="text" placeholder={'Быстрый поиск'}/>
        </div>
    );
}

export default SearchLine;