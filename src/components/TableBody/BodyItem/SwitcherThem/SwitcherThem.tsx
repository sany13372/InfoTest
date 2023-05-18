import {FC, useState} from 'react';
import styles from './SwitcherThem.module.scss'

const SwitcherThem: FC = () => {
    const [check,setCheck] = useState<boolean>(false)
    return (
        <div className={styles.switcher} >
            <label className={styles.label} >
                <input className={styles.input} onChange={() => {}} onClick={() => setCheck(!check)} checked={check} type='checkbox'/>
                <span className={styles.slider}></span>
            </label>
        </div>
    );
}

export default SwitcherThem;