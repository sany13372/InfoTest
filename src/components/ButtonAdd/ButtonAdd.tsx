import {Dispatch, FC, SetStateAction} from 'react';
import styles from './ButtonAdd.module.scss'
import PlusImg from '../../assets/Plus.svg'

const ButtonAdd: FC<{setModalType:Dispatch<SetStateAction<string>>}> = ({setModalType}) => {
    return (
        <button className={styles.button} onClick={() => setModalType('create')}>
            <img src={PlusImg} alt={'Картинка'}/>
            <h4>
                Добавить
            </h4>
        </button>
    );
}

export default ButtonAdd;