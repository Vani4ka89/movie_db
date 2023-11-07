import React, {FC} from 'react';

import img from '../../assets/images/tmdb.png';
import css from './Footer.module.css';

const Footer: FC = () => {
    return (
        <div className={css.Footer}>
            <div className={css.content}>
                <img src={img} alt={"logo"}/>
                <div>This product uses the TMDB API but is not endorsed or certified by TMDB.</div>
            </div>
        </div>
    );
};

export {Footer};