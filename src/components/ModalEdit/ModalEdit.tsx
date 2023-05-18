import {Dispatch, FC, SetStateAction, useEffect, useState} from 'react';
import {Modal} from 'antd'
import ModalField from "./ModalField/ModalField";
import styles from './ModalEdit.module.scss'
import DropDownCompany from "./DropDownCompany/DropDownCompany";
import {IManager} from "../../types/all.interface";
import {getRandomNumber} from "../../utils/getRandomNumber";

interface IModalEdit {
    modalType: string
    setModalType: Dispatch<SetStateAction<string>>
    setSelectManager: Dispatch<SetStateAction<string>>
    setManagers: Dispatch<SetStateAction<IManager[]>>
    managers: IManager[]
    selectManager: string
}

const ModalEdit: FC<IModalEdit> = ({
                                       modalType,
                                       setModalType,
                                       setManagers,
                                       managers,
                                       setSelectManager,
                                       selectManager
                                   }) => {
    const [open, setOpen] = useState<boolean>(false)
    const [name, setName] = useState<string>('')
    const [login, setLogin] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [company, setCompany] = useState<string>('')

    useEffect(() => {
        if (modalType !== '') {
            setOpen(true)
        } else {
            setOpen(false)
        }
        if (selectManager) {
            const manager = managers.find((item: IManager) => item.id === selectManager)
            if (manager) {
                setLogin(manager.login)
                setName(manager.name)
                setEmail(manager.email)
            }
        }
    }, [modalType])

    const clearFields = () => {
        setEmail('')
        setLogin('')
        setName('')
        setSelectManager('')
    }

    const handleCancel = () => {
        setModalType('')
        clearFields()
    }

    const addManager = () => {
        const newManager: IManager = {
            id: String(getRandomNumber(5, 1000)),
            email: email,
            name: name,
            login: login
        }
        setManagers([newManager, ...managers])
        setModalType('')
        clearFields()
    }

    const editManager = () => {
        const index = managers.findIndex((item: IManager) => item.id === selectManager)
        const updateManager: IManager = {
            id: selectManager,
            email: email,
            name: name,
            login: login
        }
        managers[index] = updateManager
        setManagers([...managers])
        setModalType('')
        clearFields()
    }


    return (
        <Modal
            title={modalType === 'create' && 'Добавить менеджера' || modalType === 'edit' && 'Редактировать менеджера'}
            closable={true}
            open={open}
            onCancel={handleCancel}
            footer={null}
        >
            <ModalField title={'ФИО'} placeholder={'ФИО'} value={name} setValue={setName}/>
            <ModalField title={'Логин'} placeholder={'Логин'} value={login} setValue={setLogin}/>
            <ModalField title={'Почта'} placeholder={'Почта'} value={email} setValue={setEmail}/>
            {modalType === 'create' &&
                <>
                    <h4 className={styles.titleDropdown}>
                        Компания
                    </h4>
                    <DropDownCompany value={company} setValue={setCompany}/>
                </>}
            <div className={styles.line}>
                <h4 className={styles.title} onClick={() => handleCancel()}>
                    отменить
                </h4>
                <button className={styles.bluebtn}
                        onClick={() => modalType === 'create' ? addManager() : editManager()}>
                    {modalType === 'create' ? 'добавить' : 'обновить'}
                </button>
            </div>
        </Modal>
    );
}

export default ModalEdit;