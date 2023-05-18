import {FC, useEffect, useState} from 'react';
import LineNavigate from "../components/LineNavigate/LineNavigate";
import SearchLine from "../components/SearchLine/SearchLine";
import styles from './Home.module.scss'
import ButtonFilter from "../components/ButtonFilter/ButtonFilter";
import ButtonAdd from "../components/ButtonAdd/ButtonAdd";
import Pagination from "../components/Pagination/Pagination";
import {IManager} from "../types/all.interface";
import {data} from '../../data.json'
import Limit from "../components/Limit/Limit";
import TableHeader from "../components/TableHeader/TableHeader";
import TableBody from "../components/TableBody/TableBody";
import ModalEdit from "../components/ModalEdit/ModalEdit";
import cn from 'clsx'

const HomePage: FC = () => {
    const [managers, setManagers] = useState<IManager[]>([])
    const [managersPaginate, setManagersPaginate] = useState<IManager[]>([])
    const [limit, setLimit] = useState<string>('ПОКАЗАТЬ 10')
    const [modalType, setModalType] = useState<string>('')
    const [selectManager, setSelectManager] = useState<string>('')
    const [currentPage, setCurrentPage] = useState<number>(1);


    useEffect(() => {
        setManagers(data)
    }, [])

    return (
        <main className={styles.block}>
            <LineNavigate/>
            <SearchLine/>
            <div className={styles.lineButton}>
                <ButtonFilter/>
                <ButtonAdd setModalType={setModalType}/>
            </div>
            <div className={styles.linePagination}>
                <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage}
                            valueDefault={managers}
                            setValuePagination={setManagersPaginate}
                            limitData={limit}/>
                <Limit value={limit} setValue={setLimit}/>
            </div>
            <TableHeader/>
            <TableBody managers={managersPaginate} setSelectManager={setSelectManager} setModalType={setModalType}
                       setManagers={setManagers}/>
            <div className={cn(styles.linePagination,styles.bottom) }>
                <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} valueDefault={managers}
                            setValuePagination={setManagersPaginate}
                            limitData={limit}/>
                <Limit value={limit} setValue={setLimit}/>
            </div>
            <ModalEdit setSelectManager={setSelectManager} selectManager={selectManager} setManagers={setManagers}
                       managers={managers} setModalType={setModalType} modalType={modalType}/>
        </main>
    );
}

export default HomePage;