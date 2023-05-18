import {FC} from 'react';
import PiramidImg from '../../assets/Piramid.svg'

const HeaderItem: FC<{title:string}> = ({title}) => {
    return (
        <div>
            <h4>{title}</h4>
            <img src={PiramidImg} alt="Картинка"/>
        </div>
    );
}

export default HeaderItem;