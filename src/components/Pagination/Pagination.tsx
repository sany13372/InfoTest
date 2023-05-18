import {Dispatch, FC, SetStateAction, useEffect} from 'react';
import ArrowImg from '../../assets/Arrow.svg'
import styles from './Pagination.module.scss'

interface IPagination {
    valueDefault: any
    setValuePagination: any
    dataLimit: string
    currentPage: number
    setCurrentPage: Dispatch<SetStateAction<number>>
}

const Pagination: FC<IPagination> = ({
                                         setValuePagination,
                                         valueDefault,
                                         dataLimit,
                                         setCurrentPage,
                                         currentPage,
                                     }) => {

    const getPaginationGroup = () => {
        let counts = []
        for (let i = 0; i < Math.ceil(valueDefault.length / Number(dataLimit.split('').slice(9, 11).join(''))); i++) {
            counts.push(i)
        }
        return counts.map((_, idx) => idx + 1);
    };

    const goToNextPage = () => {
        if (currentPage < getPaginationGroup().length) {
            setCurrentPage((currentPage) => currentPage + 1);
        }
    }

    const goToPreviousPage = () => {
        if (currentPage !== 1) {
            setCurrentPage((currentPage) => currentPage - 1);
        }
    }

    const getPaginatedData = () => {
        const startIndex = (currentPage * Number(dataLimit.split('').slice(9, 11).join(''))) - Number(dataLimit.split('').slice(9, 11).join(''));
        const endIndex = startIndex + Number(dataLimit.split('').slice(9, 11).join(''));
        return valueDefault.slice(startIndex, endIndex);
    };

    useEffect(() => {
        setValuePagination(getPaginatedData())
        console.log(getPaginatedData())
    }, [currentPage, valueDefault, dataLimit])

    //console.log(getPaginatedData())

    return (
        <div className={styles.pagination}>
            <div className={styles.arrowLeft} onClick={() => goToPreviousPage()}>
                <img src={ArrowImg} alt="Картинка"/>
            </div>
            <h4 className={styles.title}> {currentPage} из {getPaginationGroup().length}</h4>
            <div className={styles.arrowRight} onClick={() => goToNextPage()}>
                <img src={ArrowImg} alt="Картинка"/>
            </div>
        </div>
    );
}

export default Pagination;