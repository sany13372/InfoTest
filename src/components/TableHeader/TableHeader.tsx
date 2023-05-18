import {FC} from 'react';
import HeaderItem from "./HeaderItem";
import styles from './TableHeader.module.scss'

const TableHeader: FC = () => {
    return (
        <div className={styles.header}>
            <HeaderItem title={'АКТИВЕН'}/>
            <HeaderItem title={'ФИО'}/>
        </div>
    );
}

export default TableHeader;