import {FC} from 'react';
import NavigateItem from "./NavigateItem/NavigateItem";
import styles from './LineNavigate.module.scss'

const LineNavigate: FC = () => {

    return (
        <div className={styles.block}>
            <NavigateItem title={'мои компании'} path={'/d'}/>
            <NavigateItem title={'мои менеджеры'} path={'/'}/>
        </div>
    );
}

export default LineNavigate;