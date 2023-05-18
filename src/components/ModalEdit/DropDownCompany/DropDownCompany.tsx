import {FC, useMemo} from 'react';
import {Dropdown, MenuProps} from "antd";
import styles from './DropDownCompany.module.scss'

interface IDropDownCompany {
    value: string
    setValue: any
}

const DropDownCompany: FC<IDropDownCompany> = ({value, setValue}) => {

    const items: MenuProps['items'] = useMemo(() => ([
        {
            label: 'Юридическое лицо',
            key: 'Юридическое лицо',
        }
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
                   onChange={() => {}}/>
        </Dropdown>
    );
}

export default DropDownCompany;