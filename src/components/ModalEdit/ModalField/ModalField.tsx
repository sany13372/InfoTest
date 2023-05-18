import {Dispatch, FC, SetStateAction} from 'react';
import styles from './ModalField.module.scss'

interface IModalField {
    title: string
    placeholder: string
    value: string
    setValue: Dispatch<SetStateAction<string>>
}

const ModalField: FC<IModalField> = ({placeholder, setValue, value, title}) => {
    return (
        <div>
            <h4 className={styles.title}>{title}</h4>
            <input
                className={styles.field}
                type="text"
                value={value}
                placeholder={placeholder}
                onChange={(e) => setValue(e.target.value)}
            />
        </div>
    );
}

export default ModalField;

