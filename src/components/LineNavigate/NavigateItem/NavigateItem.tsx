import {FC} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import styles from './NavigateItem.module.scss'
import cn from 'clsx'

interface INavigateItem {
    title: string
    path: string
}

const NavigateItem: FC<INavigateItem> = ({path, title}) => {
    const nav = useNavigate()
    const location = useLocation()
    return (
        <div onClick={() => nav(path)} className={cn(styles.item,{
            [styles.active]:path === location.pathname
        })}>
            {title}
        </div>
    );
}

export default NavigateItem;