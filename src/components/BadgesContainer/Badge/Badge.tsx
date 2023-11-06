import {FC, PropsWithChildren} from 'react';
import {useNavigate} from "react-router-dom";

import {IGenreBadge} from "../../../interfaces/genreBadge.interface";
import css from './Badge.module.css';


interface IProps extends PropsWithChildren {
    badge: IGenreBadge;
}

const Badge: FC<IProps> = ({badge}) => {
    const {id, name} = badge;
    const navigate = useNavigate();

    const getGenreMovies = () => {
        navigate(`/movies/genre/${id}`);
    }

    return (
        <div key={id} className={css.btnBox}>
            <button onClick={getGenreMovies}>{name}</button>
        </div>
    );
};

export {Badge};