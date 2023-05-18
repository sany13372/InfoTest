import {Dispatch, FC, SetStateAction} from 'react';
import {IManager} from "../../../types/all.interface";
import EditImg from '../../../assets/Edit.svg'
import TrashImg from '../../../assets/Trash.svg'
import styles from './BodyItem.module.scss'
import SwitcherThem from "./SwitcherThem/SwitcherThem";

interface IBodyItem {
    item: IManager
    setManagers: Dispatch<SetStateAction<IManager[]>>
    setModalType: Dispatch<SetStateAction<string>>
    setSelectManager: Dispatch<SetStateAction<string>>
}

const BodyItem: FC<IBodyItem> = ({item, setManagers, setModalType, setSelectManager}) => {
    const deletedManager = () => {
        setManagers((prev) => prev.filter((manager) => manager.id !== item.id))
    }

    const editManager = () => {
        setModalType('edit')
        setSelectManager(item.id)
    }

    return (
        <div className={styles.item}>
            <div className={styles.switcher}>
                <SwitcherThem/>
            </div>
            <div className={styles.info}>
                <h4>{item.name}</h4>
                <h6>Логин: {item.login}</h6>
                <h6>Почта: {item.email}</h6>
            </div>
            <div className={styles.actions}>
                <img src={EditImg} alt="Картинка" onClick={() => editManager()}/>
                <img src={TrashImg} alt="Картинка" onClick={() => deletedManager()}/>
            </div>
        </div>
    );
}

export default BodyItem;