import {Dispatch, FC, SetStateAction} from 'react';
import {IManager} from "../../types/all.interface";
import BodyItem from "./BodyItem/BodyItem";

interface ITableBody {
    managers: IManager[]
    setManagers: Dispatch<SetStateAction<IManager[]>>
    setModalType: Dispatch<SetStateAction<string>>
    setSelectManager: Dispatch<SetStateAction<string>>
}

const TableBody: FC<ITableBody> = ({managers, setManagers, setModalType, setSelectManager}) => {
    return (
        <>
            {managers.map((manager) => <BodyItem setModalType={setModalType} setSelectManager={setSelectManager}
                                                 key={manager.id} item={manager} setManagers={setManagers}/>)}
        </>
    );
}

export default TableBody;