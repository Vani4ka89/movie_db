import React, {FC} from 'react';

import img from '../../assets/images/tmdb.png';
import css from './Footer.module.css';

interface IProps {
    lightTheme: boolean;
}

const Footer: FC<IProps> = ({lightTheme}) => {
    return (
        <div className={`${lightTheme ? `${css.FooterLight}`:`${css.FooterDark}`}`}>
            <div className={css.content}>
                <img src={img} alt={"logo"}/>
                <div>This product uses the TMDB API but is not endorsed or certified by TMDB.</div>
            </div>
        </div>
    );
};

export {Footer};