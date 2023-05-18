import {Dispatch, FC, SetStateAction, useEffect, useState} from 'react';
import SearchImg from '../../assets/Search.svg'
import styles from './SearchLine.module.scss'
import {IManager} from "../../types/all.interface";
import {useDebounce} from "../../hooks/useDebounce";

interface ISearchLine {
    defaultValue: IManager[]
    value: IManager[]
    setValue: Dispatch<SetStateAction<IManager[]>>
}

const SearchLine: FC<ISearchLine> = ({value, setValue, defaultValue}) => {
    const [searchQuery, setSearchQuery] = useState<string>('')
    const debounceSearch = useDebounce(searchQuery, 500)

    const searchHandle = () => {
        if (searchQuery !== '') {
            const filterUsers = value.filter((item: IManager) => item.name.toLowerCase().indexOf(debounceSearch.toLowerCase()) != -1);
            setValue(filterUsers)
        }
    }

    useEffect(() => {
        searchHandle()
    }, [debounceSearch])

    useEffect(() => {
        if (searchQuery === '') {
            setValue(defaultValue)
        }
    }, [searchQuery])
    return (
        <div className={styles.line}>
            <div>
                <img src={SearchImg} alt="Картинка"/>
            </div>
            <input type="text"
                   placeholder={'Быстрый поиск'}
                   value={searchQuery}
                   onChange={(e) => setSearchQuery(e.target.value)}
            />
        </div>
    );
}

export default SearchLine;