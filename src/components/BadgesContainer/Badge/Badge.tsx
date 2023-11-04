import {FC, PropsWithChildren} from 'react';

import {IGenreBadge} from "../../../interfaces/genreBadge.interface";
import css from './Badge.module.css';

interface IProps extends PropsWithChildren {
    badge: IGenreBadge;
}

const Badge: FC<IProps> = ({badge}) => {
    const {id, name} = badge;

    return (
        <div key={id} className={css.btnBox}>
            <button>{name}</button>
        </div>
    );
};

export {Badge};