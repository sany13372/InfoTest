import {Dispatch, FC, SetStateAction, useMemo} from 'react';
import {Dropdown, MenuProps} from "antd";
import styles from './Limit.module.scss'

interface ILimit {
    value: string
    setValue: Dispatch<SetStateAction<string>>
}

const Limit: FC<ILimit> = ({value, setValue}) => {

    const items: MenuProps['items'] = useMemo(() => ([
        {
            label: 'ПОКАЗАТЬ 10',
            key: 'ПОКАЗАТЬ 10',
        },
        {
            label: 'ПОКАЗАТЬ 20',
            key: 'ПОКАЗАТЬ 20',
        },
        {
            label: 'ПОКАЗАТЬ 30',
            key: 'ПОКАЗАТЬ 30',
        },
    ]), [])

    const onClick: MenuProps['onClick'] = ({key}) => {
        setValue(key)
    };

    return (
        <Dropdown menu={{items, onClick}}>
            <input type="text"
                   readOnly={true}
                   value={value}
                   className={styles.block}
                   onChange={() => {
                   }}/>
        </Dropdown>
    );
}

export default Limit;