import {FC, PropsWithChildren} from 'react';
import {useNavigate} from "react-router-dom";

import {IGenreBadge} from "../../../interfaces";
import css from './Badge.module.css';
import {useSearchTerm} from "../../../hooks";


interface IProps extends PropsWithChildren {
    badge: IGenreBadge;
}

const Badge: FC<IProps> = ({badge}) => {
    const {id, name} = badge;
    const navigate = useNavigate();
    const {setSearchTerm} = useSearchTerm();

    const getGenreMovies = () => {
        navigate(`/movies/genre/${id}`);
        setSearchTerm('');
    };

    return (
        <div key={id} className={css.btnBox}>
            <button onClick={getGenreMovies}>{name}</button>
        </div>
    );
};

export {Badge};